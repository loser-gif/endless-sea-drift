# XI舵 / v11-tack 交接

基线：`a3c3d335a0ad4f9ca69dbea6767dd543ade83535`。原地编辑，未 commit / push。

## 改动

- `styles.css`：替换既有摇杆外观规则，黄铜外圈采用细内缘与暗槽；拇指采用冷暖金属斜向渐变及收敛阴影。未新增动画、滤镜、粒子、依赖或构建步骤。
- 保留拇指 44×44px、摇杆各屏幕尺寸、定位及事件行为；HUD 与 notice 布局规则未改，竖屏仍为 +176px。
- `sw.js` CACHE → `endless-sea-drift-v11-tack`；`index.html` edition → `XI舵`；CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言、全部本版截图路径和报告副本；增加三个屏幕尺寸下的 44×44px 拇指断言。浏览器可用时输出 `_shot-v11tack.png`、`_shot-v11.png` 及其他布局截图；报告副本为 `_v11tack-validation.json`。
- `game.js`、`art.js` 无改动。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑均保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1。报告 `ok:false`，详见 `_v11tack-validation.json` 和 `_selftest-v11tack-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用。未伪报浏览器通过，未生成本版截图；既有 `_shot-v11.png` 为历史产物，不作为本版证据。
- 待允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，验证 844×390、390×844、320×568 和安全区；检查触控 ≥44px、拇指 44×44px、notice gap ≥8px、HUD 高度 140–151px、notice offset 176px。
- 浏览器视觉和 iOS Safari 实机 30fps 尚未验收；补验时检查金属高光不过亮、黄铜外圈仍清晰及拇指拖动手感。

## 浏览器补跑（runner）
- session `01a1a7d4-e25b-77a1-bca3-efd186466c89`
- see `_selftest-v11tack-run.log`
