# XI远 / v11-loom 交接

基线：`e5fd65072435973e517fa55407553eb2204d6cb8`。原地修改，未 commit / push。

## 修改

- `art.js` 复用 seaMist 远海雾幕缓存，增加一处低对比远岛背景轮廓；贝塞尔山脊通过缓存插值柔化，岛脚透明渐隐，调整同一雾幕的远海色阶。仍在世界精灵之前绘制，不影响停靠岛屿或交互。
- 缓存由 1×128 扩为 192×128，RGBA 理论像素内存增加 97,792 字节（约 95.5 KiB，不含浏览器内部开销）；仅 resize 时生成。画布数量、精灵数量、逐帧 drawImage 次数不变；无新增依赖、构建、粒子、滤镜或动画。
- `sw.js` CACHE → `endless-sea-drift-v11-loom`；`index.html .edition` → `XI远`；CHANGELOG 顶部中文记录、README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、报告与截图目标切至 loom：`_v11loom-validation.json`、`_shot-v11loom.png`，继续输出 `_shot-v11.png` 与 v10 兼容产物；竖屏目标为 `_shot-v11loom-portrait.png`、`_shot-v11loom-small-portrait.png`。

## 保留范围

对比 HEAD，`game.js`、`styles.css`、`manifest.webmanifest` 字节一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制及 ≤4 声部保持不变。触控 ≥44px 与竖屏 notice +176px 规则未改；自测仍要求 HUD ≤168px、通知间距 ≥8px。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项失败，退出码 1。检测到 Chromium 可执行文件，但自测所需 `undici` 模块缺失（`MODULE_NOT_FOUND`），未安装新依赖；浏览器阶段报告 `Chrome or WebSocket unavailable`；报告明确 `ok:false`，没有将 VM / mock Canvas 通过视为浏览器验收。
- 报告：`_v11loom-validation.json`（兼容 `_v10-validation.json`）；日志：`_selftest-v11loom-run.log`。
- 本次未生成 loom 截图，未覆盖 `_shot-v11.png`。现有旧截图不代表本版视觉验收。
- 待 Chromium 可用后重跑自测，检查 844×390、390×844、320×568 下的远岛柔边、远海层次、HUD / 通知间距及触控。iOS Safari 实机、实际 30fps 与离线缓存升级尚未验证。

## 浏览器补跑（runner）
- session `01a1a746-9fa8-7872-8e5c-42cb8f60a990`
- see `_selftest-v11loom-run.log`
