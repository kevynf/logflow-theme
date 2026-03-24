---
title: 自定义组件手册：功能、用法与 consts.ts 配置
description: 逐个说明 LogFlow Theme 自定义组件的职责、调用方式、关联配置与可选参数。
pubDate: 2026-03-14
collection: Template Guide
collectionDescription: 面向二次开发者的配置与组件说明
tags:
  - Astro
  - Components
  - Template
---

这篇文章用于快速了解主题内置组件，帮助你在不改动核心结构的前提下完成定制。

## BaseHead.astro

**功能**

- 注入页面基础 SEO 信息、OG/Twitter 元信息、RSS 链接与主题初始化脚本。

**使用方法**

```astro
<BaseHead title="文章标题" description="页面描述" image={heroImage} />
```

**consts.ts 如何设置**

- 关联项：`SITE_TITLE`
- 用途：作为 RSS 标题和站点级信息来源。

**可选参数**

- `image?: ImageMetadata`：可选，提供后会输出 `og:image` 与 `twitter:image`。

## Header.astro

**功能**

- 渲染顶部导航、社交链接与主题切换按钮。支持移动端响应式菜单。

**使用方法**

```astro
<Header />
```

**consts.ts 如何设置**

- 关联项：`SITE_TITLE`、`NAV_LINKS`、`SOCIAL_LINKS`
- `NAV_LINKS` 控制导航项。
- `SOCIAL_LINKS` 每项结构：
  - `label`: 文本标签
  - `href`: 外链地址
  - `icon`: 图标键名（`social/github`、`social/twitter`、`social/bilibili`）

**可选参数**

- 无显式组件参数，依赖 `consts.ts` 驱动。

## HeaderLink.astro

**功能**

- 生成带“当前路径高亮”状态的导航链接。

**使用方法**

```astro
<HeaderLink href="/blog">Blog</HeaderLink>
```

**consts.ts 如何设置**

- 无直接关联项。

**可选参数**

- 继承原生 `<a>` 属性，可传 `class`、`target` 等。

## ThemeToggle.astro

**功能**

- 切换深色/浅色模式并同步到文档根节点 class。

**使用方法**

```astro
<ThemeToggle />
```

**consts.ts 如何设置**

- 无直接关联项。

**可选参数**

- 无组件参数。

## SocialIcon.astro

**功能**

- 根据 `icon` 键名渲染社交平台 SVG 图标。

**使用方法**

```astro
<SocialIcon icon="social/github" size={20} />
```

**consts.ts 如何设置**

- 常与 `SOCIAL_LINKS[].icon` 搭配使用。

**可选参数**

- `size?: number`：可选，默认为 `20`。

## Footer.astro

**功能**

- 渲染页脚版权信息、构建时间与社交链接。

**使用方法**

```astro
<Footer />
```

**consts.ts 如何设置**

- 关联项：`COPYRIGHT_NAME`、`SOCIAL_LINKS`

**可选参数**

- 无组件参数。

## FormattedDate.astro

**功能**

- 统一格式化日期展示，输出 `<time>` 元素。

**使用方法**

```astro
<FormattedDate date={post.data.pubDate} />
```

**consts.ts 如何设置**

- 无直接关联项。

**可选参数**

- 无，`date` 为必填参数。

## GitHubContribute.astro

**功能**

- 展示 GitHub 贡献区块标题与贡献日历组件。

**使用方法**

```astro
<GitHubContribute />
```

**consts.ts 如何设置**

- 关联项：`GH_CONTRIBUTE`
- 字段说明：
  - `title`
  - `description`
  - `username`
  - `profileUrl`
  - `errorMessage`

**可选参数**

- 无组件参数。

## GitHubCalendarWidget.tsx

**功能**

- 基于 `react-github-calendar` 渲染响应式贡献热力图，并自动跟随主题切换。

**使用方法**

```astro
<GitHubCalendarWidget client:load username="kevynf" errorMessage="加载失败" />
```

**consts.ts 如何设置**

- 该组件通常由 `GitHubContribute.astro` 读取 `GH_CONTRIBUTE` 后间接调用。

**可选参数**

- 无可选参数，`username` 与 `errorMessage` 为必填。

## CommentSection.astro

**功能**

- 按 `COMMENTS` 配置动态加载 Giscus 评论区，并在亮暗主题切换时同步评论主题。

**使用方法**

```astro
<CommentSection />
```

**consts.ts 如何设置**

- 关联项：`COMMENTS`
- 关键字段：
  - `enabled`
  - `repo`
  - `repoId`
  - `category`
  - `categoryId`
  - `mapping`
  - `strict`
  - `reactionsEnabled`
  - `emitMetadata`
  - `inputPosition`
  - `lang`
  - `loading`

**可选参数**

- 无组件参数，全部通过 `COMMENTS` 控制。

## BlogPost 布局中的评论开关

`BlogPost.astro` 不是组件目录下的文件，但常与评论功能一起配置。

```astro
<BlogPost {...post.data} enableComments={true}>
	<Content />
</BlogPost>
```

- `enableComments?: boolean` 为可选参数，默认 `false`。
- 如果你只想在部分页面开启评论，这个参数是最直接的开关。
