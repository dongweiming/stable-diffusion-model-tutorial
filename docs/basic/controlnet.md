---
sidebar_position: 9
---

### 前言

在ControlNet出现之前，AI绘画更像开盲盒，在图像生成前，你永远都不知道它会是一张怎样的图。ControlNet 的出现，真正意义上让AI绘画上升到生产力级别。简单来说可以用ControlNet精准控制AI图像的生成效果。

ControlNet就是在大型扩散生成模型的基础上，再加上一个结构，使得扩散生成模型能够接受一个新的“图像输入”。并且对模型的输出起到控制作用，使其与输入图像类似。

在实际的AI绘图，用户要解决2个关键问题:

1. 图像的精准控制。例如确定背景、结构等
2. 图像的风格控制。例如确定动作、表情等

无论你使用再准确的提示词再好的微调模型也是无法实现的。而通过ControlNet的应用模型，可以让这2个问题获得解决。所以不仅是常见的人物画像，在建筑、室内、产品图、平面设计、海报等等领域都可以提高生产力甚至做出设计师难以做出的效果。

### 安装

需要先安装扩展，点击「Extensions」Tab下的「Install from URL」子Tab，然后输入: https://github.com/Mikubill/sd-webui-controlnet，再点击「Install」，在提示安装完成后，点击「Apply and restart UI」按钮重启UI。

接着需要下载应用模型。我使用了最新的ControlNet-v1-1-nightly的模型:

```bash
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_ip2p.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_shuffle.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_tile.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11e_sd15_depth.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1e_sd15_tile.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_inpaint.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_lineart.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_mlsd.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_normalbae.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_openpose.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_scribble.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_seg.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/blob/main/control_v11p_sd15_softedge.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/blob/main/control_v11p_sd15s2_lineart_anime.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_softedge.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
wget https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15s2_lineart_anime.pth -P ~/workspace/stable-diffusion-webui/models/ControlNet
```

这些模型文件都在1.3G左右，文件比较大，可以按需下载。

#### 解决安装报错问题

我在安装这个插件时，发现报错了:

