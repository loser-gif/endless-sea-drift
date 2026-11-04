# XI印 / v11-seal 交接

基线：`efc9351031d9d294a5f7858c8f8e36efd199da11`。原地修改，未 commit / push。

## 变更与自审

- `sw.js` CACHE 更新为 `endless-sea-drift-v11-seal`；`index.html` 的 `.edition` 更新为 `XI印`。
- `CHANGELOG-v11.md` 顶部追加中文封版记录；README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、报告和截图复制路径转向 seal：`_v11seal-validation.json`、`_shot-v11seal.png`，保留 `_shot-v11.png` 兼容复制；竖屏截图目标同步为 `_shot-v11seal-portrait.png` / `_shot-v11seal-small-portrait.png`。
- 静态自审未发现必须修复的明确 UI 问题；本次不追加美术或 CSS 改动。
- `game.js`、`art.js`、`styles.css`、`manifest.webmanifest` 与基线逐字节一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制与 ≤4 声部逻辑保留。无新增依赖、构建、粒子或滤镜。
- 竖屏 notice 的 +215px 路径及后续 port +176px 覆盖均保留；≥44px 触控、安全区和卡片滚动规则不变。

## 验证结果与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器运行失败，退出码 1。
- `_v11seal-validation.json`：`ok:false`，CACHE 正确；兼容报告 `_v10-validation.json`。完整日志：`_selftest-v11seal-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。
- 本次没有生成 seal 截图，未覆盖 `_shot-v11.png`；现有截图属于之前版本，不能作为本次浏览器验收证据。
- 浏览器环境可用后运行 `node _selftest-v10.mjs`，检查横屏、竖屏、小竖屏的真实触控尺寸、notice 间距、安全区、CTA 可达性与截图。iOS Safari 实机、实际帧率及离线更新仍待验证；不宣称通过。

## 浏览器补跑（runner）
- session `01a1a728-637d-7c41-bd2b-9fdda6824b3c`
- see `_selftest-v11seal-run.log`
