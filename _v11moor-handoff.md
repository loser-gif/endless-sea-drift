# XI泊 / v11-moor 交接

基线：`e5af91eec70fc2ffb5daa27777c0dd4464748b96`。原地编辑，未 commit / push。

## 改动

- `art.js`：现有木筏绳圈增加烘焙接触阴影、冷暖麻绳明暗与断续编织纹理，内圈蓝色平槽改为暗褐遮蔽和窄边；无独立系船柱，未新增物件。沿用 44×36 缓存、unit=2、25×20 绘制尺寸与原位置。只改初始化缓存像素，无新增逐帧绘制、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-moor`；`index.html` edition → `XI泊`；CHANGELOG 前置中文记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、所有场景截图前缀与报告副本：`_shot-v11moor.png`、`_shot-v11.png`、`_v11moor-validation.json`。
- `game.js`、`styles.css` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑保持原样。保留 ≥44px 触控与竖屏 notice +176px 规则。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1；报告 `ok:false`。日志：`_selftest-v11moor-run.log`。
- Chromium 启动报 `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，无法连接 CDP。未伪造浏览器通过，未复制历史截图。`_shot-v11moor.png` 未生成；现有 `_shot-v11.png` 为历史产物，不能作为本版证据。
- 浏览器可用时重跑同一自测以生成截图并验证横屏、竖屏、小竖屏、昼夜风暴、安全区及暂停/死亡布局。脚本保留 notice gap ≥8px、HUD 高度 140–151px、offset 176px 与触控 ≥44px 断言；本轮无法确认实际浏览器布局。
- 尚待浏览器视觉及 iOS Safari 实机验收：绳圈贴板阴影、缩放后纹理清晰度与真实帧率。没有声称实机性能通过。

## 浏览器补跑（runner）
- session `01a1a7e0-32aa-7ae3-b3ec-7d7769ac87d3`
- see `_selftest-v11moor-run.log`
