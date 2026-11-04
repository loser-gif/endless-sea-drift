# XI湾 / v11-cove 交接

- 基线：`7a5a3222c70b11233b30ea7d9c9dae5f566e3bf6`。原地修改，未 commit / push。
- `art.js`：仅修改 island 精灵内的湿沙与岩石细节。湾口以低饱和暖灰沙带过渡到冷绿湿沙，配少量断续 1px 反光；原有左侧岩石补明暗切面及短贴地 AO。保留 96×80 缓存、外轮廓和绘制尺寸，沿用初始化缓存，无新增逐帧特效、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-cove`；`index.html` edition → `XI湾`；CHANGELOG 前置中文短记，README 近况同步。
- `_selftest-v10.mjs` report.cache、edition 断言、截图和报告副本改为 cove。成功时主图输出 `_shot-v11cove.png` / `_shot-v11.png`，竖屏与暂停图亦使用 cove 前缀。
- `game.js`、`styles.css` 与基线完全一致。玩法数值、战斗 / HP / AI、合成、存档键 / 迁移 / 偏好、30fps 与最多 4 声部逻辑未修改。44px 触控和竖屏 notice +176px 保留；现有自测仍要求 HUD 高 140–151px、公告间距≥8px。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：退出码 1；68 项通过，浏览器启动失败。`_v11cove-validation.json` 如实为 `ok:false`；兼容报告 `_v10-validation.json` 同步更新。日志：`_selftest-v11cove-run.log`。
- Chromium 报错：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`。未完成浏览器视觉、触控、布局、安全区或实际帧率检查；未做 iOS Safari 真机检查。
- 本轮未生成 `_shot-v11cove.png`；现有 `_shot-v11.png` 为历史文件，不是本版证据。允许 Chromium 启动的环境中运行 `node _selftest-v10.mjs` 可补齐本版截图和完整验证。

## 文件

`art.js`、`sw.js`、`index.html`、`_selftest-v10.mjs`、`CHANGELOG-v11.md`、`README.md`、本交接，以及验证报告与运行日志。既有未跟踪文件保留。

## 浏览器补跑（runner）
- session `01a1a768-189a-7582-9c39-5520f37cf13d`
- see `_selftest-v11cove-run.log`
