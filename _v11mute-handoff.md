# XI哑 / v11-mute 交接

基线：`f2369e8852e254e35c8deb6954ff1c030c31a08a`。原地修改，未 commit / push。

## 改动

- `styles.css`：将三处不同的 muted 色值收敛到 `--text-muted: #bdc9c1`；通用 `.muted` 与 `.card .muted` 共用，覆盖启航提示及启航／暂停／结束卡片的离线说明。保留原字号、行高与布局，不新增阴影、滤镜、粒子、动画或依赖。
- `sw.js` CACHE → `endless-sea-drift-v11-mute`；`index.html` edition → `XI哑`；CHANGELOG 前置中文说明，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图及报告副本改为 mute。浏览器成功运行时生成 `_shot-v11mute.png`、`_shot-v11.png` 及各场景截图；本轮报告为 `_v11mute-validation.json`。

## 保留范围

`game.js`、`art.js` 与基线无差异。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好不变；30fps、≤4 声部逻辑不变。CSS 仅改色值与共享变量，触控 ≥44px、竖屏 notice +176px、HUD 尺寸与间距规则原样保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：68 项通过；Chromium 启动失败，退出码 1，报告 `ok:false`。日志：`_selftest-v11mute-run.log`；旧 `_v10-validation.json` 同步写入本轮结果。
- 浏览器失败原因：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未生成 `_shot-v11mute.png`，未覆盖 `_shot-v11.png`，未将历史截图用作本轮证据。
- 静态 sRGB 对比度估算：将卡片最亮底色以 245/255 不透明度叠在纯白底上，再叠加最大 20/255 亮面，辅助文字在启航／暂停卡片约 4.98:1、结束卡片约 4.54:1。此为色值计算，不是浏览器像素采样或真机视觉验收。

## 待复核

在允许启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，确认卡片文字颜色与截图。既有浏览器断言覆盖 844×390、390×844、320×568、触控 ≥44px、notice 偏移 +176px、gap ≥8px、HUD 高度 140–151px、安全区及弹层滚动；本轮这些浏览器检查未执行。iOS Safari 真机及实际帧率仍待验证。

## 浏览器补跑（runner）
- session `01a1a7ef-4e2e-7380-890b-44e9f8daeea0`
- see `_selftest-v11mute-run.log`
