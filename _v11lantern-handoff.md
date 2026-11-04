# XI灯 / v11-lantern 交接

基线：`a86306c6d893402718bda97f4d24caaa4602631c`。原地修改，未 commit / push。

## 修改

- `art.js`：灯笼现有黄铜上沿、左边与下沿调整色值 / alpha，玻璃及灯芯减弱透明度，保留 ember 琥珀暖色。探照灯沿用同色黄铜上沿，在现有精灵内增加一条 2px 左边框，灯芯 alpha 从 e6 / d9 收敛至 d9 / cc。
- 夜间有灯时，现有甲板 halo 的 globalAlpha 从 .58 降至 .48；位置、范围、渐变色、夜色 wash 与暗角不变。炉火、雾灯船光晕不变。
- 边框在初始化缓存中绘制，缓存数量、尺寸与逐帧 draw call 不变；无新粒子、滤镜、依赖、构建或动画。
- `sw.js` CACHE → `endless-sea-drift-v11-lantern`；`index.html .edition` → `XI灯`。CHANGELOG 顶部中文条目及 README 近况同步。
- `_selftest-v10.mjs` report.cache、截图与验证副本改为 lantern；保留 `_shot-v11.png` 和 v10 兼容产物。浏览器成功后输出 `_shot-v11lantern.png`、`_shot-v11.png`，以及 lantern 的 portrait / small-portrait 截图。

## 保留范围

`game.js`、`styles.css`、`manifest.webmanifest` 相对基线无改动。所有玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 设置、最多四声部保持原样。触控 ≥44px 与竖屏 notice +176px 规则保留，自测仍要求竖屏 HUD ≤168px、notice 间距 ≥8px。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器失败，退出码 1。Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；CDP 端点不可用。
- `_v11lantern-validation.json` 明确 `ok:false`；兼容报告 `_v10-validation.json`，完整日志 `_selftest-v11lantern-run.log`。未以 VM 自测冒充浏览器通过。
- 本次未生成 lantern 截图，也未覆盖 `_shot-v11.png`。已有截图属于旧版本，不代表本版视觉验收。
- 可启动 Chromium 的环境中重跑 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 下黄铜边框、灯芯与甲板暖光，以及 HUD / notice 间距和 ≥44px 触控。iOS Safari 实机、实际 30fps、离线缓存升级及本版视觉效果尚未验证。

## 浏览器补跑（runner）
- session `01a1a74c-7fc0-70d1-a70f-390f9895585e`
- see `_selftest-v11lantern-run.log`
