# XI☀ / v11-dawn 交接

## 已完成
- 基线 main `acf5b71`（v11-frame）；原地修改，未 commit / push。
- CACHE `endless-sea-drift-v11-dawn`；edition `XI☀`。README 近况、CHANGELOG-v11 首条与 selftest 输出名称已更新。
- `art.js`：暮色洗色由橙棕改为低饱和琥珀 `#b68a58`，alpha .17 → .15；夜间洗色与缓存暗角统一 `#202e38` 灰青，原透明度保留；风暴洗色 `#192d35`，雨线 `#bdcfc4`，透明度不变。
- `game.js` 仅三处缓存绘制颜色：海面渐变底端 `#102630`、原有侧光暗角的灰青色阶、雾灯船 tint `#98bcbf`（仍 .40）。日间青绿中段、暖色左肩、灯光与所有逻辑保持原样。

## 保留与删减
- 已有岛屿 / 沉船 / 商船的黄铜上左边缘无需重复加亮；木筏湿边未再加深，所有 sprite 尺寸不变。
- CSS 完全未改：已有 notice 暖白文字、深底与黄铜边保留；竖屏 notice +215px、HUD 尺寸、44px 触控与安全区规则保持原样。
- 无新增绘制层、bloom、滤镜、实体、粒子、依赖。155 浪纹 / 18 泡沫 / 32 焦散（每组 13）/ 75 反光 / 52 雨线循环不变。
- reduced-motion 的传入时间冻结保持不变；玩法、战斗数值、存档版本 / 迁移 / 偏好完全未改。

## 验证
- `node --check art.js`、`game.js`、`sw.js`、`_selftest-v10.mjs`：全部通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，包括绘制 smoke、扩展木板清晰遮罩、reduced-motion 时间冻结及玩法 / 存档回归。
- 浏览器失败，退出码 1；`_v11dawn-validation.json` 如实记录 `ok:false`。Chromium 报错：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点未启动。环境禁止权限升级。
- 未生成 `_shot-v11dawn.png`。已有截图均非本版证据；本轮未完成昼 / 暮 / 夜 / 风暴视觉确认，也未实测横屏 / 竖屏 / 短竖屏的 HUD 净空。未凭代码检查宣称视觉通过。
- 浏览器可用后重跑 `node _selftest-v10.mjs`，将生成 `_shot-v11dawn.png`（夜间 showcase）与兼容 `_shot-v10.png` / `_shot-v11.png`，并执行现有三种视口、触控、滚动、安全区检查。完整昼暮夜风暴观感仍需人工确认。
- 自测兼容输出 `_v10-validation.json` 同步更新；本轮日志 `_selftest-v11dawn-run.log`。

## 浏览器补跑（executor）
- `node _selftest-v10.mjs` → ok:true；`_shot-v11dawn.png`。
- Codex session `01a1a70d-83c2-7603-adcb-03e1c8a7adf2`。
