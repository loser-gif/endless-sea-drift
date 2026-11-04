# XI帆2 / v11-mast2 交接

基线 HEAD：`223b8a4654c847348b241857e7a3394ad8795d5f`。原地修改，未 commit / push。

## 改动

- `art.js`：商船暖色主帆与青绿副帆加深背光折谷，压低亮面；沉船残帆同步调整为风化灰绿。既有帆桁暗面加深，上缘亮边缩短，两端保留暗边。雾灯船复用商船精灵。
- 保留 merchant / wreck 的 96×80 缓存尺寸、帆外轮廓、帆桁暗面范围和绘制位置；只修改既有多边形颜色及亮边顶点，绘制调用数量不变。无新增逐帧工作、粒子、滤镜、依赖或构建。
- CACHE → `endless-sea-drift-v11-mast2`；edition → `XI帆2`；CHANGELOG 中文条目前置，README 近况更新。
- `_selftest-v10.mjs` 的 cache、edition 断言、截图和报告路径切换为 mast2。成功时输出 `_shot-v11mast2.png` / `_shot-v11.png` 及 mast2 各场景截图；报告 `_v11mast2-validation.json`，保留原有 v10 公用产物路径。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器检查失败，退出码 1，报告 `ok:false`。日志 `_selftest-v11mast2-run.log`。
- Chromium 启动错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，CDP 调试端点不可用。未伪造浏览器成功或截图。
- 本次未生成 `_shot-v11mast2.png`；现有 `_shot-v11.png` 是旧产物，不能作为本次验收证据。

## 保留与待验收

`game.js`、`styles.css` 相对基线无修改：全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流与 ≤4 声部逻辑不变。触控 ≥44px、竖屏 notice +176px 规则及 HUD 布局保持。

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，验收 844×390、390×844、320×568 下帆褶、帆桁和昼夜风雨画面，以及 HUD 高度 140–151px、notice gap ≥8px、安全区和暂停操作。真实画面验收、帧率实测和 iOS Safari 验证尚未完成。

## 浏览器补跑（runner）
- session `01a1a8b7-a409-7f51-96d2-ffaa67a48bf2`
- see `_selftest-v11mast2-run.log`
