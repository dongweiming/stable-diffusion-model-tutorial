---
sidebar_position: 1
---

### 前言

当选择额外的`Textual Inversion`、`Hypernetworks`、`Checkpoints`和`Lora`模型是，所有我们下载的模型选项都是默认的`No Preview`:

![](https://user-images.githubusercontent.com/841395/235805737-aced116f-0c59-4ee9-b80e-68aadb0653d3.gif)

这样很不方便，时间长了你可以也记不住或者记混了。那么怎么解决呢？

### 方案1

翻了一下SD的代码。只要下载一个图片，放在模型所在目录并把名字设置成和模型名字一样(文件后缀为png)即可。

举例[RealDosMix](https://civitai.com/models/6925/realdosmix)这个Checkpoint模型，我们下载图片并把它转化成png格式:

```bash
➜ wget https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0795dfb9-386a-4ba3-df43-d6c512370e00/width\=512/00010-2993543141-best%20quality,___.jpeg -O realdosmix_.jpeg
➜ magick realdosmix_.jpeg models/Stable-diffusion/realdosmix_.png
➜ ll models/Stable-diffusion/realdosmix_.*
-rw-r--r--  1 weiming.dong  staff   335K May  3 07:29 models/Stable-diffusion/realdosmix_.png
-rw-r--r--@ 1 weiming.dong  staff   2.0G Apr 21 10:10 models/Stable-diffusion/realdosmix_.safetensors
```

然后点击「Refresh」按钮，就可以看到RealDosMix模型的预览图出现了:

![](https://user-images.githubusercontent.com/841395/235806591-d880b5f8-e3b7-45e5-b936-2e10aa5daee7.png)

### 方案2

我下载的各类模型太多，如果挨个下载++转换格式+改名比较麻烦，其实还有一个更便捷的方案，就是之前在扩展那篇文章提到的 https://github.com/butaixianran/Stable-Diffusion-Webui-Civitai-Helper 它会自动同步预览图。

先安装并「Reload UI」。然后点击「Civitai Helper」Tab，先勾选「SKip NSFW Preview Images」，防止更新一些18禁的预览图😄

再点击「Scan」按钮同步信息。之后点击「Refresh」按钮，就可以看到从Lora下载的模型大部分预览图出现了(没出现是被过滤啦):

![](https://user-images.githubusercontent.com/841395/235838138-dfa43d20-b914-45dd-b921-cdd781e3000f.gif)

当然，不是方案2是终极方案，因为有些18禁的图片作为预览图不方便，可以用方案1替换成其他的图片。
