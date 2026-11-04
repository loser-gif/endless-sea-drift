# XI浪 / v11-crest 交接

基线：`aadb5050110e47befed2cee7d31bf451ab183b02`。原地修改，未 commit / push。

## 改动

- `art.js`：替换既有六张 192×48 浪纹缓存中的稀疏镜面亮点。将亮点限制在纹理左肩 x=24–92，以 x=58 为中心渐隐；宽度 3→2 像素、高度仍为 1，色彩改为柔暖象牙色。沿用原有离散采样，避免连续白边。只在启动烘焙时计算，不增加逐帧绘制、缓存表面、粒子、滤镜或依赖。
- `sw.js` CACHE → `endless-sea-drift-v11-crest`；`index.html` edition → `XI浪`。CHANGELOG 前置中文记录，README 近况与 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图路径与报告副本。主输出为 `_shot-v11crest.png`、`_shot-v11.png`、`_v11crest-validation.json`。
- `game.js`、`styles.css` 对基线无改动。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好全部保留；30fps / ≤4 声部、触控及竖屏布局逻辑不变。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 已执行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1。报告 `_v11crest-validation.json` 为 `ok:false`；日志 `_selftest-v11crest-run.log`。脚本同时更新既有 `_v10-validation.json`。
- Chromium 实际启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 本轮未生成 `_shot-v11crest.png`；既有 `_shot-v11.png` 保留历史产物，未覆盖，不能作为本版视觉验收证据。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`。已有断言覆盖 844×390、390×844、320×568 的触控 ≥44px、竖屏 notice offset +176px、gap ≥8px、HUD 高度 140–151px，以及安全区和弹层。需实际查看日间、晨昏和风雨夜间浪尖微高光，确认暖色亮点仍克制且不干扰木筏辨识。浏览器布局、画面效果及 iOS Safari 实机 30fps 本轮未验证。

## 浏览器补跑（runner）
- session `01a1a7cb-eb01-7f13-bf78-3395352e2476`
- see `_selftest-v11crest-run.log`
