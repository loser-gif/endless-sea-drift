# XI飓 / v11-gale 交接

基线：`0ac397b7526ba75bc6a902104173186ef8db9d53`。原地修改，未 commit / push。

## 改动

- `art.js`：将风暴单色罩染替换为 resize 时缓存的 96×64 石板灰蓝渐变（顶部 `#202e38`、中部 `#293c45`、底部 `#20363d`），衔接 dawn 阴影色系。仍为一次整屏绘制，透明度 .26 不变；增加一张小缓存，无新增叠加层、粒子、滤镜或依赖。
- 雨线由偏绿灰调整为冷灰 `#bdc9ce`；仍为 52 组、每组两次 fillRect，透明度 .29、尺寸、位置公式和速度不变。其他海浪、泡沫、焦散、反光及光晕预算不变。
- CACHE → `endless-sea-drift-v11-gale`；edition → `XI飓`；CHANGELOG 中文条目前置，README 近况与 edition 同步。
- `_selftest-v10.mjs` 更新 cache、edition 断言及 gale 报告 / 截图路径；保留 `_shot-v11.png` 和兼容 v10 输出。增加 100 秒夜间风暴与 130 秒昼间风暴截图及天气断言，成功时生成 `_shot-v11gale-storm-night.png` / `_shot-v11gale-storm-day.png`。

## 保留

- `game.js`、`styles.css` 与基线无差异：全部玩法数值、战斗 / HP / AI、合成、存档键 / 版本 / 迁移、偏好、30fps 节流与 ≤4 声部逻辑不变。
- 触控 ≥44px、竖屏 notice +176px、HUD 布局与安全区规则原样保留。无新增构建步骤。

## 验证

- `node --check art.js`、`sw.js`、`_selftest-v10.mjs`：通过；`git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过；退出码 1，报告 `_v11gale-validation.json` 为 `ok:false`。日志：`_selftest-v11gale-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器成功。
- 本轮未生成 gale 截图；现有 `_shot-v11.png` 为历史产物，不能作为本轮证据。新增昼 / 夜风暴截图分支尚未在浏览器执行。

## 待验证

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，确认 844×390、390×844、320×568 的触控尺寸、竖屏 HUD 高度 140–151px、notice gap ≥8px、+176px 偏移及安全区。检查昼 / 夜风暴灰蓝渐变与暖色甲板的对比、雨线可读性；iOS Safari 复核触控和帧率。本次未完成视觉验收或实机性能测试。

## 浏览器补跑（runner）
- session `01a1a78e-d60f-71f1-9114-b6b6379631f6`
- see `_selftest-v11gale-run.log`
