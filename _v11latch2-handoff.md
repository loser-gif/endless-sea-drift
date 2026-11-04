# XI闩2 / v11-latch2 交接

基线 HEAD：`baee8c91e5e109559fea918c155d9adf2f76ca89`。原地修改，未 commit / push。

## 改动

- `styles.css`：直接微调原 XI闩规则。普通按钮收敛为冷色缎面，主按钮压低黄铜亮边；按压时反转边框明暗、加深上沿凹影，选中按钮保留左侧黄铜条。覆盖动作按钮、启航/继续按钮、新的漂流按钮的对应状态。
- 未改变选择器、尺寸、内外边距、边框宽度、字体、位移或触控规则；阴影与渐变层数不变，无新增动画、滤镜、粒子、依赖或构建。暂停与静音按钮沿用原样式。
- CACHE → `endless-sea-drift-v11-latch2`；edition → `XI闩2`；CHANGELOG 中文条目前置，README 近况一行更新。
- `_selftest-v10.mjs`：cache、edition 断言、截图和报告路径切换为 latch2。成功时生成 `_shot-v11latch2.png` / `_shot-v11.png` 及各场景截图；报告 `_v11latch2-validation.json`，保留原 v10 公用产物路径。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器运行检查失败，退出码 1；报告 `ok:false`。日志 `_selftest-v11latch2-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，CDP 调试端点不可用。未伪造通过或截图。
- 本次未生成 `_shot-v11latch2.png`；现有 `_shot-v11.png` 是旧产物，不作为本次验收证据。

## 保留与待验收

`game.js`、`art.js` 相对基线无修改。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流与 ≤4 声部逻辑不变。CSS 触控 ≥44px、竖屏 notice +176px 及 HUD 几何规则保留。

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，验收 844×390、390×844、320×568 的普通 / 主按钮 / 选中按钮按压与释放、禁用态和减少动态效果；现有自测包含 HUD 高度 140–151px、notice gap ≥8px、安全区和触控检查，但本次未执行到浏览器断言。真实画面、帧率实测与 iOS Safari 验证尚未完成。

## 浏览器补跑（runner）
- session `01a1a8ba-7b82-7800-845b-b83c2bd49be4`
- see `_selftest-v11latch2-run.log`
