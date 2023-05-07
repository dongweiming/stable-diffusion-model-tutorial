---
sidebar_position: 5
---

### 前言

这节主要介绍stable-diffusion-webui提供的脚本(script)功能。脚本和扩展一样也被独立出来，脚本主要是涉及生成图片的逻辑上，不涉及生成算法，类似于Python语言的装饰器的用途，可以在生成图片前按照规则调整提示词、参数值等内容，对于执行的每个步骤插入更多的操作。

### 脚本和扩展的区别

按我的理解，扩展是为了扩充stable-diffusion-webui的UI界面，所以会涉及前端的静态文件(如javascript、CSS等），所以它会在Web UI页面上新增Tab。

而脚本如其名字，是实现某个功能的Python脚本，突出轻便简单，写代码时需要继承`scripts.Script`这个基类，按照对应的方法编写对应逻辑。

### 脚本列表

项目的wiki有专门的页面: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Custom-Scripts

这里面列出来当前全部的扩展，但是我还没有用到。目前只用到了官方项目中自带的一些:

```bash
ls ~/workspace/stable-diffusion-webui/scripts
poor_mans_outpainting.py     prompts_from_file.py prompt_matrix.py
custom_code.py               postprocessing_codeformer.py sd_upscale.py
img2imgalt.py                postprocessing_gfpgan.py     xyz_grid.py
loopback.py                  postprocessing_upscale.py
outpainting_mk_2.py
```

这些脚本有的可以在`txt2img`和`img2img`模式下都可以使用，有的只能用于`img2img`模式，请注意。

接下来我重点介绍几个常用的脚本，其他的欢迎大家补充用途和用法

#### Prompt matrix

如其名字，按照不同的提示词生成图片矩阵。我们过去写提示词，就是一些标签然后逗号隔开。但是如果你想要了解或者不确定几个提示词的组合效果，那么可能你得多次生成，效率低也不方便。

而启用这个脚本后，可以使用`|`语法分割词，这样会组成多个提示词组合让你一次性的看到效果:

![](https://user-images.githubusercontent.com/841395/235455919-c778a2de-f2cc-4df8-9d1a-f71287bb40d3.png)

可以看到正面提示词最后2个，用的是`headphones|,<lora:blindbox_v1_mix:1>| <lora:iu_V35:1>`，这样就可以生成一个矩阵图完整的看到这两种lora模型以及是否戴耳机的效果:

![](https://user-images.githubusercontent.com/841395/235455910-2193a7ec-5de0-4310-9e8e-e0fab7a4f5fd.png)

图里面分别是`戴耳机用blindbox`、`戴耳机用iu`、`不戴耳机用blindbox`、`不戴耳机用iu`。Btw，可以看到换个Lora会让效果差别极大~

#### X/Y/Z plot

无论是初学者还是有一定经验使用SD的用户很多时候也不能确定各个参数到底取那个值是最符合需求的，按过去的模式只能是修改参数，然后生成图保存下来，在修改参数然后生成图。不断地循环，最终尝试出最佳的值。但是这个过程是非常漫长繁琐的，而这个`X/Y/Z plot`脚本可以快速的放我们了解这些功能参数的意义和效果。接下来我们通过调整各个参数生成一个矩阵图，这样非常方便对比出参数的效果。

首先看页面的选择(提示词等还是用了之前生产的[一张图](https://civitai.com/images/375791?modelVersionId=32988&prioritizedUserIds=266262&period=AllTime&sort=Most+Reactions&limit=20)，额外加了个负面次`nsfw`，也就是`not safe from work`，除此之外我指定了seed方便对比):

![](https://user-images.githubusercontent.com/841395/235453223-243c9dda-26f6-4c74-96a6-29dd4ab7c9ed.png)

这个例子里x/y/z三个维度我都选择了，分别是:

1. 采样器，右侧点击黄色图标可以列出全部的采样方案，我这里只列出了部分
2. CFG scale。`5-15(+3)`表示从5-12范围内，按照+3的方式递增，也就是`5,8,11,14`这4个值。
3. Steps。`20-35[3]`是另外一种表达方式，是从20-35范围内，找3个值，也就是`20,27,35`这3个值。

注意，你选择的范围越大就越耗时（这是相乘的关系)，例如采样器本来有二十多种，我只选择了3种。可以通过这样的方式小范围的了解不同参数的值的效果，我这里是一个比较极端的例子(完成生成大概花了1个小时)，如果经验多了会慢慢的知道不同参数什么值会更合理。

它的结果的图很大，我截个整体的图，在截取step为27的子图:

![](https://user-images.githubusercontent.com/841395/235453805-7d4cdeb5-0386-4828-acd3-c4c95d192279.png)

![](https://user-images.githubusercontent.com/841395/235453873-8cc59e28-dcca-427a-b957-79680c6fcd49.png)

另外不一定需要三个轴都选择，可以只选2个甚至1个指标，然后生成参数值变化时对图的影响，但是要注意需要固定seed。

### 脚本安装

目前安装脚本也有三种方法，没有推荐偏向，按个人习惯即可。

#### 手动拷贝文件

第一种是直接把项目中的脚本拷贝到`scripts`目录下，例如 https://github.com/memes-forever/Stable-diffusion-webui-video

可以这样:

```bash
wget https://raw.githubusercontent.com/memes-forever/Stable-diffusion-webui-video/main/videos.py -O ~/workspace/stable-diffusion-webui/scripts/videos.py
```

当然，先git clone代码再拷贝文件也可以。

#### 通过UI界面「Install from URL」或者「Available」

如果项目里面脚本放在scripts目录下，还可以直接使用安装扩展的方法。点最后一个Tab「Extensions」，再点「Install from URL」或者「Available」，安装后点击「Installed」的「Apply and restart UI」重启UI就可以了。

### 开发脚本

官方文档有[一个例子](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Custom-Scripts#saving-steps-of-the-sampling-process)，非常清晰，你需要对Gradio有基本了解，然后修改`title`、`ui`和`run`方法的逻辑即可。

当然你还可以通过[官方文档Developing custom scripts](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Developing-custom-scripts)获取更多信息。

### 延伸阅读

1. https://gigazine.net/gsc_news/en/20220909-automatic1111-stable-diffusion-webui-prompt-matrix/
2. https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Custom-Scripts
