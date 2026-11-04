# XI湾港 / v11-harbor 交接

基线：`78f557397e88a4338f4ab6eda1ed5020458b7039`。原地编辑，未 commit / push。

## 改动

- `art.js`：只调整 merchant 的缓存绘制。木板缝、湿码头边沿、货物与桅杆接触 AO、船腹共用冷湿暗色；原横亮条改为顺透视斜边，盐点降低对比。替换现有绘制，不增加效果层、粒子、滤镜或逐帧绘制。
- 保留精灵 96×80、外轮廓、显示比例、帆与货物尺寸。雾灯船由 merchant 着色派生，也继承本轮材质调整。
- `sw.js` CACHE → `endless-sea-drift-v11-harbor`；`index.html` edition → `XI湾港`；CHANGELOG 顶部中文记录与 README 近况同步。
- `_selftest-v10.mjs` cache、版签断言、截图及报告路径切换 harbor；成功时主截图复制至 `_shot-v11harbor.png` 和 `_shot-v11.png`，另输出 `_shot-v11harbor-merchant.png` 供日间商船检查。保留原主截图的夜间雾灯船场景。

## 保留与验证

- `game.js`、`styles.css` 未修改：全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 调度与 ≤4 声部实现保持基线；无新依赖或构建。
- 触控尺寸及布局代码不变，竖屏 notice +176px 不变；自测继续要求触控 ≥44px、HUD 高 140–151px、notice 间距 ≥8px，含安全区场景。
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- 已运行 `node _selftest-v10.mjs`：69 项非浏览器检查通过，总结果 **ok:false**。报告 `_v11harbor-validation.json`，运行日志 `_selftest-v11harbor-run.log`；脚本同时更新原有 `_v10-validation.json`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。未伪造成功，未生成本轮截图，既有 `_shot-v11.png` 不代表本轮效果。
- 本轮视觉、实际 HUD/notice 布局、触控及帧率尚未通过浏览器验证，也未进行 iOS Safari 真机验证。浏览器可用后运行同一自测，查看商船日间与雾灯船夜间截图，并在 iOS Safari 复核布局与性能。

## 浏览器补跑（runner）
- session `01a1a865-793a-7052-9d37-0f5c1803cf6a`
- see `_selftest-v11harbor-run.log`
