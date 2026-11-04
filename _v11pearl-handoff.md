# XI珠光 / v11-pearl 交接

基线：`90d4af92257de92b01d17760c8f55e9ae5730d0c`。原地编辑，未 commit / push。

## 改动

- `styles.css`：原位细化空弹药徽标的暖赭色底面、斜边与薄高光；保留警告文字 `#ffd0b1`、左侧提示线 `#e0a17d` 及空弹药冷却条色相。沿用一层渐变与三道内阴影，不增加动画、滤镜、粒子、依赖或绘制层。
- CACHE → `endless-sea-drift-v11-pearl`；edition → `XI珠光`；CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言与本版截图／报告路径。浏览器可用时输出 `_shot-v11pearl.png`、`_shot-v11.png` 和横竖屏等截图；报告副本为 `_v11pearl-validation.json`。
- `game.js`、`art.js` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好及 30fps / ≤4 声部逻辑不变。CSS 不改尺寸或布局，保留触控 ≥44px 的既有规则与竖屏 notice +176px。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1，报告 `ok:false`。详见 `_v11pearl-validation.json`、`_selftest-v11pearl-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用。未生成 `_shot-v11pearl.png`；已有 `_shot-v11.png` 是历史产物，不能作为本版验证证据。
- 浏览器可启动时重跑同一自测，检查 844×390、390×844、320×568 及安全区；既有断言覆盖触控 ≥44px、竖屏 notice gap ≥8px、HUD 高度 140–151px、notice offset 176px。
- 待补浏览器视觉与 iOS Safari 实机验收：空弹药暖赭底面与装填状态保持可辨，警告色清楚；新 edition 不挤压小屏 HUD；昼夜下保留克制的 HD-2D B 档表现。当前未声称浏览器布局或实机性能通过。

## 浏览器补跑（runner）
- session `01a1a7da-82e1-79b1-96a6-e39c43a667e4`
- see `_selftest-v11pearl-run.log`
