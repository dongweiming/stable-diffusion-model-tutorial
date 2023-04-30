---
sidebar_position: 4
---

### 前言

这节主要介绍stable-diffusion-webui提供的扩展(extension)功能。stable-diffusion-webui为了只保证核心功能并便于管理，将非核心功能解耦并转为扩展和脚本形式提供，这在很多知名项目都有相关实践。这节先介绍扩展。

### 扩展列表

项目的wiki有专门的页面: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Extensions

这里面列出来当前全部的扩展，比如常用的:

1. https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN 简体中文汉化
2. https://github.com/journey-ad/sd-webui-bilingual-localization 双语汉化
3. https://github.com/civitai/sd_civitai_extension C站的官方扩展，可以自动下载模型
4. https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper 另外一个C站的扩展
5. https://github.com/DominikDoom/a1111-sd-webui-tagcomplete TAG自动补全
6. https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients 根据美学权重优化图片
7. https://github.com/hnmr293/sd-webui-llul 用于给局部增加细节
8. https://github.com/Scholar01/sd-webui-mov2mov 制作视频，之后我们还会用得到。
9. https://github.com/CiaraStrawberry/TemporalKit 用于让视频顺滑，之后我们还会用得到它+Ebsynth。
10. https://github.com/canisminor1990/sd-webui-kitchen-theme 一个自定义主题，我这里只是提出这个思路，其实还有其他主题就不列出来了，我个人还是比较习惯原版UI。
11. https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg 移除图片背景（对，可以用SD抠图）。

### 扩展安装

目前安装扩展有三种方法，没有推荐偏向，按个人习惯即可。

#### 本地克隆

如官方文档说明，直接克隆代码到extensions目录即可

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients extensions/aesthetic-gradients
```

#### 通过UI界面「Install from URL」

点最后一个Tab「Extensions」，再点「Install from URL」，和上面的方法差不多，UI稍微封装了一下:

![](https://user-images.githubusercontent.com/841395/234532304-098d7487-d540-4fe0-8113-11b2850c8dca.png)

然后点「Installed」的「Apply and restart UI」重启UI就可以了。

#### 通过UI界面的「Available」

也是最后一个Tab「Extensions」，再点「Available」，默认是官方wiki的各个扩展的json，点击「Load from」就会加载这些扩展，把全部选项都去掉勾选就会列出全部扩展，点击扩展行最后一项的「Install」就可以安装了。

![](https://user-images.githubusercontent.com/841395/234593693-ed8c437a-3f30-4798-82dc-6ea808b76cb8.png)

### 开发扩展

可以遵循[官方文档](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Developing-extensions)，其实是很简单的，我这里就不重复粘贴了。
