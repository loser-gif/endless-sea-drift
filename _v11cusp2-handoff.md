# XI曙2 / v11-cusp2 交接

基线：`d4a6ff2090fcf66c867baa4d17771bec7785df15`。原地修改，未 commit / push。

## 改动

- `art.js` 共享晨曦轮廓色：brass `#ddbe91 → #d8b996`，light `#f6e2bd → #f1dfc2`。柔金略降饱和度、象牙亮边稍收敛；沿用现有缓存精灵像素，保持暖边光与冷海面的层次。
- 黎明罩染、冷色阴影、水面、黄昏、夜色与风暴逻辑不变。共享色同时影响其他时段的精灵；没有新增天气阶段、粒子、滤镜、绘制层或依赖。
- `sw.js` CACHE 为 `endless-sea-drift-v11-cusp2`；`index.html` edition 为 `XI曙2`；CHANGELOG 前置中文记录，README 近况更新。
- `_selftest-v10.mjs` 同步 cache、edition 断言与全部本轮截图/报告路径；保留 `_shot-v11.png` 通用副本和既有 `_v10-validation.json` 报告输出。
- `game.js`、`styles.css` 与 HEAD 完全一致。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好均未改；30fps / ≤4 声部、触控 ≥44px、竖屏 notice +176px 与 HUD 几何保持原实现。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1；`_v11cusp2-validation.json` 为 `ok:false`，日志 `_selftest-v11cusp2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用，未获得浏览器验证结果。
- 未生成本版 `_shot-v11cusp2.png` 或 dawn / midday / dusk 等截图；既有 `_shot-v11.png` 是历史文件，本轮未覆盖，不能视为本版证据。已查看基线 dawn 截图用于确定配色方向，本版视觉效果仍需浏览器复核。

## 复测入口

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`。成功后生成 `_shot-v11cusp2.png` / `_shot-v11.png` 和 `_shot-v11cusp2-dawn.png` 等状态图。检查晨曦暖边光是否克制，并复核夜间及暴风雨可读性。

既有浏览器断言覆盖 844×390、390×844、320×568、≥44px 触控、竖屏 HUD 高 140–151px、notice gap ≥8px / offset +176px、安全区与弹层滚动。当前环境未实测这些布局断言，也未测 iOS Safari 实机性能；30fps 为保留的实现目标，并非本轮测量结果。

## 浏览器补跑（runner）
- session `01a1a8c5-d521-7063-bfb5-af9453f0eda8`
- see `_selftest-v11cusp2-run.log`
