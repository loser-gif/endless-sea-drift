# XI雾2 / v11-mist2 交接

基线：`a7560941eadae0b871f49a3116fd86aa48a8b310`。原地编辑，未 commit / push。

## 修改

- `art.js` 仅调整既有 seaMist 缓存渐变的四个 alpha：顶部 `28→26`、22% 处 `2a→26`、46% 处 `1c→18`、70% 处 `10→0c`（十六进制）。收平顶部峰值、减淡中下段，保留原色相与末端全透明。
- 缓存尺寸、色标位置、远岛轮廓与雾层范围不变；仍在世界精灵之前绘制，焦点水域不增加雾。无新增依赖、构建、粒子、滤镜、缓存或每帧绘制。
- CACHE 更新为 `endless-sea-drift-v11-mist2`，edition 为 `XI雾2`；CHANGELOG 前置中文短记，README 近况同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图及报告路径；成功时输出 `_shot-v11mist2.png`、`_shot-v11.png` 与分场景截图。

## 保留与验证

- `game.js`、`styles.css` 与基线逐字节一致；去除注释与八位颜色后，`art.js` 与基线一致。全部玩法数值、战斗、HP、AI、合成、存档键、迁移及偏好保持不变。
- 30fps 与 ≤4 声部预算不变。触控 ≥44px、竖屏 notice +176px 规则不变；自测保留间距 ≥8px、HUD 高度 140–151px 及安全区断言。
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，退出码 1；`_v11mist2-validation.json` 为 `ok:false`，日志为 `_selftest-v11mist2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器成功，未生成本版截图，既有 `_shot-v11.png` 未修改。兼容输出 `_v10-validation.json` 已恢复基线。

## 待实测

在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，复核横屏 844×390、竖屏 390×844 / 320×568、昼夜、暴雨与安全区。视觉柔化效果、实际触控尺寸、HUD/通知间距、iOS Safari 真机 30fps 和离线更新尚未实测；配置不变不代表浏览器验证通过。

## 浏览器补跑（runner）
- session `01a1a887-72d8-7d43-8994-28ad940600a3`
- see `_selftest-v11mist2-run.log`
