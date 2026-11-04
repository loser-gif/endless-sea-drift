# XI釉 / v11-glaze 交接

基线：`564a2024c6a3c95a0de818576c81a33f90f61b7e`。原地编辑，未 commit / push，既有未跟踪文件保留。

## 改动

- `styles.css`：直接替换最终弹层卡片与终章卡片的两层背景渐变；低强度冷暖反光配合约 96% 不透明底色，顶部暗凹阴影改为 1px 细光泽。保留黄铜边框、终章冷灰色、统计行纹与原阴影数量，不新增伪元素、动画或绘制层。
- 遮罩与卡片明确设置 `-webkit-backdrop-filter:none` / `backdrop-filter:none`，移除基础规则中已被覆盖的 blur(4px)，不采样模糊背景。无新依赖、构建或粒子。
- `sw.js` CACHE → `endless-sea-drift-v11-glaze`；`index.html` edition → `XI釉`；CHANGELOG 中文短条目前置，README 近况一行与 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、报告副本及全部版本截图路径指向 glaze；成功时输出 `_shot-v11glaze.png`、`_shot-v11.png` 及各视口、暂停、终章、安全区截图；保留 v10 兼容输出。

## 保留范围

`git diff --exit-code HEAD -- game.js art.js` 通过，二者与基线完全相同。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流、≤4 声部逻辑保持。未改任何布局尺寸、边距、字体或触控规则；竖屏 notice +176px 保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。
- `_v11glaze-validation.json`：`ok:false`；`_v10-validation.json` 同步。原始日志见 `_selftest-v11glaze-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用，未伪报浏览器成功。
- 本次没有生成 `_shot-v11glaze.png` 或 glaze 视口截图；现存 `_shot-v11.png` 为历史图片，不代表本版。未复制旧图充当新图。

## 待复核

在允许 Chromium 启动的环境执行 `node _selftest-v10.mjs`，查看 844×390、390×844、320×568 的开始、暂停、终章画面。既有断言覆盖触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px、安全区与长文本滚动。本轮未实测这些指标和视觉效果；iOS Safari 实机性能、字体及安全区也尚未验证。

## 浏览器补跑（runner）
- session `01a1a7b4-2bf6-7230-bcb0-856c313869da`
- see `_selftest-v11glaze-run.log`
