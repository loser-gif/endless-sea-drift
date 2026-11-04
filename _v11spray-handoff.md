# XI沫2 / v11-spray 交接

基线：`9d56cdf12755d38c9acafd86c1e55e1104211941`。原地修改，未 commit / push。

## 修改

- `game.js`：既有船首浪花 3×1 尖端由 `#e4e1ca` 调为暖象牙 `#eee3ca`；共用 waterRing 从 RGB 185/211/202 调至 195/211/199，与 art 的灰绿泡沫、象牙浪尖色系衔接。仅两处颜色及注释变化，`art.js` 不变。
- 不增加绘制次数、粒子、渐变、滤镜、依赖或构建；保留浪花数量、尺寸、相位、透明度与 reduced-motion 行为。
- CACHE → `endless-sea-drift-v11-spray`；edition → `XI沫2`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、截图及验证报告路径；浏览器成功时输出 `_shot-v11spray.png`、`_shot-v11.png` 及 spray 场景截图。

## 保留

尾流上限 3 条、寿命 0.9 秒、生成间隔 0.3 秒及打捞共用预算不变。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 目标及 ≤4 声部实现保持不变。`styles.css` 不变，保留触控尺寸与竖屏 notice +176px。

## 验证

- `node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，浏览器启动失败，退出码 1。包括尾流上限、寿命、打捞及减少动态效果检查通过。
- `_v11spray-validation.json` 如实 `ok:false`；Chromium 调试端点不可用，启动报 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。完整日志：`_selftest-v11spray-run.log`。
- 未生成本轮截图，未复制旧图冒充；历史 `_shot-v11.png` 保持不变。共享 `_v10-validation.json` 已恢复基线，保留 spray 专属报告。

## 待复核

在能启动 Chromium 的环境运行 `node _selftest-v10.mjs`，检查横屏及 390px / 320px 竖屏、模拟安全区、昼夜与风雨中的暖色浪尖。现有浏览器断言保留触控 ≥44px、HUD 高度 140–151px、notice gap ≥8px 和 +176px 偏移，本轮未能执行。iOS Safari 实机视觉、触控及持续 30fps 未验证。

## 浏览器补跑（runner）
- session `01a1a83a-7ffd-7f83-88e9-838b29d3317c`
- see `_selftest-v11spray-run.log`
