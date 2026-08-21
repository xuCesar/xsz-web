---
title: "关于"
description: "xsz 的工程经历、独立产品与长期关注方向。"
status: published
---

我是一名以前端工程为起点、持续向全栈与产品交付延伸的 TypeScript 开发者。

过去几年，我既参与过中大型企业级前端系统的长期建设，也在独立完成微信小程序、Web 应用和 macOS 桌面工具。我关心的不只是页面能否运行，还包括权限边界、数据一致性、迁移与恢复、发布验证，以及一个产品是否真正形成了可使用的闭环。

## 工程经历

### Smart Safety Platform · 前端开发

代码历史覆盖 2021 至 2025 年。这是一个面向视频监控与 AI 安防分析的中大型单体应用，前端约有 15 万行 TypeScript/TSX，包含实时视频、地图、事件告警、历史抓拍、人员与车辆档案、设备和 AI 规则配置、Dashboard、离线视频案件分析等模块。

我长期参与系统设置、实时监控、人员管理、抓拍检索、事件告警和 Dashboard 等核心模块的开发与维护，也处理版本发布、分支合并和线上问题修复。项目使用 React、TypeScript、Umi、Dva、Ant Design、Apollo GraphQL、WebSocket 与 Keycloak，并通过 Docker、Nginx、Helm 和 Argo CD 完成部署。

这段经历让我熟悉了复杂前端系统的真实约束：旧技术栈需要渐进维护，权限不能只依赖界面隐藏，REST、GraphQL、实时订阅与视频协议之间的改动需要谨慎控制影响范围。

## 独立产品

工作之外，我会从真实问题出发，独立完成产品定义、交互设计、前后端实现和发布验证。

- **[Easy Care](/projects/easy-care/)**：面向家庭照护的宝宝成长记录应用，覆盖微信小程序、NestJS API 与 React 管理后台，处理家庭协作、多宝宝档案、日常记录、成长计划和服务端权限边界。
- **[Easy Training](/projects/easy-training/)**：面向多校区教培机构的运营系统，连接招生、学员、排课、考勤课消与财务流程，并围绕机构隔离、数据范围、邀请和审计设计服务端边界。
- **[Easy Package](/projects/easy-package/)**：基于 Tauri、React、Rust 和 SQLite 的 macOS 开发环境工具，支持多包管理器扫描、PATH 检查、依赖分析、安全操作计划和本地历史快照，已发布可下载的 macOS 版本。
- **[Easy MES](/projects/easy-mes/)**：面向小型轴承工厂的制造执行系统，贯通原料、下料、委外、报工、质检、库存、交付和批次追溯。
- **[Easy Target](/projects/easy-target/)**：本地优先的个人目标推进工具，把目标、行动、想法和推进记录放进同一套可备份、可恢复的数据结构。
- **[等你日记](/projects/easy-bloom/)**：面向孕期个人记录的微信小程序，围绕私密时间线、微信身份、数据隔离、幂等写入和编辑冲突处理展开。

## 技术方向

我目前主要使用：

- React、TypeScript、Next.js、Taro 与 Astro
- Node.js、NestJS、Hono、oRPC
- PostgreSQL、SQLite、Prisma 与 Drizzle
- pnpm workspace、Turborepo、Docker 与 CI/CD
- Electron、Tauri 与 Rust

我倾向于先理解业务事实和运行边界，再选择技术。能用清晰的数据模型与简单流程解决的问题，不会先用复杂架构包装；涉及权限、隐私、迁移和恢复时，则会把服务端校验与失败路径放在功能展示之前。

## 这个网站放什么

- **项目**：已经完成或仍在进行的项目，包含背景、过程和复盘。
- **文章**：技术实践、工作方法、生活随笔和还没有结论的观点。
- **现在**：最近正在关注什么，以及下一步准备继续推进的事情。

这里不是一份静态履历，而是一张持续更新的工作台：项目记录为什么做、如何取舍以及做到什么程度；文章保留技术实践与仍在形成的判断；“现在”则说明最近正在推进的事情。

如果你想快速了解我的工作方式，可以先从[项目](/projects/)开始。更多公开代码与发行版本可以在 [GitHub](https://github.com/xuCesar) 查看。
