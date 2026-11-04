# XI窗 / v11-pane 交接

基线：`33c05979b3c8071e92553c7d22945743cb31c6cd`。原地编辑，未 commit / push。

## 变更

- `styles.css` 直接替换暂停卡片既有材质：单层青灰缎面、低亮黄铜边与细内框；减少原有阴影层数，不追加滤镜、动画或粒子。
- 音效按钮使用内嵌青灰面，静音时使用暖灰面与左侧细标记，保留原生按钮、开／关文字、aria-pressed 和焦点轮廓；去除按钮上方重复装饰线。音效按钮在启航、暂停与结算中统一呈现。
- 全部控件、尺寸、间距、滚动、安全区与 HUD 布局保持。竖屏 notice 最终偏移仍为 +176px，触控最小尺寸仍为 44px。
- CACHE → `endless-sea-drift-v11-pane`；edition → `XI窗`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、报告与截图副本路径切换为 pane。成功运行时生成 `_shot-v11pane.png` / `_shot-v11.png`、两种竖屏截图，以及三种视口的 `_shot-v11pane-pause-*.png`，便于检查本次音频面板。

## 保留项

`game.js`、`art.js` 与基线完全一致。玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好未改；30fps 配置与最多 4 声部逻辑保留，无新依赖或构建。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过；浏览器启动失败，退出码 1。
- `_v11pane-validation.json` 如实为 `ok:false`，兼容报告 `_v10-validation.json` 同步；完整日志 `_selftest-v11pane-run.log`。
- Chromium 错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮未生成截图，未复制历史图片冒充验证；既有 `_shot-v11.png` 为历史产物。
- 现有浏览器自测覆盖三种视口、触控 ≥44px、滚动可达、库存无裁切、竖屏 HUD ≤168px / notice gap ≥8px 及模拟安全区；本轮无法确认这些检查结果，也未验证 iOS Safari 实机表现与实际帧率。
- 在可用 Chromium 环境重跑 `node _selftest-v10.mjs` 可刷新报告与截图。

## 浏览器补跑（runner）
- session `01a1a75b-77ea-7a93-8ad0-61bd55ec671f`
- see `_selftest-v11pane-run.log`
