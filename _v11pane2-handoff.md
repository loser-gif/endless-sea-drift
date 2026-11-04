# XI窗2 / v11-pane2 交接

基线：`38c31fd64451b37dd89c8edaf5bdd0325f76da23`。原地修改，未 commit / push。

## 修改

- `styles.css`：直接修改既有音频样式。顶部音频提示牌采用平整青灰底与低亮单色细边，移除渐变、文字阴影和内高光；音效开关的通用开／关样式移除渐变与内阴影，保留文字状态、焦点和按压反馈。暂停页既有专用样式保留。
- 不改尺寸、间距、位置、滚动、安全区和交互规则；保留全部控件及 ≥44px 触控目标。竖屏 notice +176px、gap ≥8px 与 HUD 高度规则原样保留。
- `sw.js` CACHE → `endless-sea-drift-v11-pane2`；`index.html` edition → `XI窗2`；CHANGELOG 前置中文记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 的 cache、edition 断言及截图／报告副本路径同步为 pane2；浏览器成功时输出 `_shot-v11pane2.png` 与 `_shot-v11.png`，附带各方向和场景截图。

## 保留

`game.js`、`art.js`、manifest 均未改。全部玩法数值、战斗、HP、AI、合成、存档键、迁移及偏好保持不变；30fps 调度与 ≤4 声部上限不变。无新增依赖、构建、粒子、滤镜或动画。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；browser-runtime 失败，退出码 1。`_v11pane2-validation.json` 明确 `ok:false`，兼容报告 `_v10-validation.json` 同步更新；日志 `_selftest-v11pane2-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用；未伪报浏览器成功。
- 本轮未生成 pane2 截图，既有 `_shot-v11.png` 未覆盖，不能作为本轮视觉证据。
- 待可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，复核 844×390、390×844、320×568、安全区、全部控件可达性与 ≥44px 目标、HUD 高度 140–151px、notice 偏移 176px 与间距 ≥8px。浏览器视觉、iOS Safari 实机及实际 30fps 尚未验证。

## 浏览器补跑（runner）
- session `01a1a8af-22c6-77d2-8064-f26ff101fcfa`
- see `_selftest-v11pane2-run.log`
