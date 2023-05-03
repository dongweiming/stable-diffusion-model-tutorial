---
sidebar_position: 6
---

### 前言

这小节我们开始学习Stable Diffusion里面的VAE，它的全称是变分自动编码器(Variational Auto-Encoder)，是机器学习中的一种人工神经网络结构。当然我们都不必了解的它的原理，只需要理解它是在SD模型的基础做微调的，类似于我们熟悉的滤镜，让生成的图片调整饱和度。

### 在页面上显示VAE设置

stable-diffusion-webui默认页面并没有显示VAE设置部分，所以需要先设置一下。首先点击「Settings」，然后点左侧菜单的「User interface」这个Tab，拉到下面有个选项叫做`Quicksettings list`，在输入框里面添加`,sd_vae,CLIP_stop_at_last_layers`:

![](https://user-images.githubusercontent.com/841395/235550791-5e533fb6-3a40-496b-86a6-e7bb663e4cc0.png)


最后点击上面的「Apply settings」，在点「Reload UI」就会重新刷新页面，即可看到头部的VAE区域:

![](https://user-images.githubusercontent.com/841395/235550786-f985b23d-a492-4b17-83d2-8c060fda3273.png)

另外我也顺手打开了`Clip skip`，在C站的图片参数中都有`Clip skip`选项，默认是1，需要改成常用的2，可以简单的理解这个值越高，AI就会省略越多的分类细项。

### 下载VAE模型

目前我们还没有任何的VAE模型，需要下载再使用。VAE主要是从Huggingface下载，而C站VAE比较少，并没有一个专门的过滤分类，只能通过搜索框输入vae过滤:

![](https://user-images.githubusercontent.com/841395/235550952-aec60057-a516-4b42-afa7-90fe95e19bad.png)

另外一个方式是看主模型下的提示，很多知名主模型里面会有VAE相关的内容，例如有打包VAE的模型(自带的就不需要额外加了)，或者在描述中建议你使用什么VAE。

举个例子: [RealDosMix](https://civitai.com/models/6925/realdosmix)的描述中提到:

> https://huggingface.co/stabilityai/sd-vae-ft-mse-original/blob/main/vae-ft-mse-840000-ema-pruned.ckpt https://huggingface.co/AIARTCHAN/aichan_blend/tree/main/vae Apply VAE. You will get better color results.


所以我们把这些VAE模型下载并把它放入到`models/VAE`目录下:

```bash
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt -O ~/workspace/stable-diffusion-webui/models/VAE/vae-ft-mse-840000-ema-pruned.ckpt
wget https://huggingface.co/AIARTCHAN/aichan_blend/resolve/main/vae/Anything-V3.0.vae.safetensors -O ~/workspace/stable-diffusion-webui/models/VAE/Anything-V3.0.vae.safetensors
wget "https://huggingface.co/AIARTCHAN/aichan_blend/resolve/main/vae/Berry's%20Mix.vae.safetensors" -O ~/workspace/stable-diffusion-webui/models/VAE/BerrysMix.vae.safetensors
```

下载好，然后点击VAE设置项右边的刷新按钮就可以看到这些模型了:

![](https://user-images.githubusercontent.com/841395/235630928-367d0b08-c92a-442b-a338-aacfe5ec9e86.png)

接着使用前面说的`X/Y/Z plot`脚本对比一下不加VAE和加了这三个VAE其中之一的效果:

![](https://user-images.githubusercontent.com/841395/235638714-70989b15-0621-4226-b6c1-bd2136c87985.png)

所谓没有对比就没有伤害，对比明显可以感受到不加VAE图片优点灰蒙蒙的，不够鲜艳，另外是细节不够，而加了不同的VAE都有了更好的颜色效果，细节更全了(微调)。

最后，注意不同的VAE适配的模型不同，也不是某个VAE可以用在任何模型下，否则可能会生成非常奇怪的图。

### 为什么VAE模型比较少？

我觉得主要的原因是很多软件已经实现了滤镜相关的功能，例如PS、一些美颜App、剪映等等。它们的效果更全更好，而且门槛很低。
