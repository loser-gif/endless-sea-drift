# XI库2 / v11-vault2 交接

基线：`388c570dc95d14f59da01685d0c9e8c296d427c2`。原地修改，未 commit / push。

## 修改

- `styles.css`：直接调整既有背包物品格渐变、四边倒角颜色及两道内阴影透明度。普通材料边缘降亮，绳／钉所在后段保留次级暖边，弹药与炖菜保留更暖的面色，炖菜层级最高；数量、缺货文字样式不变。无新增效果层、粒子、滤镜或动画。
- 物品格为只读 span，原有紧凑尺寸、网格及文字保持不变；所有交互控件 ≥44px 规则、竖屏 notice +176px、HUD 高度及间距规则原样保留。
- `sw.js` CACHE → `endless-sea-drift-v11-vault2`；`index.html` edition → `XI库2`；CHANGELOG 前置中文记录、README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 cache、edition 断言及全部截图／报告副本路径同步为 vault2。浏览器成功时输出 `_shot-v11vault2.png`、`_shot-v11.png` 及各方向／场景截图。

## 保留

`game.js`、`art.js` 与 manifest 未改。全部玩法数值、战斗、HP、AI、合成、存档键、迁移与偏好未改；30fps 调度及 ≤4 声部上限未改。无新依赖或构建。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；browser-runtime 失败，退出码 1。`_v11vault2-validation.json` 明确 `ok:false`，兼容报告 `_v10-validation.json` 同步；完整日志 `_selftest-v11vault2-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用，未伪报成功。
- 本轮未生成 vault2 截图；既有 `_shot-v11.png` 未覆盖，不能作为本轮证据。
- 待 Chromium 可启动时重跑 `node _selftest-v10.mjs`：复核 844×390、390×844、320×568、模拟安全区、≥44px 控件、物品文字无裁切、竖屏 HUD 140–151px、notice 偏移 176px 及 gap≥8px。浏览器视觉、iOS Safari 实机与实际 30fps 尚未验证。

## 浏览器补跑（runner）
- session `01a1a8b1-f7c7-7ae1-b0e5-048504c15a8a`
- see `_selftest-v11vault2-run.log`
