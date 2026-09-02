---
title: "内容系统"
summary: "围绕 Markdown 与 Zod schema 构建的可维护内容工作流。"
date: 2026-08-08
updated: 2026-08-22
status: published
featured: false
tags: [Content, Tooling]
role: "系统设计"
tech: [Markdown, Zod, Astro]
projectStatus: shipped
cover: ./cover.webp
coverAlt: "纸张与线条组成的极简内容系统抽象图"
---

内容系统的目标不是把写作变成一套复杂的后台，而是让想法有固定入口，让写完到公开只需要改变状态。它是支撑这个个人网站的底层约定，也可以独立迁移到其他小型内容站。

## 三个内容集合

系统把内容分成三个 Astro Content Collection，每个都用一个 `glob` loader 加载对应目录下的 Markdown，并用 Zod schema 约束字段：

- `writing`：技术、随笔、观点和短笔记，带 `type`、`tags`、`featured` 等字段。
- `projects`：项目叙事，额外声明 `role`、`tech`、`projectStatus`，以及可选的 `liveUrl` 和 `repoUrl`。
- `pages`：`about`、`now` 等固定页面，字段最少。

封面图字段使用 schema 里的 `image()` 帮助函数，构建阶段会校验文件是否存在，并交给 Astro 生成优化后的资源。字段拼错或缺失必填项时，构建会直接失败，而不是把坏数据带到线上。

## 用状态字段控制发布

`writing` 和 `projects` 都有一个 `status` 枚举，取值为 `draft` 或 `published`，默认 `published`。列表页和详情页统一通过 `getCollection(..., ({ data }) => data.status === 'published')` 过滤，草稿因此既不会进入公开查询，也不会被生成为可访问的路由。

把一篇草稿正式发布，往往只需要把 `status` 从 `draft` 改成 `published` 并提交一次，不需要移动文件或修改任何页面代码。

## 工作流

先在 `inbox/` 中记录想法。这个目录**没有**注册为内容集合，因此不会进入任何查询，也不会生成公开页面，是一个安全的草稿区。整理完成后，把 Markdown 和它的附件一起移动到 `writing/` 或 `projects/`，提交 Git 后由构建校验规则并生成页面。

没有图片的内容可以是单个 Markdown 文件；第一次需要图片时，把它升级为目录，并把入口固定为 `index.md`，图片就放在同一目录里用相对路径引用。

## 为什么不做后台

对当前的内容规模来说，文件就是最容易检查的数据库。它可以在本地编辑，可以通过 Git 查看差异，也不会因为服务不可用而阻止写作。后台的便利要等到多人协作、权限控制或大量内容出现后才真正有价值。

## 复用价值

这套结构也适合其他小型内容站：把内容约束写进 schema，把展示交给页面，把版本交给 Git。系统越简单，越容易让注意力回到内容本身。
