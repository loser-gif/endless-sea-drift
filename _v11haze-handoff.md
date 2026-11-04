# XI霾 / v11-haze 交接

基线：`9dc0104d3f0e1bde717a9bfb5bb854027cec9b86`。原地修改，未 commit / push。

## 修改

- `art.js`：复用 `SeaArt.atmosphere` 既有全屏调色绘制，晴朗日间使用 `#d3d1b7`、透明度 0.028，轻柔压低午间明暗对比。此静态调色覆盖晴朗日间，包括正午；夜间、暮色和风暴维持原处理。
- 远景雾范围、精灵、景深、柔光保持原样；无新增画布、绘制层、粒子、滤镜、动画、依赖或构建。既有透明绘制变为轻微可见，实际设备性能尚未测量。
- `sw.js` CACHE → `endless-sea-drift-v11-haze`；`index.html` edition → `XI霾`；CHANGELOG 中文条目前置、README 近况同步。
- `_selftest-v10.mjs` 的 cache、edition 断言、截图与报告副本改为 haze。增加 time=30 晴朗正午场景，浏览器可用时将其复制为 `_shot-v11haze.png` 与 `_shot-v11.png`；保留昼暮、风暴、横竖屏、暂停、安全区与终章截图。

## 保留范围

`game.js`、`styles.css` 无修改；全部玩法数值、战斗、HP、AI、合成、存档 key、迁移与偏好保留。30fps、≤4 声部、触控尺寸、竖屏 notice +176px 与 HUD 布局保持原值。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过；浏览器启动失败，退出码 1，`_v11haze-validation.json` 为 `ok:false`。
- Chromium 报 `FATAL:content/browser/sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。完整日志：`_selftest-v11haze-run.log`。
- 本轮未生成 `_shot-v11haze.png`；既有 `_shot-v11.png` 未更新，不作为本轮证据。兼容输出 `_v10-validation.json` 已恢复基线，保留本轮 haze 报告。
- 未实测薄霾观感、触控 ≥44px、notice gap ≥8px、HUD 高度、实际帧率或 iOS Safari。现有浏览器布局断言保留，需在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`；Safari 需真机复核。

## 浏览器补跑（runner）
- session `01a1a7fe-0264-7ae1-9873-e00d7709b1fb`
- see `_selftest-v11haze-run.log`
