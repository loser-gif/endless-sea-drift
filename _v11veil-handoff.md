# XI纱 / v11-veil 交接

基线：`6d76673a717802eb19835c12c4104800f22d188a`。原地修改，未 commit / push。

## 改动

- `art.js` 仅调整既有 atmosphere alpha：有灯夜色 .29 → .25、无灯夜色 .40 → .35、夜间暗角 .54 → .48、夜间风雨罩染 .26 → .22。保留冷海色、原有渐变、光晕和所有绘制次数，让夜间罩染更轻；不添加乳白雾层、粒子、滤镜、缓存或依赖。白昼风雨和黄昏透明度保持原值。
- `sw.js` CACHE 为 `endless-sea-drift-v11-veil`；`index.html` edition 为 `XI纱`；CHANGELOG 前置中文记录，README 近况及 edition 同步。
- `_selftest-v10.mjs` 更新 cache、edition 浏览器断言与全部本版截图／报告副本路径。主截图保留原已验证的夜间雾灯船场景，移除上一版商船白昼截图切换。输出目标 `_shot-v11veil.png`、`_shot-v11.png`、`_v11veil-validation.json`。
- `game.js` 与 `styles.css` 对基线无改动。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、44px 触控、notice +176px、30fps / ≤4 声部逻辑保持原样。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 和 `git diff --check` 通过。
- 执行 `node _selftest-v10.mjs`：68 项通过，浏览器运行检查失败，退出码 1。`_v11veil-validation.json` 为 `ok:false`，日志 `_selftest-v11veil-run.log`；脚本同时更新既有 `_v10-validation.json`。
- Chromium 启动错误：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。没有伪报浏览器成功或使用旧截图冒充本版。
- 本轮未生成 `_shot-v11veil.png`；既有 `_shot-v11.png` 为历史产物，未改写。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，生成主截图及天气、横竖屏、安全区和弹层截图。现有断言覆盖 844×390、390×844、320×568，检查触控 ≥44px、竖屏 HUD 140–151px、notice offset +176px / gap ≥8px。浏览器布局、夜色薄纱视觉和 iOS Safari 实机 30fps 本轮未验证；需复核有灯／无灯夜间及风雨夜间的海面层次、木筏轮廓和文字可读性。

## 浏览器补跑（runner）
- session `01a1a7c9-16ad-7140-8b6e-1b26f1c73d06`
- see `_selftest-v11veil-run.log`
