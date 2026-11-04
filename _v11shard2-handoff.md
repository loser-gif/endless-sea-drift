# XI片2 / v11-shard2 交接

基线：`8b563b228fac349993819d38c2836ec529a0e31c`。原地编辑，未 commit / push。

## 改动

- `art.js`：沉船湿木 AO 第二轮，仅调整五根既有木肋的三种填色：亮面 `#b49a70` → `#aa936e`，冷侧面 `#52615a` → `#485b56`，湿脚 `#395356` → `#324c50`。收敛亮面并压深浸水接触阴影。
- 每根 3×17 木肋、侧面 1×15、湿脚 2×4 的坐标与尺寸不变；沉船 96×80 缓存及显示尺寸、变体路径和绘制次数不变。未增加特效、粒子、滤镜、依赖或构建。
- CACHE 更新为 `endless-sea-drift-v11-shard2`，edition 更新为 `XI片2`；CHANGELOG 前置中文短记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言、截图前缀及报告副本。浏览器成功时输出 `_shot-v11shard2.png` / `_shot-v11.png`，报告副本为 `_v11shard2-validation.json`。
- `game.js`、`styles.css` 未修改：玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑保持原样；≥44px 触控与竖屏 notice +176px / HUD 规则不变。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实跑 `node _selftest-v10.mjs`：69 项通过，browser-runtime 失败，退出码 1。`_v11shard2-validation.json` 与 `_v10-validation.json` 均记录 `ok:false`；日志 `_selftest-v11shard2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 不可用。未生成本版截图，未复制历史截图；现有 `_shot-v11.png` 不代表本版。
- 保留横屏、竖屏、小竖屏、安全区、触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px、offset 176px 等浏览器断言，但本轮未取得浏览器实测。
- 浏览器可用后重跑 `node _selftest-v10.mjs`；另外需目检沉船木肋昼夜湿润层次与 iOS Safari 实机帧率。未声称视觉或实机 30fps 验收通过。

## 浏览器补跑（runner）
- session `01a1a8e7-ad45-7413-9849-ccc95ca8c839`
- see `_selftest-v11shard2-run.log`
