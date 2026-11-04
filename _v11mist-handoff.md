# XI雾 / v11-mist 交接

基线：`bdaef147270a2d0f45a5b790f97a9224022e69eb`。原地修改，未 commit / push。

## 修改

- 美术仅涉及 `art.js`：resize 时缓存一条 1×128 透明渐变，顶部浅灰青雾（最高 alpha 36/255）、中段冷色海深，在 `focus-.20` 处淡出。每帧在海面细节之后、世界实体之前增加一次 drawImage；无新增粒子、滤镜、动画循环、依赖或构建。
- 保留已有暖光、暗角、雨线、泛光和景深参数；实体不被新雾层覆盖。昼夜与风暴仍由已有后续色调处理。
- `sw.js` CACHE → `endless-sea-drift-v11-mist`；`index.html .edition` → `XI雾`。
- CHANGELOG 顶部追加中文记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` report.cache、报告复制和截图复制路径改为 mist：`_v11mist-validation.json`、`_shot-v11mist.png`、竖屏 `_shot-v11mist-portrait.png` / `_shot-v11mist-small-portrait.png`；保留 `_shot-v11.png` 与 v10 兼容产物路径。

## 保留范围

`game.js`、`styles.css`、`manifest.webmanifest` 与基线一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制、≤4 声部逻辑不变。竖屏 notice +176px 覆盖、HUD 尺寸、≥44px 触控和安全区规则未改；既有自测仍要求竖屏 HUD ≤168px、notice 间距 ≥8px。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器失败，退出码 1。
- `_v11mist-validation.json`：`ok:false`，缓存名正确。兼容报告为 `_v10-validation.json`；日志为 `_selftest-v11mist-run.log`。
- Chromium 真实启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 未生成本次 mist 截图，未覆盖 `_shot-v11.png`；历史截图不能作为本次验收证据。
- 浏览器可用后重新运行 `node _selftest-v10.mjs`，检查横屏 / 竖屏 / 小竖屏截图、HUD 与 notice 间距、触控、安全区及 CTA 可达性。薄雾视觉、iOS Safari 实机、实际帧率与离线缓存更新仍待验证，不宣称通过。

## 浏览器补跑（runner）
- session `01a1a72c-af13-73f0-9ca8-85f1fe90979a`
- see `_selftest-v11mist-run.log`
