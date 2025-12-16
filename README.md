# Blinko AI评论插件

为Blinko添加AI评论功能，支持从右键菜单为单个闪念添加AI生成的评论。

## 功能特点

- 🚀 **一键AI评论**：右键点击任意闪念，选择"AI评论"即可生成智能评论
- 📝 **基于内容生成**：根据闪念内容生成相关、有价值的评论
- 🌐 **多语言支持**：支持中英文界面
- 🎨 **无缝集成**：完美融入Blinko的右键菜单
- ⚡ **快速响应**：生成评论后自动更新界面，无需手动刷新

## 安装方法

### 方法一：通过Blinko插件市场安装
1. 打开Blinko应用
2. 进入设置界面
3. 点击"插件管理"
4. 在插件市场中搜索"AI评论"
5. 点击"安装"按钮

### 方法二：手动安装
1. 下载最新版本的插件包
2. 解压插件包到Blinko的插件目录
3. 重启Blinko应用
4. 在插件管理中启用"AI评论"插件

## 使用说明

1. **选择闪念**：在Blinko中找到你想要添加AI评论的闪念
2. **右键菜单**：右键点击该闪念
3. **选择AI评论**：在弹出的右键菜单中选择"AI评论"选项
4. **等待生成**：看到"正在生成AI评论..."的提示
5. **查看结果**：评论生成完毕后，闪念中会出现AI生成的评论

## 配置选项

### 插件设置
1. 打开Blinko设置界面
2. 点击"插件管理"
3. 找到"AI评论"插件，点击"设置"
4. 在设置面板中查看使用说明和插件信息

### AI模型配置
插件使用Blinko内置的AI模型，无需额外配置。你可以在Blinko的AI设置中调整AI模型和参数，这些设置会自动应用到AI评论插件中。

## 常见问题

### Q: 右键菜单中没有显示"AI评论"选项？
A: 请检查插件是否已正确安装并启用。如果问题仍然存在，尝试重启Blinko应用。

### Q: 生成的评论不符合预期？
A: 你可以在Blinko的AI设置中调整AI模型和提示词，以获得更符合预期的评论结果。

### Q: 生成评论时出错？
A: 请检查你的网络连接和AI模型配置。如果问题仍然存在，查看Blinko的日志文件获取详细错误信息。

## 开发说明

### 开发环境
- Node.js 18+
- Bun (推荐) 或 npm
- Vite

### 项目结构
```
.
├── plugin.json              # 插件配置文件
├── package.json             # 项目依赖配置
├── src/
│   ├── index.tsx            # 插件入口文件
│   ├── app.tsx              # 插件主界面组件
│   ├── setting.tsx          # 插件设置面板组件
│   └── locales/             # 多语言翻译文件
│       ├── en.json          # 英文翻译
│       └── zh.json          # 中文翻译
└── release/                 # 构建输出目录
    └── index.js             # 构建后的插件文件
```

### 开发命令

#### 安装依赖
```bash
bun install
# 或
npm install
```

#### 构建插件
```bash
bun run release:publish
# 或
npm run release:publish
```

#### 仅构建不发布
```bash
bunx vite build --mode production
# 或
npx vite build --mode production
```

## 贡献

欢迎提交Issue和Pull Request来帮助改进这个插件！

## 许可证

MIT License

## 更新日志

### v0.0.4 (2025-12-16)
- 修复了评论生成完毕后loading状态不关闭的问题
- 优化了错误处理
- 改进了用户体验

### v0.0.3 (2025-12-16)
- 修复了右键菜单不显示的问题
- 改进了i18n处理
- 优化了代码结构

### v0.0.2 (2025-12-16)
- 完善了多语言支持
- 改进了设置面板
- 优化了界面文案

### v0.0.1 (2025-12-16)
- 初始版本
- 实现了右键菜单AI评论功能
- 支持中英文界面

## 联系方式

如有问题或建议，欢迎通过以下方式联系我们：

- GitHub Issues: [https://github.com/blinko-space/blinko-plugin-ai-comment/issues](https://github.com/blinko-space/blinko-plugin-ai-comment/issues)
- Email: support@blinko.ai

## 致谢

感谢Blinko团队提供的插件开发平台和API支持！

---

**Enjoy AI评论功能！** 🎉
