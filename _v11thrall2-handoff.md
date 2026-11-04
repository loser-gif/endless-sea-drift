# XI敌2 / v11-thrall2 交接

基线：`22654850baa2b8ca990a939792d5f2b5b713c246`。原地修改，未 commit / push。

## 改动

- 沿用 v11-thrall 的敌方精灵范围：`art.js` 基础 monster 与 gnaw / flank / spit / tideking。背缘、鳍缘、齿缘和冠沿亮度进一步收敛；保留眼部亮点、类型色、暗部与鳞片层次。
- 只替换 14 个局部色值及一条注释，例如背缘 `#b9b99b → #acae96`、齿缘 `#c9c3a4 → #bbb59c`、冠沿 `#c9bd9d → #b9ae95`。没有改变共享调色板或其他船只；保持精灵尺寸、单位、坐标、绘制次数与缓存预算，不新增粒子、滤镜、依赖或构建步骤。
- CACHE 为 `endless-sea-drift-v11-thrall2`；edition 为 `XI敌2`；CHANGELOG 前置中文记录，README 近况及版本更新。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本轮截图路径和 `_v11thrall2-validation.json`；成功时复制主图至 `_shot-v11thrall2.png` / `_shot-v11.png`。
- `game.js`、`styles.css` 与 HEAD 一致；全部玩法数字、战斗、HP、AI、合成、存档键、迁移、偏好保持不变。30fps / ≤4 声部逻辑、≥44px 触控、竖屏 notice +176px 与 HUD 布局未改。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。去除注释并归一化十六进制色值后，art.js 与 HEAD 完全一致，确认绘制操作和几何无变动。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；退出码 1，报告 `_v11thrall2-validation.json` 为 `ok:false`，日志 `_selftest-v11thrall2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器结果。
- 本轮未生成 `_shot-v11thrall2.png`；既有 `_shot-v11.png` 未覆盖，为历史截图，不代表本版视觉验证。

## 复测

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成本轮主图及昼夜、风暴、竖屏、安全区截图。复核敌方边光克制度及眼部、类型识别色的可读性。

既有浏览器断言覆盖 844×390、390×844、320×568、触控 ≥44px、竖屏 HUD 高 140–151px、notice gap ≥8px / offset +176px、安全区和弹层滚动。本轮未执行成功这些浏览器断言，未实测 iOS Safari 帧率；30fps 是保留的实现目标。

## 浏览器补跑（runner）
- session `01a1a8c9-211f-7643-8a2a-ed46a083ab56`
- see `_selftest-v11thrall2-run.log`
