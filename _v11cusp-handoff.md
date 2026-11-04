# XI曙 / v11-cusp 交接

基线：`fc074c018aa88d190dfa37b10730da0d28db30e0`。原地修改，未 commit / push。

## 改动

- `art.js` 仅三个 RGB 色值微调：共享 brass `#e0c28a → #ddbe91`、light `#ffe6ab → #f6e2bd`，黄昏罩染 `#b68a58 → #b58e68`。柔金、暖象牙与沙金统一晨曦边光；冷色阴影、夜色、透明度、像素位置、缓存尺寸及绘制次数不变。
- CACHE：`endless-sea-drift-v11-cusp`；edition：`XI曙`。CHANGELOG 已前置中文记录，README 近况已更新。
- 自测报告及截图路径切换为 cusp，保留 `_shot-v11.png` 副本；增加 time=0 晨光 / time=65 黄昏截图。晨光只是既有白昼场景标签，没有新增天气阶段。浏览器 profile 改为独立 `/tmp` 临时目录，避免清理已有工作区 profile。
- `game.js`、`styles.css` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好保持原样。44px 触控、竖屏 notice +176px、30fps / ≤4 声部逻辑不变；无新增依赖、滤镜、粒子或绘制层。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。报告 `_v11cusp-validation.json` 为 `ok:false`；日志 `_selftest-v11cusp-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器通过。
- 本次未生成 `_shot-v11cusp.png`、晨光 / 黄昏或其他 cusp 截图；现有 `_shot-v11.png` 为历史图，未用旧图冒充本版。

## 待复核

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成 `_shot-v11cusp.png` / `_shot-v11.png` 及 dawn、dusk 截图，检查微调后的边光。既有浏览器断言覆盖 844×390、390×844、320×568 的触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px、安全区及弹层滚动。本轮未实测布局、视觉与 iOS Safari 实机帧率。

## 浏览器补跑（runner）
- session `01a1a7c0-8e0d-7650-acb1-ff38239d500b`
- see `_selftest-v11cusp-run.log`
