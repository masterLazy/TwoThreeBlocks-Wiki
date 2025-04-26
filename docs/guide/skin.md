---
sidebar_position: 3
---

# 设置皮肤

:::info

要在 TTB 中加载你的皮肤，以及看到别人的皮肤，并不需要安装客户端 mod。

:::

虽然 TTB 是一个离线服务器，但是我们安装了服务端 mod，可以正常加载正版账户玩家的皮肤。

如果你是离线账户玩家，也可以加载你自己的皮肤，详见下面的步骤。

## 第一步：把你的皮肤图片上传到图床

这一步是为了让 [MineSkin](https://mineskin.org/) 的服务器可以获取到你的皮肤。

推荐使用 [ImgBB](https://imgbb.com/)，不用登录就能使用。时间充裕建议注册账户，注册之后可以修改已经上传的图片。

以使用 ImgBB 为例，在上传图片成功的页面里，**嵌入代码**选择**直接（源文件）链接**，然后在下面的文本框，复制该链接。

## 第二步：应用皮肤

登录 TTB，使用 `/skin` 命令，设置你的皮肤：

```text title="适用于 经典/Steve 模型"
/skin set web classic 皮肤图片的链接
```

```text title="适用于 纤细/Alex 模型"
/skin set web slim 皮肤图片的链接
```

以下是一个例子：

```
/skin set web slim "https://i.ibb.co/wrqdmG3/gura.png"
```

”默认“即和 Steve 一样的模型，”纤细“即和 Alex 一样的模型。

在收到 `You need to reconnect to apply the skin` 的时候，重连服务器，就可以看到你的皮肤啦。

## FAQs

### 我进了服务器却看不到皮肤？

1. 确保你的图片链接是有效的。例如，`https://i.ibb.co/wrqdmG3/gura.png` 是有效的，而 `https://ibb.co/rfhQr8T` 则不是。

:::tip

MineSkin 是国外服务器，其可能无法访问国内的一些网站。

:::

2. 刚登录服务器的时候（1 min 以内）可能看不到皮肤，等一会儿就好了。

### 我在 minecraft.net 上更改了皮肤，为什么服务器里没有更新？

请使用 `/skin set mojang 你的用户名` 手动刷新。

## 另请参阅

[服务器 Mod 列表/SkinRestorer](/docs/mod/skinrestorer)

[Commands · Suiranoil/SkinRestorer Wiki](https://github.com/Suiranoil/SkinRestorer/wiki/Commands)

[Failed Loading Skin on Minecraft 1.16.5](https://github.com/Suiranoil/SkinRestorer/issues/37)