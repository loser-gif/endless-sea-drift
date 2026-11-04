# XI灰 / v11-ash 交接

基线：`25616cfbf1508dbc832dbfdce90ede4b75b4b24c`。原地编辑，未 commit / push。

## 改动

- `art.js`：风暴缓存天空保留 gale slate 顶部 `#202e38`，中段由 `#293c45` 调为灰蓝 `#3b454b`，底部由 `#20363d` 调为 `#303e43`；雨色由 `#bdc9ce` 调为灰白 `#c3c7c8`。保留 96×64 缓存、渐变节点、昼夜透明度、52 条雨线及其尺寸、速度；没有新增绘制层、粒子、滤镜、依赖或构建。
- CACHE → `endless-sea-drift-v11-ash`；edition → `XI灰`；CHANGELOG 前置中文短记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、截图与报告副本路径：`_shot-v11ash.png` / `_shot-v11.png`、`_v11ash-validation.json`，场景截图也改为 v11ash 前缀。
- `game.js`、`styles.css` 未改；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 和 ≤4 声部逻辑保持原样。保留既有 ≥44px 触控规则、竖屏 notice +176px 与 HUD 布局。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1；`_v11ash-validation.json` 为 `ok:false`。日志：`_selftest-v11ash-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，未能连接调试端点。未伪造浏览器结果、未复制历史截图充作新截图。`_shot-v11ash.png` 未生成；已有 `_shot-v11.png` 是历史产物，不能作为本版验收证据。
- 浏览器可用时重跑自测，输出横屏、竖屏、小竖屏、风暴昼夜和安全区截图；既有断言检查 notice gap ≥8px、HUD 高度 140–151px、offset 176px 与触控 ≥44px。
- 尚待真实浏览器视觉及 iOS Safari 实机验收：检查风暴灰蓝天空与灰白雨线、木筏可读性、小屏 edition 排版及实际帧率。未声称浏览器布局或实机性能通过。

## 浏览器补跑（runner）
- session `01a1a7dd-59d3-74f1-9799-598e45f6b765`
- see `_selftest-v11ash-run.log`
