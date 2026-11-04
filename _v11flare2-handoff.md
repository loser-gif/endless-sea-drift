# XI焰2 / v11-flare2 交接

基线：`4cbe1836645bd2543e2536d4403763dd17a769e8`。原地编辑，未 commit / push。

## 改动

- `art.js`：灯火克制第二轮，仅修改既有精灵的五处 alpha。吊灯外玻璃 bf → ad、内玻璃 b3 → 9e、火芯 bf → ad；灯模块玻璃 a6 → 94、火芯 bf → ad。RGB 暖色、黄铜框、像素坐标及尺寸保持原样；吊灯 14×24 显示、灯模块 40×48 缓存不变。无新增粒子、滤镜、动画、逐帧绘制、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-flare2`；`index.html` edition → `XI焰2`；CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部场景截图前缀及报告副本；成功时输出 `_shot-v11flare2.png` / `_shot-v11.png`，报告 `_v11flare2-validation.json`。
- `game.js`、`styles.css` 未改。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好及 30fps / ≤4 声部逻辑保持原样；触控 ≥44px 与竖屏 notice +176px 保留。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实跑 `node _selftest-v10.mjs`：69 项通过，browser-runtime 失败，退出码 1。`_v11flare2-validation.json` 与通用 `_v10-validation.json` 如实记录 `ok:false`；日志 `_selftest-v11flare2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 不可用。未生成 `_shot-v11flare2.png`，未复制历史截图；现有 `_shot-v11.png` 不代表本版。
- 自测保留 notice gap ≥8px、HUD 高度 140–151px、offset 176px 与触控 ≥44px 断言，但本轮无法实测浏览器布局。浏览器可用后重跑同一脚本验证横屏、竖屏、小竖屏、昼夜风暴、安全区与暂停/死亡场景。
- 待浏览器视觉及 iOS Safari 实机验收灯芯缩放可读性、夜间层次与真实帧率；未声称视觉或实机性能已通过。

## 浏览器补跑（runner）
- session `01a1a8df-c5f2-79e0-8886-3435a0e85b35`
- see `_selftest-v11flare2-run.log`
