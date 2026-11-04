# XI栏2 / v11-rail2 交接

基线：`8ccd0c27e76c80814310aefa2e419af09db608c1`。原地编辑，未 commit / push。

## 修改

- `styles.css`：直接修改现有 `#overlay .card`，上/左黄铜边略提暖亮，右/下边略收暗；既有 1px 顶光改为低透明暖铜色，微调底部暗缝和 6px 内框透明度。保留 Silk 背景渐变、外投影、全部阴影层数与尺寸；死亡回顾 Slate 覆盖规则保持原样。
- 无新增滤镜、动画、粒子、依赖或构建。去除注释并归一化颜色后，CSS 与基线一致；布局、触控、滚动与安全区规则未改变。
- `sw.js` CACHE → `endless-sea-drift-v11-rail2`；`index.html .edition` → `XI栏2`。CHANGELOG 前置中文短记，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图及报告路径；浏览器成功时输出 `_shot-v11rail2.png`、`_shot-v11.png` 和分场景截图。

## 保留与验证

- `game.js`、`art.js` 与 HEAD 逐字节一致；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部逻辑未改。
- 触控 ≥44px、竖屏 notice +176px 保持；自测仍检查 HUD 高度 140–151px、通知间距 ≥8px 及安全区。
- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器项失败，退出码 1。`_v11rail2-validation.json` 为 `ok:false`，日志 `_selftest-v11rail2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。未生成本版截图，既有 `_shot-v11.png` 未覆盖，不代表本次视觉验收；兼容报告 `_v10-validation.json` 已恢复基线。

## 待实测

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，补验横屏 844×390、竖屏 390×844 / 320×568、卡片倒角视觉、HUD/通知间距、触控及安全区。iOS Safari 实机、实际 30fps 与离线更新尚未验证，代码预算不变不代表实测通过。

## 浏览器补跑（runner）
- session `01a1a895-2a52-7633-ac60-f887da7d1271`
- see `_selftest-v11rail2-run.log`
