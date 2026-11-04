# XI木 / v11-grain 交接

基线：`b9c065f808d2403b0158af0557590f0c09c36999`。原地修改，未 commit / push。

## 修改

- 美术仅修改 `art.js` 的 board0–board3 缓存精灵：板端增加短木纹、端部暗孔与微弱暖色断线；下沿板缝增加断续 AO，保留中部明度、节疤、钉头和绳索。全部新增绘制只在精灵初始化执行。
- 保留 80×104 缓存尺寸、unit=2、40×52 显示尺寸和原轮廓；无新粒子、滤镜、逐帧绘制、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-grain`；`index.html .edition` → `XI木`。
- CHANGELOG 顶部追加中文记录，README 近况和英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、报告及截图复制路径：`_v11grain-validation.json`、`_shot-v11grain.png`；保留 `_shot-v11.png` 与 v10 兼容产物路径。竖屏路径为 `_shot-v11grain-portrait.png` / `_shot-v11grain-small-portrait.png`。

## 保留范围

`game.js`、`styles.css`、`manifest.webmanifest` 与基线一致。玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制和 ≤4 声部逻辑未改。竖屏 notice +176px、HUD 和 ≥44px 触控规则未改；既有自测仍要求竖屏 HUD ≤168px、notice 间距 ≥8px。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器失败，退出码 1。
- `_v11grain-validation.json`：`ok:false`，缓存名正确；兼容报告 `_v10-validation.json`，日志 `_selftest-v11grain-run.log`。
- 真实 Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。
- 未生成本次 grain 截图，未覆盖 `_shot-v11.png`；历史截图不能作为本次视觉验收证据。
- 浏览器可用后运行 `node _selftest-v10.mjs` 补验横屏、竖屏、小竖屏、触控和安全区；板端木纹视觉效果、iOS Safari 实机、实际帧率与离线缓存更新尚未验证。

## 浏览器补跑（runner）
- session `01a1a72f-f31d-74c0-bdc2-191a05e9039c`
- see `_selftest-v11grain-run.log`
