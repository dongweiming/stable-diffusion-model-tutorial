---
sidebar_position: 2
---

### 前言
今天这篇介绍怎么运行SD，包含在线使用和本地运行stable-diffusion-webui，并体验效果。

### Civitai平台

首先要介绍一个平台：[Civitai](https://civitai.com/)是目前最知名的Stable Diffusion AI 艺术模型的社区平台，用户把它称为C站，它里面有非常多用户上传的模型:

![](https://user-images.githubusercontent.com/841395/233838320-d2c443d6-9c3c-421f-a287-787b4f1f75e8.png)

另外可以通过图片过滤，且模型里面会列出相关用户上传的优质图片。图片页面有相关的提示词文本、使用的模型以及采样数据等参数，可以帮助还不熟悉Stable Diffusion的用户快速上手:

![](https://user-images.githubusercontent.com/841395/233838377-f3d5a0da-a5c8-4940-aaef-4dba29435332.png)

PS: `Browing mode`选择`Everything`有惊喜，请做好心理建设哟~

### 在线使用Stable Diffusion

如果你只是想要试玩一下，最简单的方法就是在线访问Stable Diffusion官方网站 https://beta.dreamstudio.ai/ ，可以免费产生约一百张图，之后需付少许费用。

![](https://user-images.githubusercontent.com/841395/233838971-cc84eb22-ed17-46bc-9c0d-30267ec280d8.png)

其实还有一些其他在线服务，但都是阉割版(例如不支持模型选择，不支持插件等等），无法体现Stable Diffusion的真实能力，就不推荐了，大家认准官方就好了。

### 本地部署Stable Diffusion

这个我主推的方式，也是玩Stable Diffusion最有意思的地方。目前最主流的方法就是使用[https://github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)这个项目，本地运行一个Python的Web UI。

首先要明确AI绘画需要进行大量的图像处理和计算，所以对于电脑是有硬件要求的:

> 本地运行需要需要足够大的显存(独立显卡的内存)，最低配置10GB显存，越大越好。 内存也不能太小，最好大于16GB。显存大小决定了你能生成的图片尺寸，一般而言图片尺寸越大，SD能发挥的地方越多，画面里填充的细节就越多。
> 通常都是用通过GPU来跑SD，因为GPU会加速计算。但用CPU跑也是可以的，但是速度会非常慢: 例如一张显卡30秒就能算好的图，CPU要算10分钟。

我的电脑是Macbook M1架构，所以参照的官方wiki文档[Installation on Apple Silicon](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon)配置即可，简单看了下启动脚本，即便不是Python开发者我认为也可以顺滑的完成启动过程。接下来是我配置的过程:

首先下载相关依赖和stable-diffusion-webui:

```bash
➜ brew install cmake protobuf rust python@3.10 git wget
➜ cd ~/workspace
➜ git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

目前只是代码克隆下来，还没有任何可用模型，此时可以从文档提到的[Hugging Face](https://huggingface.co/models?pipeline_tag=text-to-image&sort=downloads)或者[C站Civitai.com](https://www.Civitai.com)下载模型。

模型格式一般是.ckpt或者.safetensors 作为文件扩展名。格式的区别是:

`.ckpt`: 包含Python 代码的压缩文件，对于Python语言的程序来说很通用方便，缺点是文件很大，一般2-8G。
`.safetensors`: 只包含生成所需的数据，不包含代码，一般只有几十到几百M，加载文件也更安全和快速。

我一般从C站下载，找了一个例子:  https://civitai.com/models/25995/blindbox

![](https://user-images.githubusercontent.com/841395/233839700-642374fd-0bba-4e6d-aa55-59ea6c9e90ff.png)

注意，这是一个Lora模型(右侧信息中的Type是LORA)，所以和文档说的放在`models/Stable-diffusion`目录不同，应该放在`models/Lora`。

```shell
mv ~/Downloads/blindbox_V1Mix.safetensors ~/workspace/stable-diffusion-webui/models/Lora
```

然后拉到页面下面，我找到了一个生成的效果图 https://civitai.com/images/421118?period=AllTime&sort=Most+Reactions&modelVersionId=32988&modelId=25995&postId=128086

![](https://user-images.githubusercontent.com/841395/234440024-c45d5b70-c73c-4e1f-9dc6-038c837cda99.png)

可以看到生成这个图时候用的各个参数，注意其中的Model叫做`revAnimated_v11·，本地也没有需要下载，可以先搜一下就找到了: https://civitai.com/models/7371/rev-animated

![](https://user-images.githubusercontent.com/841395/233839915-af9b52e3-13a0-412c-a9ff-bcb28516bdf5.png)

可以看到右侧的Type说明它是一个CHECKPOINT的类型，下载并把它放在`models/Stable-diffusion`目录:

```bash
mv ~/Downloads/revAnimated_v122.safetensors ~/workspace/stable-diffusion-webui/models/Stable-diffusion
```

这里提一下`Checkpoint`这个模型类型，按我的理解它表示**存档点**，它是主模型。在相同的提示词和参数下生成的图片风格会由于主模型不同而效果差别非常大，这是因为每个主模型都是经过海量特定风格图片训练而成的合集，你必须有针对性的选择某个主模型。

另外这个模型子类型叫做`Checkpoint Merge`，也就是它是将多个模型混合在一起，而且合并后不同的模型占了不一样的比例的权重。

然后启动webUI:

```bash
cd stable-diffusion-webui
./webui.sh
```

第一次启动会下载相关依赖，比较慢，下载完成就会看到启动提示:

```bash
...
Running on local URL:  http://127.0.0.1:7860
```

打开浏览器，访问这个地址就可以看到Web页面了。SD目前支持文生图和图生图2个模式，这篇文章先体验文生图，图生图因为需要很多额外的知识我们过段时间铺垫完了再专门写。

### 文本转图片(txt2img)

这是SD最基础的功能，将文本提示转换为图像。还是用上面提到的blindbox的例子，就用它的各种参数，唯一要提的是「Batch size」选了8，，就是一次性生成8张图(事实是9张，另外一张是全部图的缩略图)，然后点右侧的「Generate」，就会开始生成了，大概10来分钟(如果单张图约1分钟):

![](https://user-images.githubusercontent.com/841395/234441778-eb2ecb12-425f-4b7a-8d6f-37e2a0032d9c.png)

生成的效果非常好。先介绍下各个参数项和用途:

1. 左侧最上面「Stable Diffusion checkpoint」是个下拉框，可以选择您想要的模型。有很多已经训练好的模型可供选择，如果你有自己特别的需求，也可以训练自己的模型。
2. 左侧有2个文本输入框，上面宽的那个输入正向提示词(prompt)文本，表示你希望这个图符合什么要求，下面窄的输入反向提示词(Negative Prompt)文本，表示这个图不希望符合什么要求。提示词可以是英文短句或单词，以逗号进行分隔，它们类似标签(tag)列表。
3. Sampling Method用于去噪，平衡生成图的速度和质量。内置多种算法可供选择。目前看起来DPM++ 2M Karras用的比较多。
4. Sampling Steps是去噪过程的采样步骤数。越多越好，但需要更长的时间。一般在20-28之间。
5. 宽度和高度(Width/Height)，输出图像的大小。按需调整即可。
6. Batch Count 批次数量，我更愿意用下面的Batch size调整生产图的总数。
7. Batch size，每一批次要生成的图像数量。可以在测试提示时多生成一些，因为每个生成的图像都会有所不同。生成的图像总数等于Batch Count乘以Batch size。
8. CFG(Classifier Free Guidance) scale，提示词相关性， 用于控制模型应在多大程度上遵从您的提示。他有几个只可选: 1(大多忽略你的提示)，3(更有创意)，7(遵循提示和自由之间的良好平衡)，15(更加遵守提示)，30(严格按照提示操作)，常用的是7，做个平衡。测试时可以换这个值体验区别。
9. Seed，生成的每个图像都有自己的种子值，修改这个值可以控制图像的内容。
10. Script。用户可以编写脚本代码，以实现一些特殊定制的功能。这个未来可以具体说，目前还没有遇到。

在生成的过程中会感受到图片从模糊到清晰的过程。如果你特别细心，可以看到正向prompt里面比原图多了一个`<lora:blindbox_V1Mix:1>`，这个其实是指定了Lora模型后添加的，选择Lora模型的方法是点开「Genrate」按钮下面中间那个按钮「show/hide extra network」，最右一个Tab就是Lora:

![](https://user-images.githubusercontent.com/841395/234441787-e4dc94f7-8151-46cf-8a5e-0c055224e72c.png)

选择你要用的模型就会在prompt输入框里面添加或者删除Lora模型。

可以看到，参数都一样的前提下，不同机器的相同seed出图是不一样的，但是在本机设置了同一个seed，重复生成图是一样的(注:把seed输入框改成默认的-1就是随机的):

PS: 一个好习惯是点击下面的Save，会把图片按照日期存在本地。

### 如何写好提示词

我也正在学习写好用好提示词，目前有2个技巧。

#### 寻找好的范例

提示词主要包含标签和艺术家，可以从如下几个有用的网站获取更多信息:

1. https://rentry.org/artists_sd-v1-4 艺术家列表
2. https://www.urania.ai/top-sd-artists 艺术家列表
3. https://stablediffusion.fr/artists 艺术家列表
4. https://ai.dawnmark.cn/  图像细节，如风格、光照等
5. https://tinygeeker.github.io/p/ai-prompt-generator/ AI 标签生成器，身体细节
6. https://github.com/wfjsw/danbooru-diffusion-prompt-builder Danbooru 标签超市

当然这种网站很多，欢迎浏览补充

#### 获取AI生成图的提示词以及其它参数

用SD生成的图的元数据中包含了生产时用的提示词以及各个参数等信息，在`stable-diffusion-webui`里面有个页面叫做「PNG info」，非常实用，只需要上传图片就可以看到这些原始信息:

![](https://user-images.githubusercontent.com/841395/235357216-5a56c2b4-0b5f-4fb6-b964-80e01bf325b0.png)

BTW，现在各平台限制AI图也是基于这个源数据识别(用`imagemagick`的`identify`)，所以再处理掉图片文件中的这些信息就可以了。

### 在Colab上运行stable-diffusion-webui

本来可以使用Google Colab免费运行stable-diffusion-webui，但是已经不再容许免费用户这么用了，4月21日，Colab的产品lead发推提到了这件事，所以如果你看到有些教程提到使用Colab要注意得是付费用户了。不过我本来也不想推荐这个方式，主要是免费用户的空间是25G，如果你下载主模型等等相关资源是很容易超的，所以开始主推本地运行。

Colab付费用户可以看这个项目: https://github.com/camenduru/stable-diffusion-webui-colab
