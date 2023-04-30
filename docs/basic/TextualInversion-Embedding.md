---
sidebar_position: 3
---

### 前言

今天介绍Textual Inversion，中文名字是文本反转，在之前的版本里面这个功能叫做Embedding，也就是文本嵌入。通俗的讲其实就是把提示词打包成为一个提示词。如果你想要稳定的实现某个特定的角色、画风或者动作，通常会输入很多提示词去限定特征，这个是非常有门槛也很考验经验的。Textual Inversion就是解决这个问题的。

### 使用别人发布的Textual Inversion

在C站你可以搜到很多已经打包好的Textual Inversion，打开它的右侧筛选窗口，点击`Model types`里面的`Textual Inversion`，这样页面显示的都是打包好的:

![](https://user-images.githubusercontent.com/841395/234465186-9320e35f-fcda-46f9-920b-489f060df8fa.png)

例如你想要快速的创建一个《星期三》里面的女主Addams风格的图片，其实只需要下载 https://civitai.com/models/4115/jenna-ortega-wednesday-addams-embedding 这个Embedding包(只有30.92kb)，然后存放到本地的embeddings目录下:

``` bash
mkdir ~/workspace/stable-diffusion-webui/embeddings  # 这个目录可能不存在，需要创建一下
mv ~/Downloads/W3DDDN3SD4Y.pt ~/workspace/stable-diffusion-webui/embeddings
```

接着，点击网页右侧「Generate」按钮下面的「show/hide extra networks」按钮会显示一些额外选项，然后点击「Refresh」，在第一个Tab「Textual Inversion」里面就可以看到这个新的Embedding包了，之后就可以直接用`W3DDDN3SD4Y`作为一个提示词，而不用把那些都输入进来，非常方便。

### 自定义Textual Inversion

图做多了你会习惯性的使用一些提示词，因为他们会让图的质量变的更好，例如`photography, masterpiece, best quality, 8K, HDR`等等，那么这正好利用本文的Textual Inversion创建一些给自己用，例如我，创建了一个名字叫做dongwm的正面，还有一个叫做dongwm-nt的负面的。

怎么创建呢，点开页面的「Train」这个Tab，下面菜单栏第一项就是「Create embedding」，然后输入Embedding的名字和相关的提示文本即可，下面是我的正面提示词文本dongwm的内容:

![](https://user-images.githubusercontent.com/841395/234465716-cd5c3649-6314-4c5e-aa29-eb13edf4d068.png)

点击「Create embedding」按钮就会保存，如果未来你想修改替换它，可以重新准备提示词，然后勾选「Overwrite Old Embedding」再保存。

现在可以在Tab「Textual Inversion」看到三个Embedding包了:

![](https://user-images.githubusercontent.com/841395/234465991-5454d1e4-7147-482f-a383-378412697e09.png)


### 最终效果

现在利用上面提到的1个别人创建的和2个自定义的Textual Inversion，看看生成的图的效果:

![](https://user-images.githubusercontent.com/841395/234465359-50f2d1c5-468c-4ed7-8477-a7677895afac.png)


### 延伸阅读

1. https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion
