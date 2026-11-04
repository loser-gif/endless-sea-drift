# XI港 / v11-port2 交接

- 基线：`27802e6ff206648a4c58ced13ad60020c1a3eb96`。原地修改，未 commit / push。
- 在既有竖屏 CSS 块内减少航程、弹药与背包留白合计 8px；字号、信息、44px 暂停按钮、生命读数及进度条尺寸不变。基线报告高度 159px / 公告间距 17px；预期变为 151px / 25px，**本次未获浏览器实测**。
- notice 继续采用 `calc(max(12px, env(safe-area-inset-top)) + 176px)`。自测要求普通及小竖屏 HUD 高 140–151px、公告间距≥8px、偏移恰为176px，并覆盖模拟安全区；原有触控≥44px检查保留。
- `sw.js` CACHE → `endless-sea-drift-v11-port2`；`index.html` edition → `XI港`；已更新 CHANGELOG 顶部和 README 近况。
- `game.js`、`art.js` 未修改；玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与音频声部限制保持原样。无新增依赖、构建、动画、粒子、滤镜或阴影。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- `node _selftest-v10.mjs` 已执行：68 项通过；浏览器启动失败，退出码 1，`_v11port2-validation.json` 如实记录 `ok:false`。
- Chromium 错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`。不是浏览器测试通过；本环境不能完成视觉、触控和安全区验证，亦未做 iOS Safari 真机验证。
- 自测截图输出已指向 `_shot-v11port2.png` / `_shot-v11.png`，另有竖屏及暂停图；此次启动失败，未生成新截图。已有 `_shot-v11.png` 是历史产物，不作为本次验证证据。
- 在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs` 可生成本版截图与完整报告；iOS Safari 真机布局仍待确认。

## 文件

`styles.css`、`sw.js`、`index.html`、`_selftest-v10.mjs`、`CHANGELOG-v11.md`、`README.md`；报告 `_v11port2-validation.json`（自测亦更新兼容输出 `_v10-validation.json`）。保留工作区原有日志及其他未跟踪文件。

## 浏览器补跑（runner）
- session `01a1a761-90fa-7cd2-84c1-9c042222a316`
- see `_selftest-v11port2-run.log`
