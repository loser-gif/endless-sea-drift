# XI敌 / v11-thrall 交接

基线：`c3054e3e20a7df2ef0b3184bd4f0fceb52ea3947`。原地修改，未 commit / push。

## 改动

- `art.js`：仅敌方基础精灵及 gnaw / flank / spit / tideking 类型的高光色值调整。背缘、鳍缘、鳞片亮点、牙齿及冠缘改为较暗的象牙、海灰与柔金，保留眼部辨识点、冷色体积阴影与轮廓。沿用原像素坐标、尺寸、精灵单位、缓存及绘制次数；无新增依赖、滤镜、粒子或光效层。
- 基础 monster 仍为 128×80 缓存（unit=2）；敌方类型仍为 64×40，潮汐王绘制比例仍为 1.75。运行时夜间王者轮廓光、阶段染色与提示逻辑未改。
- CACHE 已改为 `endless-sea-drift-v11-thrall`；edition 为 `XI敌`。CHANGELOG 前置中文记录，README 近况已更新。
- `_selftest-v10.mjs` 的 report.cache、验证副本、截图副本及临时 profile 标签切换为 thrall；主截图目标 `_shot-v11thrall.png`，保留 `_shot-v11.png` 副本。
- `game.js`、`styles.css` 未改，全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好保持原样。44px 触控、竖屏 notice +176px、30fps / ≤4 声部逻辑保持原样。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。报告 `_v11thrall-validation.json` 为 `ok:false`；日志 `_selftest-v11thrall-run.log`。脚本同时更新其既有 `_v10-validation.json` 输出。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 本轮未生成 thrall 截图；现有 `_shot-v11.png` 为历史文件，没有用旧图冒充本版。

## 待复核

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成 `_shot-v11thrall.png` / `_shot-v11.png` 及其天气、横竖屏副本，复核敌方边光克制度与辨识度。既有浏览器断言覆盖 844×390、390×844、320×568 的触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px、安全区及弹层滚动。本轮未实测视觉、浏览器布局或 iOS Safari 实机帧率。

## 浏览器补跑（runner）
- session `01a1a7c3-66fc-76c2-9fed-92e791869f5e`
- see `_selftest-v11thrall-run.log`
