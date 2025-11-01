# 部署指南 / Deployment Guide

## 方法 1: 使用 Vercel（推荐）

Vercel 是最简单的部署方式，专为 React 和 Vite 项目优化。

### 选项 A: 使用 Vercel CLI

1. **登录 Vercel**
```bash
vercel login
```

2. **部署项目**
```bash
vercel
```
   - 按照提示选择项目设置
   - Vercel 会自动检测到这是一个 Vite 项目

3. **生产环境部署**
```bash
vercel --prod
```

### 选项 B: 使用 Vercel 网页界面（最简单）

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 导入你的 GitHub 仓库（需要先将代码推送到 GitHub）
4. Vercel 会自动检测设置：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. 点击 "Deploy"

**优势**:
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（Git push 后自动更新）
- ✅ 免费套餐足够个人项目使用

---

## 方法 2: 使用 Netlify

1. **使用 Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

2. **或使用网页界面**
   - 访问 [https://netlify.com](https://netlify.com)
   - 拖拽 `dist` 文件夹到网页
   - 或连接 GitHub 仓库自动部署

**Build 设置**:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## 方法 3: 使用 GitHub Pages

1. **安装 gh-pages**
```bash
npm install -D gh-pages
```

2. **修改 package.json**

添加 homepage 和部署脚本：
```json
{
  "homepage": "https://yourusername.github.io/portfolio-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **修改 vite.config.js**

添加 base 路径：
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/'  // 你的仓库名
})
```

4. **部署**
```bash
npm run deploy
```

---

## 方法 4: 推送到 GitHub 然后选择平台

### 步骤 1: 创建 GitHub 仓库

1. 访问 GitHub 创建新仓库
2. 在本地项目中：

```bash
git remote add origin https://github.com/yourusername/portfolio-react.git
git branch -M main
git push -u origin main
```

### 步骤 2: 选择部署平台

然后从上面的方法中选择一个（推荐 Vercel）。

---

## 快速开始（最简单的方法）

如果你只想快速查看效果：

```bash
# 1. 构建项目
npm run build

# 2. 使用 Vercel 部署
vercel

# 或使用 Netlify
netlify deploy
```

---

## 环境变量（如果需要）

如果你的项目需要环境变量，在部署平台的设置中添加：

**Vercel**: Project Settings → Environment Variables
**Netlify**: Site Settings → Build & Deploy → Environment

---

## 自定义域名

部署后，你可以在平台设置中添加自定义域名：

- **Vercel**: Settings → Domains
- **Netlify**: Domain Settings → Custom Domains

---

## 故障排除

### 构建失败

如果构建失败，检查：
```bash
# 本地测试构建
npm run build

# 检查 Node.js 版本
node --version  # 应该是 18+ 或 20+
```

### 部署后页面空白

- 检查浏览器控制台错误
- 确保 `base` 配置正确（如果使用子路径）
- 检查 404 错误（可能需要配置重定向规则）

对于 Vercel 和 Netlify，SPA 重定向会自动处理。

---

## 当前项目状态

✅ 项目已经构建成功
✅ Git 仓库已初始化
✅ 准备好部署到任何平台

**下一步**: 选择上面的任一部署方法即可！
