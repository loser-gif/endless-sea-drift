# XI泊2 / v11-moor2 交接

基线：`477d541375f3ee6e98b6343acaca7bf1b8eef084`。原地编辑，未 commit / push。

## 改动

- `art.js`：仅调整既有绳圈缓存色值，压深贴板、圈间、内唇及绳尾接触阴影，收敛暖麻绳高光。保留轮廓、像素坐标、44×36 缓存、unit=2、25×20 甲板显示尺寸与位置。无新增逐帧绘制、滤镜、粒子、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-moor2`；`index.html` edition → `XI泊2`。CHANGELOG 前置中文短记录，README 近况和 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、全部截图前缀与报告副本同步 moor2；浏览器成功时输出 `_shot-v11moor2.png` / `_shot-v11.png`。
- `game.js`、`styles.css` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部保持原样。保留 ≥44px 触控与竖屏 notice +176px。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 和 `git diff --check` 通过。
- 实跑 `node _selftest-v10.mjs`：69 项通过，browser-runtime 失败，退出码 1。`_v11moor2-validation.json` 与通用 `_v10-validation.json` 如实记录 `ok:false`；日志 `_selftest-v11moor2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 不可用。未生成 `_shot-v11moor2.png`，未复制历史截图；现有 `_shot-v11.png` 不能作为本版证据。
- 自测保留 notice gap ≥8px、HUD 高度 140–151px、offset 176px、触控 ≥44px 断言，但本轮浏览器布局未能验证。浏览器可用后重跑同一脚本，验收横屏、竖屏、小竖屏、昼夜风暴、安全区和暂停/死亡场景。
- 待浏览器视觉及 iOS Safari 实机验收绳圈 AO、缩放清晰度和真实帧率；未声称视觉或实机性能已通过。

## 浏览器补跑（runner）
- session `01a1a8dc-f3ac-78f2-9395-d20f3631ba48`
- see `_selftest-v11moor2-run.log`
