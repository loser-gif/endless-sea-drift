# XI埠 / v11-quay 交接

基线：`bfafdc300b6d1f195cc9c8c202d55434b86c4876`。原地修改，未 commit / push。

## 改动

- 未找到独立码头栈桥精灵，按备选方案调整 `art.js` 商船甲板：两条低对比板缝 AO、冷色湿木下缘、两段短反光；收敛原甲板亮边并冷却桅杆底部接触阴影。新增五个多边形仅在精灵缓存生成时绘制，不增加逐帧绘制层。
- 商船保持 96×80 缓存、原轮廓、绘制尺寸与位置。雾灯船沿用商船染色，因此继承这些木板细节。无新依赖、构建、滤镜、粒子或音效。
- `sw.js` CACHE → `endless-sea-drift-v11-quay`；`index.html` edition → `XI埠`；CHANGELOG 前置中文记录，README 近况与 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、截图与报告副本路径，修正遗留 `XI曙` 浏览器断言为 `XI埠`。主截图场景在既有雾灯船断言后切换为白昼商船，方便复核甲板；目标 `_shot-v11quay.png`、`_shot-v11.png`。
- `game.js`、`styles.css` 完全未改。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、44px 触控、notice +176px、30fps / ≤4 声部逻辑保持基线。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器运行检查失败，退出码 1。报告 `_v11quay-validation.json` 为 `ok:false`；原有 `_v10-validation.json` 也由脚本更新。日志 `_selftest-v11quay-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用；未伪报浏览器成功。
- 本轮未生成 quay 截图；现有 `_shot-v11.png` 是历史产物，未用旧图冒充本版。

## 待复核

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成本版主截图及天气、横竖屏副本。现有浏览器断言覆盖 844×390、390×844、320×568，含触控 ≥44px、竖屏 HUD 140–151px、notice gap ≥8px / offset +176px、安全区与弹层滚动。本轮未实测浏览器布局、视觉效果或 iOS Safari 实机 30fps；需检查白昼与风雨下商船及雾灯船湿木细节是否克制清楚。

## 浏览器补跑（runner）
- session `01a1a7c6-3e2f-78f3-8959-e3564451eb44`
- see `_selftest-v11quay-run.log`
