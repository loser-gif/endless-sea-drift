# XI片 / v11-shard 交接

基线：`c9787921239f08c740cbc5a16e4abac9262220f3`。原地修改，未 commit / push。

## 改动

- `art.js`：沉船五根断木亮面从浅黄木色收敛为灰暖木色；每根在原 3×17 范围内增加 1px 冷色侧阴影及底部湿暗接触阴影，与 reef 水浸开口、船底暗部同系。位置、轮廓、96×80 缓存与显示尺寸不变，帆、桅杆及船体保持原样。
- 增加的 10 次 fillRect 仅在沉船 sprite 缓存生成时执行；不增加逐帧绘制、缓存表面、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-shard`；`index.html` edition → `XI片`。CHANGELOG 前置中文短说明，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图与报告副本指向 shard；成功运行后输出 `_shot-v11shard.png`、`_shot-v11.png` 和对应横竖屏、天气、安全区、弹层截图，报告为 `_v11shard-validation.json`。

## 保留范围

`game.js`、`styles.css` 与基线无差异。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好不变；保留 30fps、≤4 声部、触控 ≥44px、竖屏 notice +176px 及 HUD 布局。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- 已运行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1。`_v11shard-validation.json` 为 `ok:false`，既有 `_v10-validation.json` 同步更新；日志见 `_selftest-v11shard-run.log`。
- Chromium 实际启动报 `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用；没有伪报浏览器通过。
- 本轮未生成 `_shot-v11shard.png`，未覆盖既有 `_shot-v11.png`；历史截图不能作为本轮视觉验收证据。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`。既有断言覆盖 844×390、390×844、320×568，触控 ≥44px、notice +176px、gap ≥8px、HUD 高度 140–151px、安全区与弹层。人工查看沉船日间与风雨夜间的断木湿暗木脚，确认木纹仍清晰、侧阴影克制；iOS Safari 实机画面与 30fps 本轮未验证。

## 浏览器补跑（runner）
- session `01a1a7ec-7773-75d1-a2d1-6db223cdccc7`
- see `_selftest-v11shard-run.log`
