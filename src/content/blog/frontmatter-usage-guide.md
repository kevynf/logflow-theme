---
title: Frontmatter 使用指南：写好每篇文章的元信息
description: 介绍 LogFlow Theme 中 Frontmatter 的必填字段、可选字段、常见写法与排错方式。
pubDate: 2026-03-14
collection: Template Guide
collectionDescription: 面向二次开发者的配置与组件说明
tags:
  - Astro
  - Frontmatter
  - Content
---

Frontmatter 是每篇 Markdown / MDX 文章顶部的 YAML 配置块，用来描述文章元信息。  
在 LogFlow Theme 中，文章集合由 `src/content.config.ts` 校验，所以字段名和类型需要严格匹配。

## 最小可用示例

```yaml
---
title: 我的第一篇文章
description: 这是一篇用于演示 Frontmatter 的示例文章。
pubDate: 2026-03-14
---
```

这三个字段是必填项：

- `title`：文章标题（字符串）
- `description`：文章摘要（字符串）
- `pubDate`：发布日期（可被解析为日期）

## 完整示例

```yaml
---
title: Frontmatter 使用实践
description: 包含必填与可选字段的完整示例。
pubDate: 2026-03-14
updatedDate: 2026-03-15
collection: Template Guide
collectionDescription: 面向二次开发者的配置与组件说明
tags:
  - Astro
  - Frontmatter
---
```

## 字段逐项说明

### title

- 类型：`string`
- 作用：显示在文章页标题、列表页标题、RSS 输出中。
- 建议：控制长度，确保在列表页可读性。

### description

- 类型：`string`
- 作用：文章摘要，通常用于列表说明和 SEO 描述。
- 建议：一句话说清文章主题。

### pubDate

- 类型：`date`（由字符串自动转换）
- 作用：文章排序、时间展示与归档统计。
- 建议：统一使用 `YYYY-MM-DD` 格式。

### updatedDate

- 类型：`date`（可选）
- 作用：在文章页显示“最后更新时间”。
- 建议：仅在内容发生实质更新时填写。

### collection

- 类型：`string`（可选）
- 作用：将文章归入某个合集，展示在 Collections 页面。
- 建议：同一主题文章使用相同名称。

### collectionDescription

- 类型：`string`（可选）
- 作用：合集说明文字，显示在合集列表中。
- 建议：同一合集保持一致文案。

### tags

- 类型：`string[]`（可选）
- 作用：标签聚合与标签页筛选。
- 建议：每篇 2~5 个标签，避免过碎。

## 常见错误与排查

- 日期解析错误
  - 检查 `pubDate` / `updatedDate` 是否为有效日期字符串。
- 字段名拼写错误
  - 例如写成 `publishDate` 会导致校验失败。
- 类型错误
  - `tags` 必须是数组，不是单个字符串。

## MDX 和 Markdown 一致吗？

一致。`src/content/blog/` 下的 `.md` 与 `.mdx` 都使用同一套 Frontmatter 校验规则。

## 推荐写作模板

复制下面模板可快速开写：

```yaml
---
title: 
description: 
pubDate: 
updatedDate: 
collection: 
collectionDescription: 
tags:
  - 
---
```
