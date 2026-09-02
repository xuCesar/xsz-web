---
title: "个人网站"
summary: "一个用于项目展示与长期写作的内容空间，用 Astro 把 Markdown 编译成静态站点。"
date: 2026-08-14
updated: 2026-08-22
status: published
featured: false
tags: [Astro, 内容系统]
role: "独立设计与开发"
tech: [Astro, TypeScript, Markdown, Sharp]
projectStatus: active
cover: ./cover.webp
coverAlt: "暖色光线落在安静建筑空间中的抽象摄影"
---

这是一个把项目、文章和个人页面放在一起的长期网站，也就是当前你正在浏览的这个站点。它不是一份一次性完成的履历，而是一个会随着工作和思考一起变化的公开索引。

它的内容源是 Git 仓库里的 Markdown 文件，图片与文章放在同一个目录中，由 Astro 在构建阶段处理和优化。文章、项目和固定页面分别使用不同的 schema，让内容可以保持自由，又不会因为一个字段拼写错误而破坏列表页。

![个人网站的内容空间](./cover.webp)

## 技术选型

站点基于 Astro 构建，默认输出纯静态 HTML，没有运行时服务和数据库。内容通过 Astro Content Collections 组织：一个 `glob` loader 把 `src/content` 下的 Markdown 收集起来，配合 Zod schema 校验字段。正文里的封面和插图交给 `astro:assets` 的 `Image` 组件，构建阶段由 Sharp 生成尺寸合适的 WebP，无需手工压缩图片。

整个项目使用 TypeScript strict 配置和 pnpm 管理依赖。因为产物是静态文件，部署只需要把构建结果推到任意静态托管即可，维护成本被压到很低。

## 页面与路由

导航保持五个稳定入口：首页、项目、文章、现在、关于。它们对应的路由都由内容集合驱动：

- `/` 首页汇总精选项目和最近文章。
- `/projects` 与 `/projects/[slug]` 展示项目列表和项目叙事。
- `/writing` 与 `/writing/[slug]` 承载技术、随笔和观点。
- `/about` 和 `/now` 是两个从 `pages` 集合渲染的固定页面。

项目和文章的详情页会从 Markdown 的二三级标题生成目录，并用 `IntersectionObserver` 做滚动高亮，让较长的叙事更容易定位。

## 设计取舍

第一版保持静态，不引入数据库和后台。内容规则由 schema 校验，发布的文章可以稳定地被链接和分享。所有内容都通过 Git 提交记录变化，想法先进入 `inbox`，整理完成后再进入公开集合。

## 第一版的边界

现在优先解决三个问题：内容在哪里写、什么条件下可以发布、访客如何从首页找到它。评论、账号和复杂的内容管理暂时不在范围内，等真实的维护成本出现后再决定是否增加。

## 目前的结果

网站已经有项目、文章、关于和现在几条稳定入口。接下来最重要的工作不是继续堆功能，而是持续补充真实内容，并在回看中修正结构。
