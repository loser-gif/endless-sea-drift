# XI灰2 / v11-ash2 交接

基线：`2b0663abcce5384653e2cf34df774c1cd0a557bb`。原地修改，未 commit / push。

## 改动

- `art.js` 仅改风暴专用的三个色值及注释：天空中段 `#3b454b` → `#3e4649`，海面端 `#303e43` → `#343f43`，雨线 `#c3c7c8` → `#bdc3c3`。灰蓝稍趋中性灰，雨线微收亮度，保留 gale 暗顶 `#202e38`。
- 保留 96×64 天空缓存、单层覆盖、日/夜透明度 .26/.20、雨线透明度 .29、52 组像素雨、坐标、速度和绘制调用数量。无新增效果、粒子、滤镜、依赖或构建。
- CACHE → `endless-sea-drift-v11-ash2`；edition → `XI灰2`；CHANGELOG 前置中文记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、浏览器 edition 断言、本版截图路径和报告副本。成功时输出 `_shot-v11ash2.png` / `_shot-v11.png` 及日夜风暴等截图；报告为 `_v11ash2-validation.json`，兼容保留 `_v10-validation.json`。
- `game.js`、`styles.css` 对基线无修改。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部逻辑保留；≥44px 触控和竖屏 notice +176px / HUD 规则不变。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：69 项非浏览器检查通过，browser-runtime 失败，退出码 1，报告 `ok:false`。日志 `_selftest-v11ash2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。
- 未生成本版截图；既有 `_shot-v11.png` 未覆盖，是历史产物，不能作为本轮证据。未声称完成视觉验收。

## 待补验

在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，对照风暴日/夜截图检查天空灰阶、雨线辨识度和 gale 风势。现有浏览器断言覆盖 844×390、390×844、320×568、安全区、触控 ≥44px、notice gap ≥8px / offset +176px、HUD 高 140–151px；本轮未执行到这些断言。iOS Safari 实机触控及 30fps 尚未实测。

## 浏览器补跑（runner）
- session `01a1a8da-2135-7161-b5fb-63d9c7e0b749`
- see `_selftest-v11ash2-run.log`
