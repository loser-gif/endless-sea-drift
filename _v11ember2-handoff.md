# XI烬 / v11-ember2 交接

基线：`2489800cd974bf6c50f0bc7351b019a7c44af8e6`。原地编辑，未 commit / push。

## 修改

- `art.js`：仅收敛灶台缓存精灵的两级炉火 alpha。暖橙余烬 `#d5884de6 → #d5884dcc`（约 90% → 80%）；亮炉芯 `#ffe1a0d9 → #ffe1a0c7`（约 85% → 78%）。RGB、矩形位置、尺寸、绘制次数保持不变，保留亮炉芯与炉膛暖意；灯芯、夜间灯晕、洗色、暗角均不改。
- 无新增逐帧效果、粒子、滤镜、依赖或构建步骤。
- CACHE → `endless-sea-drift-v11-ember2`；edition → `XI烬`。CHANGELOG 前置中文短记录，README 近况与版本同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图与报告复制路径同步 ember2；成功时生成 `_shot-v11ember2.png` / `_shot-v11.png` 及场景截图。

## 保留

`game.js`、`styles.css` 未改：全部玩法数值、战斗、HP、AI、合成、存档键、迁移与偏好保持基线。30fps 配置及 ≤4 声部预算不变。

竖屏 notice +176px 保持不变；保留自测中触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px 的真实浏览器断言。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器启动失败，退出码 1。
- `_v11ember2-validation.json` 如实为 `ok:false`；错误：Chromium 调试端点不可用，`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。日志 `_selftest-v11ember2-run.log`。
- 本轮未生成 `_shot-v11ember2.png`，未用旧图冒充；既有 `_shot-v11.png` 未改。自测兼容输出 `_v10-validation.json` 已恢复基线，ember2 专属报告保留。

## 待复核

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，检查昼夜、暴雨下炉芯是否仍可辨且余烬更克制，以及 844×390、390×844、320×568 与模拟安全区布局。浏览器截图、实际视觉、触控布局与 iOS Safari 真机帧率尚未验证；保留配置不代表性能实测。

## 浏览器补跑（runner）
- session `01a1a87e-eb98-7bb2-b8d0-af2cef0968de`
- see `_selftest-v11ember2-run.log`
