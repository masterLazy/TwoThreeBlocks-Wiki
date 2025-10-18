# ✨编辑 / 创建 Wiki 页面

本页面教你怎么快速上手编辑 / 创建 Wiki 页面！其实门槛很低，你只需要：

- 会打字。
- 会在游戏里按下 `F2` 截屏。

## 初级编辑者

请按照以下步骤开展你的工作：

- 首先思考，你想要创建什么样的内容？针对某一东西的指南，还是地点介绍、机器说明，抑或是别的什么？
- 为你想说明的东西撰写一段文字。如果适用，还可以提供相关的图片（适量！），这可以增加叙述的生动性。
- 如果你的排版不是很复杂，可以直接将文字和图片发送给 *msterLazy*。你可以在 “二三方块人交流会” 的 QQ 群中找到他。或者你可以通过这个 email：

```text title="msterLazy 的邮箱"
msterlazy@qq.com
```

- 如果你想自己设计排版，建议你 [学习 Markdown 语法](https://markdown.com.cn/basic-syntax/)。只需要基本的语法就可以了！（事实上 Markdown 是一种很容易的标记语言）然后，你可以将 `.md` 文件和图片（如果有）发给 *msterLazy*。

:::tip

你可以使用在线的 Markdown 编辑器，或者试试这款免费软件：[MarkText](https://cn.bing.com/search?q=marktext)。

:::

---

## 进阶编辑者

初级编辑者也可以看一下本节的内容。

### 如何引用图片 / 其他文档

:::tip

当然你也可以不严格按照本小节说的做！

只要你写的 Markdown 文档可以让管理员看懂你的排版，他们可以为你纠正这些细节。

:::

图片都放在服务器的 `/img` 目录下，而用于地点的图片放在 `/img/place` 目录下。 以下是一个例子：

```markdown
![](/img/logo.webp)
或者
<center><img src="/img/title-text-light.svg" height="50rem"/></center>
```

效果：

<center><img src="/img/title-text-light.svg" height="50rem"/></center>



文档都放在服务器的 `/docs` 目录下，具体来说（和浏览器显示的的文档网址是类似的！不必记忆）：

- “指南” 文档放在 `/docs/guide` 目录下。

- “地点列表” 的文档放在 `/docs/place` 目录下。
  - “机器” 放在：`/docs/place/machine`。
  - “景点” 放在：`/docs/place/landscape`。
  - “过时的”放在：`/docs/place/legacy`。

以下是一个例子：

```markdown
[服务器概述](/docs/intro)
```

效果：[服务器概述](/docs/intro)

### 地点页面的格式

如果你要提交 Markdown 格式的文档，以下是为你准备的模板：

````markdown
# [地点名]
```
主要建造者：	建造者甲, 建造者乙
下界：		+xxx -yyy +zzz
主世界：		+xxx -yyy +zzz
末地：		+xxx -yyy +zzz
```

![](/img/place/地点名.webp)
````

- 如果下界和主世界坐标同时出现，请先写下界坐标。如果这个地方很大，坐标精确到十位也可以（永远不保留小数！）
- 地点的图片名、地点的 Markdown 文档名，都使用地点名。

### 可用于本 Wiki 的特殊 Markdown 语法

本 Wiki 用 Docusaurus 构建网页，其支持一些特殊语法：

首先是 [告示框](https://www.docusaurus.cn/docs/markdown-features/admonitions)：

```markdown
:::important
一些信息...
:::
```

效果：

:::important
一些信息...
:::

你还可以把`important` 替换成 `info`（信息）  `tip`（提示）、`warning`（注意）、`note`（备注）、`danger` （危险）。

带标签的 [代码块](https://www.docusaurus.cn/docs/markdown-features/code-blocks)*（不只用来放代码）*：

````markdown
```text title="这是标题！"
乱写一点。。。
```
````

效果：

```text title="这是标题！"
乱写一点。。。
```

---

## 资深编辑者

如果你有一定的编程基础，而且掌握 Markdown 和 Git，那就太好啦！让我们介绍一下本 Wiki 是如何运作的：

- 所有 Wiki 文档都以 Markdown（`.md`）格式存储，并使用 [Docusaurus](https://docusaurus.io/zh-CN/docs) 构建成网页。
- 本 Wiki 实际上是托管在 Github 上的仓库（由 Github Pages 提供网站服务器）。Github Pages 是一项免费服务，允许托管静态的网页。所谓静态就是指，网站的所有数据在发布后不会被修改。因此本 Wiki 每次修改都必须重新构建一次。
- 仓库中的 `master` 分支存放文档源文件，在本地执行构建之后推送到 `github-pages` 分支。

也就是说，你可以通过在 Github 仓库上贡献的方法编辑 / 创建 Wiki 页面。

- 转到我们的仓库页面：[masterLazy/TwoThreeBlocks-Wiki](https://github.com/masterLazy/TwoThreeBlocks-Wiki)。当然，这个页面右上角的那个链接也行。
- 点击 “Fork”，在你的 Github 账号下创建一份 Wiki 的 “复刻”。
- 随后，你可以在本地编辑 Wiki，然后推送（Push）到你的仓库。
- 当一切准备就绪时，请创建一个 Pull Resuest，然后你就可以把文档合并到 Wiki 中了！

要编辑 Wiki 仓库，请了解以下基本的结构：

- `/docs` 是所有文档所在的目录。
- `/static/img` 存放了所有的图片，而关于地点的图片都放在 `/static/img/place` 下。

请自行了解更多关于 Docusaurus 的知识：[Docusaurus 介绍 | Docusaurus](https://docusaurus.io/zh-CN/docs)