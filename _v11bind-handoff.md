# XI束 / v11-bind 交接

基线：`2c1556c9c38012fe1609fb7f04b37f08f2c29b1a`。原地编辑，未 commit / push。

## 改动

- `styles.css:258`：仅将建造／配方原生下拉框的 `:focus-visible` 外框颜色从 `#ffe0a0` 改为按钮使用的 `#e2c38a`，收敛焦点提示色差。保留 2px 外框、2px offset、原边框色及全部尺寸；无新增图层、动画、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE 为 `endless-sea-drift-v11-bind`；`index.html` edition 为 `XI束`。CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图路径及报告副本。主截图目标为 `_shot-v11bind.png` 和 `_shot-v11.png`，报告为 `_v11bind-validation.json`。
- `game.js`、`art.js` 相对基线无改动。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好全部保留；30fps / ≤4 声部逻辑不变。竖屏 notice +176px、HUD 尺寸与 ≥44px 触控规则未改。

## 验证与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 执行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1；`_v11bind-validation.json` 如实为 `ok:false`。日志见 `_selftest-v11bind-run.log`。脚本按原流程同时更新 `_v10-validation.json`。
- Chromium 实际启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器通过。
- 本轮未生成 `_shot-v11bind.png`；现有 `_shot-v11.png` 为历史产物，保留且未覆盖，不能用作本版验收证据。
- 需在可启动 Chromium 的环境重跑自测，复核 844×390、390×844、320×568 及安全区布局：触控 ≥44px、竖屏 gap ≥8px、HUD 高度 140–151px、notice offset 176px。另用键盘聚焦建造／配方观察暖金色外框；iOS Safari 实机视觉与 30fps 本轮未验证。

## 浏览器补跑（runner）
- session `01a1a7ce-c166-7600-bdac-ad9852384d73`
- see `_selftest-v11bind-run.log`
