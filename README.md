# xsz-web

一个以内容为核心的个人品牌网站：作品集、技术文章、生活随笔和个人观点共用一套静态内容系统。

## 技术栈

- Astro 7 + TypeScript strict
- Markdown + Astro Content Collections
- Astro `Image` + Sharp 图片处理
- Git 作为内容版本记录

## 本地开发

```bash
pnpm install
pnpm dev
```

构建和类型检查：

```bash
pnpm astro check
pnpm build
```

## 内容目录

```text
src/content/
├── writing/    # 技术、随笔、观点、短笔记
├── projects/   # 项目叙事和项目图片
├── pages/      # about、now 等固定页面
└── inbox/      # 草稿区，不注册为公开内容集合
```

没有图片的内容可以使用单个 Markdown 文件；第一次需要图片时，将它升级为目录，并把入口固定为 `index.md`：

```text
src/content/projects/personal-site/
├── index.md
└── cover.webp
```

正文中使用标准 Markdown 相对路径：

```md
![项目截图](./cover.webp)
```

封面图在 frontmatter 中声明，构建阶段会校验文件是否存在并通过 Sharp 生成优化资源：

```yaml
cover: ./cover.webp
coverAlt: "项目首页截图"
```

`inbox/` 不会进入内容查询，也不会生成公开页面。整理完成后，将 Markdown 和附件一起移动到 `writing/` 或 `projects/`。

## 路由

```text
/                   首页
/projects           作品列表
/projects/[slug]    项目详情
/writing            文章列表
/writing/[slug]     文章详情
/about              关于
/now                最近正在做什么
```

项目和文章一旦发布，slug 应保持稳定；修改标题不会自动改变 URL。
