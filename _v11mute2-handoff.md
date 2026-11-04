# XI哑2 / v11-mute2 交接

基线：`67d6d30708a2f7bd7e6446e18a8acd52dc6caef0`。原地编辑，未 commit / push。

## 改动

- `styles.css`：`--text-muted` 从 `#bdc9c1` 微调为低饱和灰绿 `#c1c8c0`；卡片提示、横竖屏航程、普通物资名称、饱腹/淡水标签、建造/配方标签共用该变量。修改既有声明，没有追加效果层。
- 金色数值、物资耗尽、低生命补给警告、弹药状态与按钮颜色保留。字号、行高、间距、触控尺寸及 notice +176px 规则未改。
- CACHE：`endless-sea-drift-v11-mute2`；edition：`XI哑2`。CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图与报告副本指向本版。浏览器成功时生成 `_shot-v11mute2.png`、`_shot-v11.png` 及本版场景截图；报告为 `_v11mute2-validation.json`。
- 已逐字节确认 `game.js`、`art.js` 与基线一致。玩法数字、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑均未修改；无新依赖、构建、粒子或滤镜。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实跑 `node _selftest-v10.mjs`：69 项通过，1 项 browser-runtime 失败，退出码 1。`_v11mute2-validation.json` 和 `_v10-validation.json` 均为 `ok:false`；日志 `_selftest-v11mute2-run.log`。
- Chromium 报错：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 未启动。未生成本版截图，未复制历史截图；现存 `_shot-v11.png` 不代表本版。
- 按 sRGB 相对亮度计算，新文字色对静态面板底色 `#303b35`、`#192d31`、`#263735`、`#2b332c`、`#10232e` 的对比度分别为 6.82、8.41、7.31、7.62、9.44:1。该计算不等于透明合成背景或海面上工具标签的浏览器实测。
- 现有自测保留 ≥44px 触控、notice gap ≥8px、HUD 高度 140–151px、offset 176px，以及三种视口、安全区、暂停和死亡卡片检查；本轮未取得这些浏览器结果。

## 后续验证

浏览器可用后运行 `node _selftest-v10.mjs`，目检昼夜海面上的工具标签及横竖屏次要文字层级；iOS Safari 实机触控、可读性和 30fps 仍需确认。不得将本轮报告描述为浏览器验收通过。

## 浏览器补跑（runner）
- session `01a1a8ea-8237-7e81-b948-1ebf142bc145`
- see `_selftest-v11mute2-run.log`
