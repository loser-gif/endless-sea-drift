# XI浪2 / v11-crest2 交接

基线：`161f59b094f703ad86829a2c7fb9ab653f4ae866`。原地修改，未 commit / push。

## 改动

- `art.js`：六张 192×48 浪纹缓存中，断续亮肩增益 .13 → .10；象牙镜面亮点由 `a*shoulder*.44` 改为 `a*shoulder*shoulder*.38`，向肩部中心柔和集中，削弱外围碎亮。像素位置、2×1 尺寸、颜色和采样数量不变。仅启动烘焙计算变化；逐帧绘制、缓存尺寸、泡沫、反射带和夜色不变，无新增层、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-crest2`；`index.html` edition → `XI浪2`；CHANGELOG 前置中文记录，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言及全部本版截图／报告副本路径同步。目标 `_shot-v11crest2.png`、`_shot-v11.png`、`_v11crest2-validation.json`。
- `game.js`、`styles.css` 对基线无改动。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好保留；30fps / ≤4 声部、≥44px 触控与竖屏 notice +176px 布局实现保留。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，browser-runtime 失败，退出码 1；`_v11crest2-validation.json` 为 `ok:false`。日志 `_selftest-v11crest2-run.log`；脚本同时更新 `_v10-validation.json`。
- Chromium 实际启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。没有伪报浏览器通过。
- 本轮未生成 `_shot-v11crest2.png`；既有 `_shot-v11.png` 未覆盖，为历史产物，不能作为本版视觉验收证据。

## 复测

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成本版截图并检查日间、晨昏、风雨夜间浪尖高光与筏体辨识。既有断言覆盖 844×390、390×844、320×568、触控 ≥44px、竖屏 HUD 高 140–151px、notice gap ≥8px / offset +176px、安全区与弹层。本轮浏览器布局和视觉检查未完成；iOS Safari 实机 30fps 未实测，30fps 为保留的实现目标。

## 浏览器补跑（runner）
- session `01a1a8ce-c95a-7951-bf00-c9fec6d21716`
- see `_selftest-v11crest2-run.log`
