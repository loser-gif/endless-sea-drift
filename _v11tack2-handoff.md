# XI舵2 / v11-tack2 交接

基线：`831fed75305c245ae2dadd0e3e0abf76482b21a6`。原地修改，未 commit / push。

## 改动

- `styles.css`：直接调整既有摇杆规则。黄铜环上缘由 `#f0d39b` 收敛至 `#d8ba82`，内圈 alpha 从 `80` 降至 `66`；金属头六段渐变保留，中央亮带由 49–52% 放宽至 46–57% 并降低色差，形成柔和金属面。保留原有阴影数量、尺寸及布局，不增加动画、滤镜、粒子、依赖或构建。
- 摇杆头仍为 44×44px，摇杆底盘与触控事件不变。竖屏 notice +176px、HUD 与安全区规则均未改动。
- `sw.js` CACHE → `endless-sea-drift-v11-tack2`；`index.html` edition → `XI舵2`；CHANGELOG 前置中文记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` report.cache、edition 断言、全部本版截图路径与报告副本同步。成功时主截图输出 `_shot-v11tack2.png` 与 `_shot-v11.png`；报告为 `_v11tack2-validation.json`，保留原有 `_v10-validation.json` 输出。
- `game.js`、`art.js` 对基线无修改。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好以及 30fps / ≤4 声部逻辑保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：69 项非浏览器检查通过；browser-runtime 失败，退出码 1，报告 `ok:false`。日志 `_selftest-v11tack2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 未生成 `_shot-v11tack2.png`；既有 `_shot-v11.png` 未覆盖，为历史产物，不可作为本版验收证据。

## 待补验

在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，检查黄铜环与金属头的日夜可辨性。现有浏览器断言覆盖横屏 844×390、竖屏 390×844、小竖屏 320×568、安全区、触控 ≥44px、摇杆头 44×44px、notice gap ≥8px / offset +176px 与 HUD 高 140–151px；本轮因启动失败未执行。iOS Safari 触控手感及实机 30fps 尚未实测。

## 浏览器补跑（runner）
- session `01a1a8d4-76aa-7012-a6dd-4fac9a0e049c`
- see `_selftest-v11tack2-run.log`
