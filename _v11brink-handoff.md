# XI沿 / v11-brink 交接

基线：`fbd4ccd4dca279f1977fc5fb1e2f7674543a399e`。原地编辑，未 commit / push。

## 修改

- `styles.css`：在 Brim 原有眉题顶部背景中微调两条 1px 色带。黄铜亮边 `#c5a46b80 → #d2b47a70`，暗缝 `#06192380 → #06192370`；降低两条色带透明度并微暖亮边，保留单个渐变、位置、尺寸与透明区间。
- 标题字体、字号、字距、边距、内边距及行框不变；无新增效果层、动画、滤镜、粒子、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-brink`；`index.html` edition → `XI沿`；CHANGELOG 前置中文短记录，README 近况及版本同步。
- `_selftest-v10.mjs` 的 report.cache、浏览器 edition 断言、截图与报告路径同步 brink；浏览器成功时输出 `_shot-v11brink.png` / `_shot-v11.png` 及场景截图。

## 保留

`game.js`、`art.js` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移及偏好保持基线。30fps 配置、≤4 声部预算保持不变。

竖屏 notice +176px、触控 ≥44px 的规则不变；保留浏览器自测中 notice gap ≥8px、HUD 高度 140–151px 及安全区断言。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器启动失败，退出码 1。报告 `_v11brink-validation.json` 为 `ok:false`，日志 `_selftest-v11brink-run.log`。
- Chromium 调试端点不可用：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。
- 本轮未生成 `_shot-v11brink.png`，未用旧图代替；既有 `_shot-v11.png` 未改。自测兼容输出 `_v10-validation.json` 恢复基线，brink 专属报告保留。

## 待复核

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 与模拟安全区，以及昼夜、暴雨下沿口的可辨性。浏览器截图、实际标题几何、触控布局和 iOS Safari 真机帧率尚未实测；配置与 CSS 几何属性未改不代表实测通过。

## 浏览器补跑（runner）
- session `01a1a881-c4dd-7543-b377-7bd6ec1d3732`
- see `_selftest-v11brink-run.log`
