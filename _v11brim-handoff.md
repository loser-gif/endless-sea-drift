# XI檐 / v11-brim 交接

- 基线：`176a5f98fdf0019eddd61487253def36e1d105d1`。已原地修改，未 commit / push。
- `styles.css`：HUD eyebrow 用 1px 黄铜亮线及 1px 暗接缝形成檐边，背景绘制不占布局空间；暂停按钮替换原有渐变、四向边色及单层内阴影，`:active` 反转斜边并压暗底面，形成金属按压反馈。沿用现有位移与减少动态效果规则，无新增动画、滤镜、粒子或依赖。
- 未调整字号、间距、边框宽度、按钮尺寸或 HUD 布局；44px 最小触控、竖屏 notice +176px 保留。现有浏览器自测继续要求 HUD 高 140–151px、公告间距≥8px，并覆盖普通 / 小竖屏和模拟安全区；本次未获得浏览器实测。
- `sw.js` CACHE → `endless-sea-drift-v11-brim`；`index.html` edition → `XI檐`；CHANGELOG 已前置中文短记，README 近况与 edition 已同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言及截图 / 报告副本全部改指 brim；主图输出 `_shot-v11brim.png` / `_shot-v11.png`，另有横竖屏暂停及竖屏游戏图。
- `game.js`、`art.js` 与基线完全一致；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 和最多 4 声部逻辑保持不变。

## 验证结果

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：退出码 1，68 项通过；浏览器启动失败，报告 `_v11brim-validation.json` 如实为 `ok:false`，兼容输出 `_v10-validation.json` 同步更新。运行日志 `_selftest-v11brim-run.log`。
- Chromium：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；未完成浏览器视觉、触控、布局、安全区检查，也未做 iOS Safari 真机检查。
- 本轮未生成新截图；已有 `_shot-v11.png` 为历史文件，不能作为本版证据。在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs` 可生成本版截图与完整结果。

## 改动文件

`styles.css`、`sw.js`、`index.html`、`_selftest-v10.mjs`、`CHANGELOG-v11.md`、`README.md`、本交接，以及本轮验证报告 / 日志。既有日志和其他未跟踪文件保留。

## 浏览器补跑（runner）
- session `01a1a764-d283-7023-bdff-9072ae508202`
- see `_selftest-v11brim-run.log`
