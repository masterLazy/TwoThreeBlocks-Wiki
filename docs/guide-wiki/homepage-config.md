---
sidebar_position: 2
---

# 首页赞助榜与周年庆配置

本文介绍如何修改首页的**赞助榜**和**周年庆典页面**的内容。

## 赞助榜

赞助榜数据位于 `src/data/sponsors.ts` 中：

```typescript
export const sponsors = [
  { rank: 1, name: '🐢 man' },
  { rank: 2, name: 'White_Amperi' },
  { rank: 3, name: 'lemoncola_87' },
  { rank: 4, name: 'unbreaking_III' },
  // 更多赞助者...
];
```

### 如何修改

- **添加赞助者**：在 `sponsors` 数组末尾追加一个对象，`rank` 为排名（数字），`name` 为玩家名称
- **调整排名**：修改 `rank` 值即可，同名次可并列（如两个 `rank: 6`）
- **删除赞助者**：直接移除对应的对象

排名会显示为圆形徽章（🥇 金 / 🥈 银 / 🥉 铜 / 其余灰色），前 3 名自动获得奖牌配色。

### 更新提示

列表下方的"最后更新"文字也位于 `src/data/sponsors.ts` 中：

```typescript
export const sponsorUpdateDate = '2025年12月12日';
```

修改其中的日期即可。

## 周年庆典

周年庆典是一个独立的沉浸式页面，访问路径为 `/anniversary`，导航栏中也有入口。

### 数据文件

所有数据集中在 `src/data/anniversary.ts`，结构如下：

```typescript
export const anniversaryYears = [
  {
    year: 2025,                       // 只需填年份，标签自动计算
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

> 服务器成立于 2024 年，程序会自动计算 `year - 2024` 得到第 N 周年，并用内置的 `intToChinese` 函数转换为中文数字（如 `2025 → 一周年`）。因此 `label` 字段已不再需要，新增年份时只需提供 `year` 即可。

### 添加新年份

1. 将照片放入 `src/assets/anniversary/`，建议使用 **Quality 90 的 WebP** 格式（在画质与体积之间取得最佳平衡）

2. 在 `anniversaryYears` 数组末尾追加一个对象：

```typescript
{
  year: 2026,
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

标题会自动渲染为 `🎂 二周年 ｜ 2026`，无需手动填写标签。

### 图片格式建议

周年庆照片建议使用 **Quality 90 的 WebP** 格式——相比无损 WebP 体积锐减，肉眼几乎无画质损失。
