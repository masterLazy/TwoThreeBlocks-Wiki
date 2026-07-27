---
description: "Use when: 调试颜色/背景/渐变不显示、CSS变量解析异常、元素渲染与预期不符、需要系统性排查样式问题"
---

# CSS 调色调试方法论

## 核心原则：追踪到每个像素的颜色来源

如果页面某处颜色不对，**不猜原因，直接追踪**。每次只做一件事：找到那个像素的背景/颜色到底来自哪个 CSS 声明。

## 方法：五步追色法

### 第一步 — 查实际渲染，不看源码

打开 dev server，F12 → Elements → Computed。**不要靠"我觉得应该是..."来推理渲染结果。**

检查顺序：
1. 该元素的 `background` / `color` computed 值
2. 如果 `transparent` 或不是你预期的颜色 → 往上查父级
3. 该元素的盒模型尺寸是否符合预期

### 第二步 — 查 CSS 变量是否存在

不要假设某个 CSS 变量是定义好的。在 Console 验证：

```javascript
getComputedStyle(document.documentElement)
  .getPropertyValue('--xxx')
// 返回 '' 或 'transparent' → 变量不存在或未定义
```

**例子：** `--ifm-background-color` 在 Docusaurus 里并不存在，
引用它只会得到 `transparent`（CSS 变量的默认回退值）。

### 第三步 — 查每一层背景

从最外层开始，逐层确认每个父级元素的背景：

```javascript
// 自外向里查
['html', 'body', '.main-wrapper', 'section', 'section > div'].forEach(sel => {
  const el = document.querySelector(sel);
  if (el) console.log(sel, getComputedStyle(el).backgroundColor);
});
```

**规律：** 一个元素最终显示的颜色，是它自己的背景 + 所有父级背景层叠的结果。
如果中间某层是 `transparent`，就继续往下透传。

### 第四步 — 查该层在哪个层级定义的

有些 CSS 变量定义在 `:root` 上，有些在 `[data-theme]` 属性选择器上，
有些只在特定类名下生效。用正确的选择器去查：

```javascript
// 遍历所有样式表，找到变量定义的位置
for (const ss of document.styleSheets) {
  for (const rule of ss.cssRules) {
    if (rule.style?.getPropertyValue('--xxx')) {
      console.log('定义在:', rule.selectorText);
    }
  }
}
```

### 第五步 — 查深浅色模式分别渲染

```javascript
// 切换后重新做第一步到第四步
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
```

一个模式正常、另一个模式异常 → 问题出在 `[data-theme]` 的条件变量上。

## 典型追色案例（供参考）

### "渐变底部有一条硬边"的排查
1. 看 `heroOverlay` 的 computed `background` → 发现颜色是 `rgba(0,0,0,0)`
2. 查 `var(--ifm-background-color)` → 发现变量不存在（返回空值）
3. 查 `:root` 上的所有 `--ifm-*` 变量 → 确认这个变量从未被定义
4. 修：改用自定义变量 `--hero-page-bg`，自己控制浅色/深色值

### "Navbar 毛玻璃看到白色"的排查
1. 查 navbar 的 computed `background` → `rgba(10,14,39,0.35)` 半透明
2. backdrop-filter 模糊的是 navbar **背后**的元素
3. 查 navbar 背后是什么 → `<html>` 背景 `transparent`，浏览器画布白色
4. 修：不要依赖 backdrop-filter 取 html 背景，直接给 navbar 实色

## 一句话总结

**先看 computed 值，再查变量来源，然后逐层往上追。不要在没有数据的情况下做任何修改。**
