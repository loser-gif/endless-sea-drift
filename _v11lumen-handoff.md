# XI辉 / v11-lumen 交接

基线：`da9d67a80133f96dd81ae60ec0c44264799d9f2f`。原地编辑，未 commit / push。

## 改动

- `art.js`：仅在既有 40×48 灯具缓存精灵的湿木底座上绘制三段 1px 高、7/4/3px 长的暖色反光；保留冷色下缘，先画回照再画灯杆以保持遮挡。无新缓存、逐帧绘制、粒子、滤镜、依赖或构建步骤。
- 灯笼、灶火、探照灯玻璃的余烬颜色与 alpha，以及夜间 halo 的 .48 alpha 和尺寸全部未改。
- `sw.js` CACHE → `endless-sea-drift-v11-lumen`；`index.html` edition → `XI辉`；CHANGELOG 前置中文短记录、README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、浏览器 edition 断言、本版全部截图路径与报告副本。成功运行时主截图输出 `_shot-v11lumen.png`、`_shot-v11.png`，报告输出 `_v11lumen-validation.json`，并保留原 `_v10-validation.json` 输出。
- `game.js`、`styles.css` 相对基线无改动：全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好保留；30fps / ≤4 声部逻辑、44px 触控规则、竖屏 notice +176px 和 HUD 布局不变。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际执行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1。`_v11lumen-validation.json` 为 `ok:false`，日志见 `_selftest-v11lumen-run.log`。
- Chromium 启动报 `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器通过。
- 本轮未生成 `_shot-v11lumen.png`；既有 `_shot-v11.png` 是历史产物，未覆盖，不作为本版验收证据。
- 在允许启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，复核横屏 844×390、竖屏 390×844、小竖屏 320×568 及安全区：触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px、notice offset 176px。
- 本轮未完成浏览器视觉或 iOS Safari 实机 30fps 验收；补验时观察灯具脚下断续暖色回照是否保持细微、板缝与冷湿边是否仍清晰。

## 浏览器补跑（runner）
- session `01a1a7d2-0a71-7510-ae1f-78197da56d1f`
- see `_selftest-v11lumen-run.log`
