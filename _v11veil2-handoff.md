# XI纱2 / v11-veil2 交接

基线：`c9d7a09ddab93a0638d31eb8f3e82eeeef5834ec`。原地修改，未 commit / push。

## 改动

- `art.js` 只调整既有 atmosphere 四个夜间 alpha：有灯夜色 .25 → .23、无灯夜色 .35 → .32、夜间暗角 .48 → .44、风雨夜罩染 .22 → .20。渐变、光晕、雨线、几何与绘制次数不变；白昼和黄昏透明度不变。无新层、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-veil2`；`index.html` edition → `XI纱2`；CHANGELOG 前置中文记录，README 近况与 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言及本版全部截图／报告副本路径已同步。目标为 `_shot-v11veil2.png`、`_shot-v11.png`、`_v11veil2-validation.json`，保留既有夜间雾灯船主图场景。
- `game.js`、`styles.css` 对基线无改动。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好及 30fps / ≤4 声部逻辑原样保留；触控与竖屏 notice +176px / HUD 布局原样保留。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1；`_v11veil2-validation.json` 为 `ok:false`。日志：`_selftest-v11veil2-run.log`；既有 `_v10-validation.json` 同时由脚本更新。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。没有伪报浏览器通过。
- 本轮未生成 `_shot-v11veil2.png`；既有 `_shot-v11.png` 未覆盖，是历史截图，不能作为本版视觉证据。

## 复测

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`。检查有灯／无灯夜间与风雨夜间的海面层次、筏缘和角色可读性，并生成本版截图。

既有浏览器断言覆盖 844×390、390×844、320×568、触控 ≥44px、竖屏 HUD 高 140–151px、notice gap ≥8px / offset +176px、安全区与弹层滚动。本轮这些浏览器检查未完成；iOS Safari 实机 30fps 未实测，30fps 为保留的实现目标。

## 浏览器补跑（runner）
- session `01a1a8cb-f2e2-77e3-a7aa-3dc099fb62a8`
- see `_selftest-v11veil2-run.log`
