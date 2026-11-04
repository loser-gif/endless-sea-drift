# XI尾 / v11-wake2 交接

基线：`e75e6ed363f2668608088a06673a37179e0ce514`。原地修改，未 commit / push。

## 修改

- `game.js`：既有船尾泡沫 3×1 尖端从 Spray 暖象牙 `#eee3ca` 改为低饱和冷青白 `#d5e6df`，与灰绿泡沫主体、青灰湿沿衔接。运行代码仅替换此颜色；`art.js` 与共用 waterRing 不变。
- 保留原有三组浪花、尺寸、相位、透明度、风雨响应与 reduced-motion 行为；没有增加绘制次数、粒子、渐变、滤镜、逐帧分配或依赖。
- CACHE → `endless-sea-drift-v11-wake2`；edition → `XI尾`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、截图及验证报告路径；浏览器成功时输出 `_shot-v11wake2.png`、`_shot-v11.png` 及 wake2 场景截图。

## 保留

全部玩法数值、战斗、HP、AI、合成、存档键、迁移与偏好不变。尾流上限 3 条、寿命 0.9 秒、生成间隔 0.3 秒及打捞共用预算不变。30fps 目标与 ≤4 声部实现不变。

`styles.css` 未改，保留 ≥44px 触控及竖屏 notice +176px；浏览器断言仍要求 gap ≥8px、HUD 高度 140–151px。

## 验证

- `node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过（含尾流、战斗、存档迁移、音频预算及 30fps 配置），退出码 1。
- `_v11wake2-validation.json` 如实 `ok:false`：Chromium 启动失败，调试端点不可用，`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。日志：`_selftest-v11wake2-run.log`。
- 本轮未生成截图，也未将历史截图改名。既有 `_shot-v11.png` 未改；共享 `_v10-validation.json` 恢复基线，保留 wake2 专属报告。

## 待复核

在能启动 Chromium 的环境执行 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 及模拟安全区、昼夜/风雨中的泡沫冷色尖端。浏览器布局、视觉效果及 iOS Safari 实机触控与持续 30fps 本轮未验证；配置预算通过不代表实测帧率。

## 浏览器补跑（runner）
- session `01a1a875-f141-7a33-8c3e-cc1b2d8dbca4`
- see `_selftest-v11wake2-run.log`
