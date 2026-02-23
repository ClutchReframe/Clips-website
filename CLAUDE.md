# ClutchReframe Clips — 项目开发指南

## 项目概述

**产品名称：** ClutchReframe Clips
**类型：** 纯静态网站（无构建系统、无框架、无 npm）
**部署目标：** GitHub Pages + 自定义域名 `clips.ClutchReframe.com`
**仓库：** `ClutchReframe/clips-website`

---

## 文件结构

```
/
├── index.html       # 主页（Hero / Features / How It Works / Footer）
├── privacy.html     # 隐私政策
├── terms.html       # 服务条款
├── riot.txt         # Riot 审核验证文件（提交后替换为真实 UUID）
├── og-image.png     # Open Graph 分享图（1200×630）
├── .nojekyll        # 禁用 GitHub Pages 的 Jekyll 处理
├── .gitignore       # 排除系统文件
└── CLAUDE.md        # 本文件
```

---

## 设计系统

| 属性 | 值 |
|------|-----|
| 背景色 | `#05050d` |
| 主强调色（青色） | `#00d9ff` |
| 副强调色（紫色） | `#7c3aed` |
| 正文字体 | Inter（Google Fonts） |
| 标题字体 | Outfit（Google Fonts） |
| 卡片风格 | 玻璃态（backdrop-filter + 渐变上边框） |
| 文字效果 | CSS gradient-text（青到紫） |

---

## 开发原则

1. **纯静态**：不引入任何构建工具、打包器或 JS 框架
2. **单文件**：每个页面的 CSS 内联在 `<style>` 标签中
3. **响应式**：移动端断点 768px，卡片单列堆叠
4. **无外部 JS**：所有动效均用 CSS `@keyframes` 实现

---

## 品牌文案

- **产品名：** ClutchReframe Clips
- **一句话描述：** Your clutch moments, ready to post.
- **联系邮箱：** jintian127@gmail.com
- **平台：** Overwolf
- **游戏：** League of Legends

---

## 本地预览

```bash
python -m http.server 8080
# 访问 http://localhost:8080
```

---

## GitHub Pages 部署步骤

1. 在 GitHub 创建仓库 `ClutchReframe/clips-website`
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: launch ClutchReframe Clips website"
   git remote add origin https://github.com/ClutchReframe/clips-website.git
   git push -u origin main
   ```
3. Settings → Pages → Branch: `main` / `/(root)`
4. Custom domain → `clips.ClutchReframe.com`，勾选 **Enforce HTTPS**
5. Cloudflare DNS：`clips CNAME ClutchReframe.github.io`（灰云 DNS only）

---

## Riot 审核注意事项

- `riot.txt` 提交审核后替换为 Riot 提供的真实验证 UUID
- 隐私政策 URL：`https://clips.clutchreframe.com/privacy.html`
- 服务条款 URL：`https://clips.clutchreframe.com/terms.html`
- 所有页面均包含 Riot Games 免责声明
