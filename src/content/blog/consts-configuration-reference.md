---
title: consts.ts 配置总览：全部参数与可选值说明
description: 面向模板使用者的 consts.ts 全量配置参考，覆盖默认值、用途与可选配置建议。
pubDate: 2026-03-14
collection: Template Guide
collectionDescription: 面向二次开发者的配置与组件说明
tags:
  - Astro
  - Config
  - Template
---

这篇文章集中说明 `src/consts.ts` 中所有可配置项，适合在模板初始化时逐项对照修改。

## SITE_TITLE

- 默认值：`LogFlow Theme`
- 用途：站点主标题，显示在导航与页面标题相关区域。
- 建议：改成你的品牌名或站点名，避免使用过长文本。

## SITE_DESCRIPTION

- 默认值：`A clean Astro theme for blogging and content publishing.`
- 用途：全局描述，影响首页文案与 SEO 描述字段。
- 建议：控制在 120~160 字符以内。

## SITE_URL

- 默认值：`https://logflow-theme.vercel.app`
- 用途：站点正式 URL，用于 sitemap、RSS 等绝对链接生成。
- 建议：部署后务必修改为你的真实域名。

## COPYRIGHT_NAME

- 默认值：`LogFlow Theme`
- 用途：页脚版权名称。
- 建议：可填写个人名、组织名或品牌名。

## NAV_LINKS

- 用途：控制 Header 导航栏与移动端菜单的链接。
- 数据结构：

```ts
{
  href: string;
  label: string;
}
```

- 建议：新增页面（如 `src/pages/notes.astro`）后，需在此追加对应配置才会显示在导航中。

## SOCIAL_LINKS

- 用途：控制顶部与底部的社交图标链接。
- 数据结构：

```ts
{
	label: string;
	href: string;
	icon: string;
}
```

- `icon` 可选值：
  - `social/github`
  - `social/twitter`
  - `social/bilibili`

## FRIEND_LINKS

- 用途：Friends 页面友链卡片数据源。
- 位置：已提取到 `src/config/friend-links.ts`，由 `consts.ts` 导出。
- 数据结构：

```ts
{
  name: string;
  link?: string; // 推荐使用 link
  url?: string;  // 兼容旧版 url
  avatar?: string;
  desc?: string; // 推荐使用 desc
  description?: string; // 兼容旧版 description
}
```

- 建议：
  - `avatar` 使用站点 favicon 或清晰头像地址。
  - `desc` 用一句话说明站点定位。

## GH_CONTRIBUTE

- 用途：首页 GitHub 贡献图区块配置。
- 字段说明：
  - `title`：区块标题
  - `description`：区块描述
  - `username`：GitHub 用户名（如 `example`）
  - `profileUrl`：GitHub 主页链接
  - `errorMessage`：加载失败时提示文案

## HOME_PROFILE

- 用途：控制首页头像区、昵称区、标语区和部分布局参数。
- 字段说明：
  - `avatarSrc`：头像地址（外链或 `/favicon.svg` 等）
  - `avatarAlt`：头像替代文本
  - `nickname`：昵称
  - `nicknameFontSize`：昵称字号（如 `2rem`）
  - `tagline`：标语文案
  - `taglineFontSize`：标语字号（如 `1em`）
  - `taglineItalic`：是否斜体（`true/false`）
  - `homePostsColumnRatio`：首页左右列比例（如 `1fr`）
  - `homeTagsMinWidth`：标签区域最小宽度（如 `300px`）
  - `aboutExcerptLength`：About 摘要截断长度
  - `recentPostsLimit`：首页最新文章数量

## BLOG_PAGE

- 用途：Blog 页面文案配置。
- 字段说明：
  - `title`：文章列表标题
  - `collectionsTitle`：合集区标题
  - `tagsTitle`：标签区标题

## COMMENTS

- 用途：评论系统总配置，当前支持 Giscus。
- 字段说明：
  - `enabled`：评论开关，`false` 时不加载评论
  - `repo`：仓库名，格式 `owner/repo`
  - `repoId`：仓库 ID
  - `category`：Discussion 分类名
  - `categoryId`：分类 ID
  - `mapping`：文章与讨论串映射方式
  - `strict`：是否启用严格匹配（`0` 或 `1`）
  - `reactionsEnabled`：是否开启回应（`0` 或 `1`）
  - `emitMetadata`：是否发送元数据（`0` 或 `1`）
  - `inputPosition`：输入框位置（`top` 或 `bottom`）
  - `lang`：评论语言（如 `zh-CN`）
  - `loading`：加载方式（如 `lazy`）

- `mapping` 常见可选值：
  - `pathname` (推荐)
  - `title`
  - `url`

## 推荐修改顺序

1. 先改 `SITE_TITLE`、`SITE_DESCRIPTION`、`SITE_URL`、`COPYRIGHT_NAME`
2. 再改 `SOCIAL_LINKS`、`NAV_LINKS`、`HOME_PROFILE`
3. 需要评论时再改 `COMMENTS`
4. 最后补充 `FRIEND_LINKS` 与 `GH_CONTRIBUTE`
