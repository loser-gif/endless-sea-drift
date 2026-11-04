# XI航 / v11-warp 交接

基线：`45710fb3ada9a5f27f5cb12f76c85ba9e4ddc2e5`。原地编辑，未 commit / push；既有未跟踪文件保留。

## 改动

- `styles.css`：航程栏增加低对比暖灰底色与细底边，航程及暂停／终章统计使用 iOS 友好的等宽字体序列和齐宽数字。“最远停靠”原为统计文本，因此通过所在统计区统一字体，不新增读数或修改 DOM / 游戏逻辑。
- 保留原有数字颜色、阴影、字号、行高、边距和触控尺寸。未新增动画、滤镜、粒子、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-warp`；`index.html` edition → `XI航`；CHANGELOG 中文条目前置，README 近况与 edition 同步。
- `_selftest-v10.mjs` 的 cache、edition 断言、报告及全部截图副本路径改为 warp；浏览器成功时生成 `_shot-v11warp.png` / `_shot-v11.png` 和各视口截图，保留 v10 兼容输出。

## 保留范围

`game.js`、`art.js` 与基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流及 ≤4 声部逻辑不变。鎏金库存数字规则未改。竖屏 notice +176px 与 ≥44px 触控规则未改。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。
- `_v11warp-validation.json`：`ok:false`；兼容报告 `_v10-validation.json` 同步。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用；未伪报浏览器成功。
- 未生成 `_shot-v11warp.png`。现有 `_shot-v11.png` 为历史截图，不代表本版效果。

## 待复核

在可运行 Chromium 的环境重新执行 `node _selftest-v10.mjs`，验证 844×390、390×844、320×568。既有断言覆盖触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px、安全区及统计卡片滚动。字体更换可能影响换行，本轮未能实测这些几何指标；需查看长航程、暴风雨与长统计文本。iOS Safari 等宽字体回退、刘海布局与帧率尚未实机验证。

## 浏览器补跑（runner）
- session `01a1a7ae-c385-77b0-99d3-cd7c58e219fb`
- see `_selftest-v11warp-run.log`
