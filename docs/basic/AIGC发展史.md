---
sidebar_position: 1
---

### 前言

AIGC相关的内容最近非常热，所以我也来蹭个热度。这篇是这个话题的第一篇，先介绍一下AIGC和相关的创作工具。

### AIGC

AIGC全文叫做「AI Gererative Content」，这是继专业生产内容（PGC, Professional-generated Content）、用户生产内容（UGC, User-generated Content）之后的新型内容创作方式。


AIGC进入大众视野里程碑的一件事是去年9月初，下面这幅使用MidJourney生成的数字油画《空间歌剧院》:

![](https://user-images.githubusercontent.com/841395/235381847-03022564-4d65-4906-8500-326f2a04db05.jpeg)

在美国科罗拉多州博览会(Colorado State Fair)的艺术比赛中夺得了第一名，之后大赛评委并未对该幅作品进行改判，并认为即使它是AI生成的作品，也依旧配得上这样的成绩，这一新闻被报道后引发了圈内外的广泛讨论。

再之后，一个B站UP主使用Midjourney，根据歌词含义生成的图片制作了万能青年旅店的作品《[杀死那个石家庄人](https://www.bilibili.com/video/BV1Me4y1B7j4/)》火出了圈，接着很多UP主发布了类似的「但是每一句歌词都由AI作画」主题的作品，例如《Young And Beautiful》、《孤勇者》、《七里香》等。我也是从这个阶段开始关注到这个领域，当然那时候的理解还停留在AI绘画（txt2img，也就是输入文字，计算机会把它翻译成图像）这个小方向，其实现在再看，生成的内容的领域是非常广泛的。

通过AIGC这种创作方式，可以让我这种毫无绘画基础的非职业用户也可以创作出非常满意的作品。

### AIGC的主要创作工具

接着我根据时间线列出我认为非常重要的一些创作工具。

#### DALL-E

2021年1月，OpenAI推出了DALL－E模型，通过120亿参数版本的GPT-3 Transformer模型来理解自然语言输入并生成相应的图片。但是它的推出主要用于研究，所以访问权限仅限于小部分测试版用户。这个模型不稳定对于细节理解处理不完善，且会出现严重的逻辑或者事实错误，但是作为开创者，还是得专门提出来的。

在发布DALL-E时还发布了[CLIP](https://github.com/openai/CLIP)（Contrastive Language-Image Pre-training，对比图文预训练）。CLIP是一种神经网络，为输入的图像返回最佳的标题。它所做的事情与DALL-E所做的相反——它是将图像转换为文本，而DALL-E是将文本转换为图像。引入CLIP的目的是为了学习物体的视觉和文字表示之间的联系。

#### Disco Diffusion

[Disco Diffusion](https://colab.research.google.com/github/alembics/disco-diffusion/blob/main/Disco_Diffusion.ipynb)是21年10月开始开源的一个基于diffusion+CLIP的深度学习模型，输入文本便能生成图像画面。这个工具通常运行在Google Colab平台上，无需本地配置，所以对电脑配置不做要求，在浏览器里面运行即可。

下面是主创是艺术家兼设计师Somnai在项目开源时发布的效果图:

![](https://video.twimg.com/tweet_video/FIE5Zq3VQAIDm00.mp4)

在实际使用中，它对于景色、主体以及画风方面的内容效果还是不错的，但是人物效果比较差。在Somnai加入到MidJourney后，这个项目就停止了更新。

#### DALL-E 2

2022年4月，OpenAI发布了新版本的[DALL-E 2](https://labs.openai.com/)，它是DALL-E的升级版本，另外能对所生成的图像进行二次编辑，现在即使是新用户也需要充值才能生成新图，我没有体验，只是通过官方Ins账号展示的动态侧面了解，不过目前现在还可以通过Bing体验: https://www.bing.com/create/

![](https://user-images.githubusercontent.com/841395/234293929-ca16a0fa-c876-48c6-ba49-6245db350063.jpeg)

感受它生成的画作相对下面说的2种比较单一且简单。

#### MidJourney

MidJourney的v1是2022年2月发布的，它火出圈是由于22年7月份的v3版本。

它的特点是综合能力比较全面，艺术性很强，非常像艺术家制作的作品，另外图像生成速度更快，早期主要是很多艺术家会借助Midjourney作为创作灵感。另外，因为 Midjourney 搭载在 Discord 频道上，所以有非常良好的社区讨论环境和用户基础。

第二次火其实就是今年3月份发布V5, 官方说这个版本在生成图像的人物真实程度、手指细节等方面都有了显著改善，并且在提示词理解的准确性、审美多样性和语言理解方面也都取得了进步。

![](https://user-images.githubusercontent.com/841395/234203241-05713fad-401d-4736-8282-85c64f866bd6.png)

现在新用户已经不再可以免费生成图片了，需要订阅。就不演示了，我有一下两个经验:

1. 如果你不了解怎么输入正确有价值的提示词，可以从类似延伸阅读链接5这样的网址去生成prompt，类似网站很多
2. 如果想成为MidJourney高手，你需要学会很多技巧，可以网上搜各种相关的文章和视频，例如延伸阅读链接9和10(当然官方文档也是要看的)

#### Stable Diffusion

2022年8月，Stable Diffusion开源，

Stable Diffusion算法上基于2021年12月提出的潜在扩散模型（LDM / Latent Diffusion Model）和2015 年提出的扩散模型（DM / Diffusion Model，它是基于Google的Transformer模型），所以名字里有Diffusion，我猜Stable表示现在算法已经稳定下来了。

有必要先说一下这个项目让人疑惑的点，它是开源的，如果你自己研究过，可以从Github上找到三个同名的项目:

1. https://github.com/CompVis/stable-diffusion
2. https://github.com/runwayml/stable-diffusion
3. https://github.com/Stability-AI/stablediffusion

首先是慕尼黑大学机器视觉学习组CompVis写了这个论文，AI视频剪辑技术创业公司Runway提供专业知识帮助实现了第一个版本，初创公司StabilityAI投钱，最终由Stable Diffusion推向主流市场(其实现在已经是Version 2了)。所以现在只需要关注第三个项目就可以了。

SD会在运行时将成像过程分离成“扩散（diffusion）”的过程——从有噪声的情况开始，根据CLIP对图像和文本之间相关性打分，逐渐改善图像，直到完全没有噪声，这样就逐步接近所提供的文本描述。具体的原理可以看延伸阅读链接8.

SD可以在短短几秒钟内生成清晰度高，还原度佳、风格选择很广的图片，它最大的突破是任何人都能免费下载并使用其开源代码，不需要像MidJourney和DALL-E那样把它作为云服务付费用。

#### Stable Diffusion XL

目前SD最让使用者苦恼的2个缺点:

1. 需要输入非常长的提示词(prompts)
2. 对于人体结构的处理有瑕疵，经常出现动作和人体结构异常

2023年4月，Stability AI发布了Beta版本的[Stable Diffusion XL](https://clipdrop.co/stable-diffusion)，并提到在训练结束后参数稳定后会开源，并改善了上述的2个缺点。

### MidJourney和Stable Diffusion的对比

首先要说明的是AI绘图是有高度的随机性和风格化的，即便你有比较准确的提示词也许换个seed可以让结果反转，其实不好直接对比。我这里只是在侧面来对比:

1. 价格。MidJourney毕竟是为了盈利的，远不如自己部署到自己服务器的开销要低。SD完胜
2. 友好程度。MidJourney新手友好，注册即用，相对的SD需要有一定技术背景，甚至可以说设计师或者艺术创作者自己不具备部署能力。SD小胜
3. 功能。SD除了支持MidJourney全部功能外还支持填充修复、自定义模型。SD小胜
4. 对细节的控制。类似于苹果(MidJourney)和安卓(SD)的区别，MidJourney是商业产品，你无法了解它的背后的原理和代码逻辑，所以可控性差、细节优化难(甚至越调越差)，而SD由于是开源的且有强大的社区和相关的模型、扩展等，可以实现本地私有化部署，还能够精准局部调优，控制风格，SD完胜的。
5. 提示方法。Midjourney是自然语言输入(直接文字表达需求)，而SD是各种带权重的提示词输入。SD的提示词本文是非常考验输入者能力的，Midjourney小胜。
6. 效果。总体上觉得MidJourney的图更精致一点点，但是作为非算法开发者，我感觉SD目前输在模型训练的素材和方法上。MidJourney小胜。
7. 擅长的画风。 MidJourney注重表达和对细节的渲染，而Stable-Diffusion偏写实，如果你想艺术创作，MidJourney更好，如果你已经有具体的需求，SD更好。

需要注意，上面提到的这些产品都是基于同样的底层原理的Diffusion模型，只是在产品化的路线上不同，但我目前更看好SD的未来发展(要不然也不会专门写个专题😋)。

### 延伸阅读

1. https://search.bilibili.com/all?vt=33108793&keyword=%E6%AF%8F%E4%B8%80%E5%8F%A5%E6%AD%8C%E8%AF%8D%E9%83%BD%E7%94%B1AI%E4%BD%9C%E7%94%BB
2. https://zh.wikipedia.org/wiki/DALL-E
3. https://colab.research.google.com/github/alembics/disco-diffusion/blob/main/Disco_Diffusion.ipynb
4. https://www.midjourney.com/home/
5. https://stariu.com/midjourney
6. https://github.com/Stability-AI/stablediffusion
7. https://clipdrop.co/stable-diffusion
8. https://stable-diffusion-art.com/how-stable-diffusion-work/
9. https://www.uisdc.com/midjourney-5
10. https://www.uisdc.com/midjourney-4
