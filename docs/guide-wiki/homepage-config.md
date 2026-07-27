---
sidebar_position: 2
---

# 首页赞助榜与周年庆配置

本文介绍如何修改首页的**赞助榜**和**周年庆典页面**的内容。

## 赞助榜

赞助榜数据位于 `src/pages/index.tsx` 中，搜索 `const sponsors` 即可找到：

```typescript
const sponsors = [
  { rank: 1, name: '🐢 man' },
  { rank: 2, name: 'White_Amperi' },
  { rank: 3, name: 'lemoncola_87' },
  { rank: 4, name: 'unbreaking_III' },
  // 更多赞助者...
];
```

### 如何修改

- **添加赞助者**：在数组末尾追加一个对象，`rank` 为排名（数字），`name` 为玩家名称
- **调整排名**：修改 `rank` 值即可，同名次可并列（如两个 `rank: 6`）
- **删除赞助者**：直接移除对应的对象

排名会显示为圆形徽章（🥇 金 / 🥈 银 / 🥉 铜 / 其余灰色），前 3 名自动获得奖牌配色。

### 更新提示

列表下方的"最后更新"文字也位于 `src/pages/index.tsx` 中，搜索 `updateNote` 可找到：

```tsx
<p className={styles.updateNote}>
  <i>最后于 <strong>2025年12月12日</strong> 更新</i>
</p>
```

修改其中的日期即可。

## 周年庆典

周年庆典是一个独立的沉浸式页面，访问路径为 `/anniversary`，导航栏中也有入口。

### 数据文件

所有数据集中在 `src/data/anniversary.ts`，结构如下：

```typescript
export const anniversaryYears = [
  {
    year: 2025,
    label: '一周年',                  // 显示的文字
    photos: [
      { src: require('@site/src/assets/anniversary/2025-1.webp').default },
      { src: require('@site/src/assets/anniversary/2025-2.webp').default },
    ],
    attendees: [                      // 按字典序排列
      'Creeperiiii',
      'd4vt',
      'msterLazy',
      // ...
    ],
  },
];
```

### 添加新年份

1. 将照片放入 `src/assets/anniversary/`，建议使用 WebP 格式（无损压缩）

2. 在 `anniversaryYears` 数组末尾追加一个对象：

```typescript
{
  year: 2026,
  label: '二周年',
  photos: [
    { src: require('@site/src/assets/anniversary/2026-1.webp').default },
    { src: require('@site/src/assets/anniversary/2026-2.webp').default },
  ],
  attendees: [
    'Alice',
    'Bob',
    'Charlie',
    // 按字典序排列
  ],
},
```

标题会自动渲染为 `🎂 二周年 ｜ 2026`，无需手动拼接。

### 图片格式建议

周年庆照片建议使用 WebP 格式以减小体积。目录下已附带批量转换脚本：

- `src/assets/anniversary/convert-to-webp-noloss.bat` — 无损转换（保留画质）
- `docs/guide-wiki/assets/convert-to-webp-withloss.bat` — 有损转换（文件更小）

将原图放到脚本所在目录后运行即可。
