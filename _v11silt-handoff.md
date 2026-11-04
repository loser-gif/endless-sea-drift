# XI淤 / v11-silt 交接

基线：`7ba2f34546b9400a9f58af8120e557464a10b8a4`。原地修改，未 commit / push。

## 修改

- `game.js`：仅将 resize 中原有浅水 pool 的中心与中段色标改为沙绿 `#aaa47745`、灰绿 `#648a7028`，保留透明青蓝外缘。低饱和淤色靠近木筏，向深水渐隐；原渐变位置、半径、缓存大小与绘制次数不变。
- 未新增逐帧工作、缓存画布、粒子、滤镜、依赖或构建步骤。沿用原海浪、焦点清晰区与昼夜／风暴覆盖。
- `sw.js` CACHE → `endless-sea-drift-v11-silt`；`index.html` edition → `XI淤`。
- CHANGELOG 中文条目前置；README 近况与 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、浏览器 edition 断言、截图及报告副本切换为 silt。浏览器成功时输出 `_shot-v11silt.png`、`_shot-v11.png` 及 silt 各场景图；本轮报告为 `_v11silt-validation.json`。

## 保留范围与预算

玩法数值、战斗、HP、AI、合成、存档 key、迁移与偏好均未修改。game.js 差异只有水面色标及两行注释；art.js、styles.css 未修改。30fps 与最多 4 声部保持原值；触控尺寸、竖屏 notice +176px、HUD 高度与 gap 规则保留。调色复用已有 resize 缓存，不增加每帧 draw call。

## 验证

- `node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过；浏览器启动失败，合计 69 项中 1 项失败，退出码 1。
- `_v11silt-validation.json`：`ok:false`。Chromium 报 `FATAL:content/browser/sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。运行日志：`_selftest-v11silt-run.log`。
- 没有生成本轮截图，既有 `_shot-v11.png` 未更新，不作为本轮视觉证据。自测兼容输出 `_v10-validation.json` 已恢复基线，保留 silt 的真实报告。
- 浏览器未进入页面，因此本轮没有实际验证触控 ≥44px、notice gap ≥8px、HUD 高度、昼夜／风暴下的淤色观感或实测帧率；iOS Safari 真机亦未实测。

## 后续复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`，检查 silt 截图中的木筏周围浅水过渡、昼夜／风暴与横竖屏布局；随后在 iOS Safari 真机复核。自测保留 notice +176px、gap ≥8px 与 HUD 140–151px 的浏览器断言。

## 浏览器补跑（runner）
- session `01a1a7f5-7277-7b22-b8fd-9a27366f520d`
- see `_selftest-v11silt-run.log`
