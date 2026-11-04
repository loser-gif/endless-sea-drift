# XI静2 / v11-hush2 交接

基线：`e5836a61826a5141ef7de5bbdf4844a9f101294b`。已原地修改，未 commit / push。

## 改动

- `styles.css` 直接修改已有 pause 专用规则：渐变改为青灰纯色，收暗边框，双层阴影减为单层，标题分隔线透明化，摘要分隔线减弱，主 CTA 去内高光。
- 保留 CTA 暖色底面、文案、事件、焦点样式；继续按钮 min-height 48px，次按钮原有 ≥44px 及 12px 间隔不变。卡片尺寸、滚动、安全区与媒体查询不变。
- `sw.js` CACHE 为 `endless-sea-drift-v11-hush2`；`index.html` edition 为 `XI静2`；更新 CHANGELOG 与 README 近况。
- `_selftest-v10.mjs` 更新 cache、edition 断言与本轮截图/报告路径；成功时输出 `_shot-v11hush2.png`、`_shot-v11.png` 及各方向截图。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；浏览器启动失败，进程退出 1，报告 `ok:false`。
- Chromium 报错：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用。
- 本轮未生成新截图，未将旧截图当作本轮证据；既有 `_shot-v11.png` 不代表 hush2。报告：`_v11hush2-validation.json`；日志：`_selftest-v11hush2-run.log`。
- 浏览器恢复后运行同一自测，确认 844×390、390×844、320×568 的 CTA 可滚动到达、触控 ≥44px、按钮间距 ≥8px，以及竖屏 HUD 高 140–151px、notice 偏移 +176px / 间距 ≥8px。iOS Safari 实机未验证。

## 保留范围

`game.js`、`art.js` 无改动；全部玩法数值、战斗、HP/AI、合成、存档键/格式、迁移、偏好、30fps 和 ≤4 声部实现保留。HUD 与 notice 样式未修改。无新增依赖、构建、动画、粒子或滤镜。

## 浏览器补跑（runner）
- session `01a1a89a-f739-7531-a8c4-016baa53ed7a`
- see `_selftest-v11hush2-run.log`