```bash
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

需要安装Mac开发工具再重新安装:

```bash
➜ xcode-select --install
➜ cd ~/workspace/stable-diffusion-webui
➜ venv/bin/pip install svglib fvcore
```

### 初体验

我们通过一个李多惠的照片在txt2img模式下生成图片作为例子:

![](https://user-images.githubusercontent.com/841395/236669883-38f254dd-464d-4f33-b2b4-263a96eec9e6.jpg)

这个招聘的动作其实是复杂的，用提示词不可能表达出来，现在有了ControlNet就非常容易还原，下面是用canny、openpose这个两个不同的应用模型，加上对应大模型和提示词最终生成的图:

Counterfeit:

![](https://user-images.githubusercontent.com/841395/236670546-5f555d12-3deb-4ea9-bbff-d69cb34111e8.jpeg)

ReV Animated:

![](https://user-images.githubusercontent.com/841395/236671900-ef72bfdc-73be-46a7-a17d-f92bb1f4400a.jpeg)

可以看到每个图都固定对了动作，衣服结构、头发等细节也都非常还原。

另外这次我们只讨论动作是不是正确，手部问题一直是AI绘画的难点(SD很难理解人应该有5个手指🤦🏻‍♀️)，负面提示词也很难解决，我之后会专门写一篇文章介绍怎么修复。

接着了解一下各个参数及其意义:

![](https://user-images.githubusercontent.com/841395/236672180-6d16ac49-982e-4f40-bfe5-f08b55e11d03.pn)

1. Single Image。上传单张图片。
2. Batch。处理多张图片。Input Directory填写的是待处理的图片所在路径。
3. Enable。在生图时激活ControlNet，必选。
4. Low VRAM。生图使用ControlNet会吃更多VRAM，此选项可降低VRAM使用量。它是建议8G以下显存开启，我16G也会开启。
5. Pixel Perfect。由ControlNet自动决定Preprocessor分辨率。
6. Allow Preview。允许预览生图结果，会显示该模型侦测的线条或骨架。一会我们会展开
7. Preprocessor 预处理器。Preprocessor是先将上传的图片处理过一轮，例如Scribbles会将彩色图片转成线稿。通常Preprocessor和下面Model二者要一致，但如果你的图片不需要处理(例如已经在PS里处理过了)，Preprocessor可留空。
8. Model。设置生图的时候使用哪个ControlNet模型。
9. Control Weight。ControlNet在生图时的权重。
10. Starting Control Step。开始参与生图的步数。
11. Ending Control Step。结束参与生图的步数。
12. Preprocessor Resolution。预处理器的分辨率。当然我也建议勾选上面的「Pixel Perfect」让ControlNet自动决定。
13. Control Mode。控制生图时，要AI平衡二者(Balanced)，或是偏重你的提示词(My prompt is more important)，还是偏重ControlNet (ControlNet is more important)。
14. Resize Mode。当生成图和原图的尺寸不一致时选择调整模式。

### 应用模型介绍

ControlNet包含多个应用模型，这小节介绍几个主要的模型。这节的内容大部分来自于延伸阅读链接5，我觉得比我之前的写的好，所以直接替换了。

#### OpenPose 姿势识别

通过姿势识别，达到精准控制人体动作。除了生成单人的姿势，它还可以生成多人的姿势，此外还有手部骨骼模型，解决手部绘图不精准问题。以下图为例：左侧为参考图像，经 OpenPose 精准识别后，得出中间的骨骼姿势，再用文生图功能，描述主体内容、场景细节和画风后，就能得到一张同样姿势，但风格完全不同的图。

![](https://user-images.githubusercontent.com/841395/236655611-fbd16417-30ad-4cac-b057-24ff31ff402b.jpeg)

#### Canny 边缘检测

Canny 模型可以根据边缘检测，从原始图片中提取线稿，再根据提示词，来生成同样构图的画面，也可以用来给线稿上色。

![](https://user-images.githubusercontent.com/841395/236655636-c1514649-f488-43fa-8c04-1794fef7991b.jpeg)

#### HED 边缘检测

跟 Canny 类似，但自由发挥程度更高。HED 边界保留了输入图像中的细节，绘制的人物明暗对比明显，轮廓感更强，适合在保持原来构图的基础上对画面风格进行改变时使用。

![](https://user-images.githubusercontent.com/841395/236655655-1a9e9825-d703-4c05-84e7-35629dcd0caa.jpeg)

#### Scribble 黑白稿提取

涂鸦成图，比 HED 和 Canny 的自由发挥程度更高，也可以用于对手绘线稿进行着色处理。

![](https://user-images.githubusercontent.com/841395/236655666-583041ba-bae9-4925-975f-08438343cd4a.jpeg)

#### Mlsd 直线检测

通过分析图片的线条结构和几何形状来构建出建筑外框，适合建筑设计的使用。

![](https://user-images.githubusercontent.com/841395/236655676-0a3fa8cf-8078-4670-ba8f-e1e46ca45dab.jpeg)

#### Seg 区块标注

通过对原图内容进行语义分割，可以区分画面色块，适用于大场景的画风更改。

![](https://user-images.githubusercontent.com/841395/236655693-dd62bf8e-a7a2-4eb3-901d-8590bfe0f85b.jpeg)

#### Normal Map 法线贴图

适用于三维立体图，通过提取用户输入图片中的 3D 物体的法线向量，以法线为参考绘制出一副新图，此图与原图的光影效果完全相同。

![](https://user-images.githubusercontent.com/841395/236655708-2d1c99f8-0707-4344-822d-d1e07b577620.jpeg)

#### Depth 深度检测

通过提取原始图片中的深度信息，可以生成具有同样深度结构的图。还可以通过 3D 建模软件直接搭建出一个简单的场景，再用 Depth 模型渲染出图。

![](https://user-images.githubusercontent.com/841395/236655720-d118d83d-4eeb-419e-a8df-80caf91bbc57.jpeg)

#### Tile

输入图片，选取一个区域，使其变清晰的模型。

### Multi ControlNet

缺省安装后只会使用一个ControlNet，但是叠加多个有助于生成更好的图片，所以可以开启多个ControlNet的组合使用，对图像进行多条件控制。例如对一张图像的背景和人物姿态分别进行控制，那可以配置 2 个 ControlNet，第 1 个 ControlNet 使用 Depth 模型对背景进行结构提取并重新风格化，第 2 个 ControlNet 使用 OpenPose 模型对人物进行姿态控制。此外在保持 Seed 种子数相同的情况下，固定出画面结构和风格，然后定义人物不同姿态，渲染后进行多帧图像拼接，就能生成一段动画。

要激活Multi ControlNet，需要进入「Settings」，在左侧菜单栏选择「 ControlNet」，拖动拉杆，设置要激活的ControlNet数量(我设置成了3):

![](https://user-images.githubusercontent.com/841395/236672480-2d07e0c5-e4d9-4cf6-b206-ff65e2607bc0.png)

设置后需要重启webui。


### 延伸阅读

1. https://arxiv.org/abs/2302.05543
2. https://github.com/lllyasviel/ControlNet
3. https://github.com/lllyasviel/ControlNet-v1-1-nightly
4. https://github.com/Mikubill/sd-webui-controlnet
5. https://www.uisdc.com/stable-diffusion-2
