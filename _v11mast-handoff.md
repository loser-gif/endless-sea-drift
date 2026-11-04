# XI帆 / v11-mast 交接

基线：`be1b5df577c749c45e1782985e9b06af7ef64070`。原地修改，未 commit / push。

## 改动

- `art.js`：商船暖色主帆、青绿副帆与沉船残帆增加宽窄折面明暗；帆脚增加细帆桁暗面与暖色上缘。雾灯船复用商船精灵，也继承细化。
- 沿用两个 96×80 缓存精灵、原尺寸和绘制位置；仅初始化时绘制多边形，无新增缓存、逐帧绘制、动画、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-mast`；`index.html` edition → `XI帆`；中文 CHANGELOG 前置，README 近况更新。
- `_selftest-v10.mjs` 的 cache、edition 断言及截图 / 报告路径切到 mast；成功时输出 `_shot-v11mast.png`、`_shot-v11.png`，以及 mast 竖屏和暂停截图。报告为 `_v11mast-validation.json`，保留脚本原有 `_v10-validation.json` 输出。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过；`git diff --check` 通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器启动失败，退出码 1；报告 `ok:false`。运行日志 `_selftest-v11mast-run.log`。
- Chromium：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器成功或截图。
- 未生成 `_shot-v11mast.png`；现有 `_shot-v11.png` 是旧产物，不能作为本次验收证据。尚未完成真实浏览器画面验收、帧率实测或 iOS Safari 验证。

## 保留与后续

`game.js`、`styles.css` 未修改：全部玩法数值、战斗 / HP / AI、合成、存档键与迁移、偏好、30fps 节流和 ≤4 声部逻辑保持。触控和 HUD 规则保持，竖屏 notice 仍为 +176px。

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 的画面与触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px、安全区及暂停滚动。随后在 iOS Safari 检查商船 / 沉船帆布与帆桁细边、帧率和安全区；本次不能声称这些浏览器检查已通过。

## 浏览器补跑（runner）
- session `01a1a76f-1a63-7441-9fcb-c5c96138f4a0`
- see `_selftest-v11mast-run.log`
