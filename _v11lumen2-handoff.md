# XI辉2 / v11-lumen2 交接

基线：`088033875f37a26703f82621ca5cd57b1b35d392`。原地修改，未 commit / push。

## 改动

- `art.js`：灯具 40×48 缓存底座的三段湿木回照，主亮色 `#c4a36b` → `#b99a69`，次亮色 `#ad905e` → `#a3875d`。轻降亮度，贴合湿木底色；7/4/3×1px 的位置、遮挡顺序、冷湿下缘与绘制次数均保留。只在启动缓存烘焙时换色，无新缓存、逐帧效果、粒子、滤镜、依赖或构建。
- 灶火余烬、灯芯、探照灯玻璃颜色及 alpha 不变；夜间 halo 的 .48 alpha、尺寸和所有罩染保持原样。
- `sw.js` CACHE → `endless-sea-drift-v11-lumen2`；`index.html` edition → `XI辉2`；CHANGELOG 前置中文记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` report.cache、edition 断言、全部本版截图及报告副本路径同步；成功时主截图为 `_shot-v11lumen2.png` / `_shot-v11.png`。报告 `_v11lumen2-validation.json`，保留脚本原有 `_v10-validation.json` 输出。
- `game.js`、`styles.css` 对基线无修改。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好全部保留；30fps / ≤4 声部逻辑、≥44px 触控和竖屏 notice +176px 实现不变。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际执行 `node _selftest-v10.mjs`：69 项非浏览器检查通过，1 项 browser-runtime 失败，退出码 1。报告 `ok:false`，日志 `_selftest-v11lumen2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用。没有伪报浏览器成功。
- 未生成 `_shot-v11lumen2.png`；既有 `_shot-v11.png` 未覆盖，为历史产物，不能作为本版视觉验收证据。

## 补验

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`。检查日间、晨昏及风雨夜间灯座反光是否细微、余烬仍清晰；复核横屏 844×390、竖屏 390×844、小竖屏 320×568 和安全区，触控 ≥44px、notice gap ≥8px / offset +176px、HUD 高 140–151px。浏览器视觉与布局本轮未完成验收；iOS Safari 实机 30fps 未实测，帧率为保留的实现目标。

## 浏览器补跑（runner）
- session `01a1a8d1-a2ef-7360-b76d-2e75a71beb70`
- see `_selftest-v11lumen2-run.log`
