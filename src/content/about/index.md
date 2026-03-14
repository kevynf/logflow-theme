---
title: About
description: LogFlow Theme 模板亮点与上手路径
---

LogFlow Theme 是一个面向内容发布的 Astro 博客模板，适合用作个人博客、项目文档站或内容品牌站点的起点。

## 模板亮点

- 开箱即用的内容结构：文章、标签、合集、年份归档完整闭环
- 配置集中在 `src/consts.ts`：站点信息、首页卡片、评论与社交一处维护
- 文档示例齐全：组件说明、Giscus、Frontmatter、MDX 样式均有可直接参考文章
- 评论系统可渐进启用：默认关闭，填入参数后即可启用 Giscus
- 主题体验完整：亮暗模式切换 + GitHub 贡献图展示

## 推荐上手路径

1. 在 `src/consts.ts` 中完成站点标题、描述、社交链接与首页信息配置
2. 在 `src/content/about/index.md` 替换为你的品牌介绍与定位
3. 在 `src/content/blog/` 中新增或替换 Markdown / MDX 文章
4. 需要评论时，按示例文章配置 `COMMENTS` 并启用 Giscus

## 示例内容

模板中已包含可直接参考的示例文章：

- 自定义组件手册：组件职责、用法与配置项说明
- consts.ts 配置总览：全量参数说明与可选值
- Frontmatter 使用指南：字段规则、完整示例与排错建议
- Giscus 配置速览：从仓库到评论可用的最短路径
- MDX 渲染样式示例：标题、列表、代码块、表格与 JSX 演示
