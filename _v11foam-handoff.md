# XI沫 / v11-foam 交接

基线：`da48de2c73dd091467b680a37d5f332a810eecf5`。原地修改，未 commit / push。

## 修改

- `art.js` 仅四个十六进制色值：缓存泡沫中层 `#a6cfc0` → `#b4cec0`、尖端 `#ccdebe` → `#e2d9b9`，收淡绿意并微暖；木筏湿边盐痕 `#b79460` → `#bca77e`、水线反光 `#3b6568` → `#507270`，轻提盐灰。
- 未修改 game.js 的动态尾流；此次暖色作用于 art.js 现有缓存泡沫。几何、透明度、缓存数量、循环、绘制次数与特效预算完全不变，无新增依赖、构建、滤镜或粒子。
- `sw.js` CACHE → `endless-sea-drift-v11-foam`；`index.html .edition` → `XI沫`；CHANGELOG 顶部中文记录、README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 切换 report.cache、报告副本 `_v11foam-validation.json`、横屏截图副本 `_shot-v11foam.png`；继续输出 `_shot-v11.png` 及 v10 兼容产物。竖屏截图目标为 `_shot-v11foam-portrait.png`、`_shot-v11foam-small-portrait.png`。

## 保留范围

对比 HEAD 已确认 `game.js`、`styles.css`、`manifest.webmanifest` 字节一致；去除十六进制颜色后 art.js 与基线一致。全部玩法数值、战斗 / HP / AI、合成、存档键与迁移、偏好、30fps 限制及 ≤4 声部保持不变。触控 ≥44px 与竖屏 notice +176px 规则保持；自测仍要求竖屏 HUD ≤168px、通知间距 ≥8px。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过、1 项失败，退出码 1。真实 Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- `_v11foam-validation.json` 明确 `ok:false`，CACHE 正确；完整日志 `_selftest-v11foam-run.log`，兼容报告 `_v10-validation.json`。
- 本次未生成 foam 截图，未覆盖 `_shot-v11.png`；旧截图不代表本版视觉验收。
- 待浏览器可用后运行 `node _selftest-v10.mjs`，核验 844×390 横屏、390×844 与 320×568 竖屏的泡沫暖度、水线盐灰、触控、HUD 高度、通知间距及安全区。iOS Safari 实机、实际帧率与离线缓存更新尚未验证。

## 浏览器补跑（runner）
- session `01a1a738-6e67-7d40-95e6-06923d8e60d5`
- see `_selftest-v11foam-run.log`
