# XI昏 / v11-dusk2 交接

基线：`00af8c23c1b4660c1cef0071e3200a7b4db9a0a7`。原地修改，未 commit / push。

## 修改

- `art.js` 仅调整暮色罩染 RGB：`#b58e68 → #b79b7c`，减少赭色感，以柔沙金衔接 cusp 的柔金与暖象牙晨光。仍用原有 15% 单层罩染；像素位置、缓存、绘制次数及透明度不变。
- cusp 共享 brass/light 色板、白昼与晨光、夜色、风暴专属层均不变；无新增粒子、滤镜、依赖或构建。
- `sw.js` CACHE 为 `endless-sea-drift-v11-dusk2`；`index.html` edition 为 `XI昏`。CHANGELOG 前置中文记录，README 近况同步。
- `_selftest-v10.mjs` report.cache、edition 断言、所有版本截图与报告副本切换为 dusk2；成功时输出 `_shot-v11dusk2.png`、`_shot-v11.png` 及 dawn/midday/dusk 等场景图。

## 保留

`game.js`、`styles.css` 与基线一致。所有玩法数值、战斗、HP、AI、合成、存档键、迁移及偏好保持不变；30fps 与最多 4 声部实现未改。
触控尺寸与布局未改，竖屏 notice +176px 保留；既有浏览器断言覆盖触控 ≥44px、HUD 高度 140–151px、notice gap ≥8px、安全区与弹层滚动。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1；`_v11dusk2-validation.json` 为真实 `ok:false`。日志 `_selftest-v11dusk2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41`，`shutdown: Operation not permitted (1)`；调试端点不可用，浏览器检查未执行。
- 本轮未生成 dusk2 截图；现有 `_shot-v11.png` 为历史文件，未更新、不作为本轮证据。自测兼容输出 `_v10-validation.json` 已恢复基线，专属 dusk2 报告保留。

## 待复核

在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，检查 dusk 与 dawn 截图、触控及竖屏 HUD/notice 间距，再用 iOS Safari 真机检查视觉与帧率。本轮仅完成源码与非浏览器验证，未声称浏览器或真机通过。

## 浏览器补跑（runner）
- session `01a1a811-5cc3-7e10-9905-ff73a9fd710e`
- see `_selftest-v11dusk2-run.log`
