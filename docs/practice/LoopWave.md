---
sidebar_position: 1
---

import ReactPlayer from 'react-player'

### 前言

这篇实践生成一个渐变的图片动画效果。它使用[Loopback Wave](https://rentry.org/sd-loopback-wave)这个脚本。

### 配置脚本

先下载它:

```bash
➜ wget https://files.catbox.moe/0hx51x.py -O ~/workspace/stable-diffusion-webui/scripts/loopback-wave.py
```

然后在「Settings」Tab里面点击「Reload UI」重启Web，就可以在`img2img`模式里面看到这个脚本了。

### 创建视频

接着我们上传一张图(或者用`txt2img`生成一张图后Send进来)。我这里列出来的例子是通过`txt2img`模式生成的一张使用blindbox人物的Lora模型生成的:

![](https://user-images.githubusercontent.com/841395/235942862-4d2403ae-a98c-44f3-8f38-f9d79210fcdc.png)

接着我们选择这个脚本，它的名字是`Loopback Wave V1.4.1`，具体参数设置如下:

![](https://user-images.githubusercontent.com/841395/235944748-498fe050-505e-42e9-a292-b5da05d547fe.png)

主要参数的意义如下:

1. Frames。帧数，也就是一共生成多少张图片。
2. Frames Per Wave。每次Wave(一轮变化)多少帧、
3. Max additional denoise。最大额外噪音，通常选择0。
4. Prompt Changes。**这个很重要**，决定了你希望图片朝着什么方向发展。它是一个文本框，里面按行输入你希望这些帧在什么位置开始某种变化，所以要通过其他提示词来指定，每行代码一次设置，`10::SOME PROMTS`的意思是从10帧开始(2个冒号隔开)，加上headphones耳机，然后从30帧开始额外使用红头发(原来是黑色)，再从70帧开始换成黄头发。
5. Save results as video。勾选它会直接把这些图片生成视频，当然也可以生成图后先人工筛选，把不好的图去掉，再用ffmepg、AE、剪映等工具自行生成。
6. Video Name。虽然它的意思是视频名字，但实际生成的是视频目录的前缀，意义不大。
7. Frames per second。每秒的帧数，越多那么最终效果变化越多越快，否则画面静止的感受越长，我一般用默认的4。
8. Video encoding。脚本官网里面提到，选择的编码方案需要在编译ffmpeg时指定才可用，我一般选择`H.264`格式。

另外重绘幅度(Denoising strength)用了0.25(不希望太发散)，我们通过改变图片的头发颜色产生渐变的效果，下面是生成的视频结果(在`outputs/img2img-images/loopback-wave`目录下):


<ReactPlayer playing controls url="https://user-images.githubusercontent.com/841395/235954479-e5561938-f223-4f37-9f0e-b430c7fc6b38.mp4" />

是不是还挺惊艳的？

### 要不要使用stable-diffusion-webui自带的视频合成功能？

我的意见是不用。其实用图片生成视频是一件非常容易的事情，stable-diffusion-webui其实也就是用了ffmpeg加了一些参数罢了，虽然提供了一些参数值的选择，但是它的问题是程序设置死了，不灵活，例如:

1. 不支持Mac自带的QuickTime Player播放器播放。因为需要额外使用参数
2. 不支持视频尺寸的修改

总之，无法满足更多需要，如果你会写代码可以自己维护一个loopback-wave或者手动命令行，如果不懂技术可以使用AE等工具生成。

这里推荐一下上面视频我用的命令:

``` bash
ffmpeg -framerate 10 -start_number 0 -i /Users/weiming.dong/workspace/stable-diffusion-webui/outputs/img2img-images/loopback-wave/485312189.0/2023-05-03/%d.png -c:v libx264 -b:v 0 -crf 40 -vf scale=2048:2048 -preset slow -pix_fmt yuv420p output.mp4
```

### 提示词改变的简化

在一些主模型和Lora里面，`Prompt Changes`里面的提示词只加入需要额外扩展或者替换的部分即可，例如上例可以这么写:

```bash
10::headphones
40::headphones,red hair,
70::headphones,yellow hair,
```

这样简单轻便，不需要全部提示词写进去，但是要注意不是所有模型都可以这样，可能会出现奇怪的效果，我的习惯是直接把原始的提示词都写进去。

TODO: 这一块逻辑未来可以读读它的代码确认一下。
