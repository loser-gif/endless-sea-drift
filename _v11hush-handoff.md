# XI静 / v11-hush 交接

基线：`a7c9afd60d49b3c4dea520f54695af199466909c`。原地修改，未 commit / push。

## 改动

- `styles.css`：替换原暂停卡片规则，使用细黄铜边、深青渐变与两层阴影；调整标题、摘要、主次按钮和页脚留白，横屏低高度及 320px 窄屏单独收紧内边距。仅作用于暂停视图。
- 保留继续漂流、音效切换、新的漂流 CTA、焦点样式、卡片滚动与安全区公式；主 CTA 最小高度 48px，次 CTA 44px，按钮间距 12px。
- `sw.js` CACHE → `endless-sea-drift-v11-hush`；`index.html` edition → `XI静`；CHANGELOG 已前置中文记录，README 近况已更新。
- `_selftest-v10.mjs` 的 cache、edition 断言和截图 / 报告路径已切到 hush，成功时复制 `_shot-v11hush.png` 与 `_shot-v11.png`，并输出三个尺寸的暂停截图。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器启动失败，退出码 1；`_v11hush-validation.json` 为 `ok:false`。
- Chromium 错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 未生成 `_shot-v11hush.png` 或 hush 暂停截图；现有 `_shot-v11.png` 为旧版产物，不能作为本次验收证据。
- 自测仍包含 844×390、390×844、320×568 的 CTA ≥44px / 滚动可达、按钮间距、安全区和竖屏 HUD 检查，但此次浏览器未运行，不能声称这些检查通过。实际 iOS Safari 亦未验证。

## 保留范围与后续

`game.js`、`art.js` 未修改；玩法数值、战斗 / HP / AI、合成、v10 存档键、迁移、v9 偏好、30fps 和 ≤4 声部逻辑均保留。无新依赖、构建、粒子、动画或滤镜。

竖屏 notice 的 +176px 与 HUD 规则未改；在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，确认 HUD 高度 140–151px、notice gap ≥8px，并查看暂停截图；随后用 iOS Safari 检查短横屏滚动和安全区。

## 浏览器补跑（runner）
- session `01a1a76b-d462-77e3-ab23-0052f79c6c25`
- see `_selftest-v11hush-run.log`
