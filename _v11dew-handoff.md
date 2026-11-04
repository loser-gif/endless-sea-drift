# XI露 / v11-dew 交接

基线：`18e5bd678d0223a8f0fa40fc05477d013da0603d`。原地修改，未 commit / push。

## 修改

- `art.js`：四张既有甲板缓存中，湿纹上的 3×1 微光从不透明灰绿改为 `rgba(246,226,189,.38)`，沿用 cusp 暖象牙色。仅替换原像素颜色，以 alpha 混合木纹；不新增表面、绘制调用、动画、粒子、滤镜或逐帧开销。晨露为静态材质细节，随原昼夜光照呈现；cusp 黎明调色与时序不变。
- `sw.js` CACHE → `endless-sea-drift-v11-dew`；`index.html` `.edition` → `XI露`。
- 前置中文 CHANGELOG，更新 README 近况及 edition。
- `_selftest-v10.mjs` 更新 report.cache、版签断言、全部场景截图及报告路径；浏览器成功时主截图复制至 `_shot-v11dew.png` 和 `_shot-v11.png`。

## 保留与验证

- `game.js`、`styles.css`、`manifest.webmanifest` 与基线一致：全部玩法数值、战斗、HP、AI、合成、存档键、迁移和偏好不变；30fps 与最多 4 声部配置不变。无新依赖或构建。
- 布局未改：触控 ≥44px、竖屏 notice +176px、gap ≥8px 与 HUD 高度约束保留于现有浏览器自测；本轮未取得浏览器实测结果。
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 和 `git diff --check` 通过。
- `node _selftest-v10.mjs` 退出码 1：69 项非浏览器检查通过；Chromium 在启动时发生 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。
- `_v11dew-validation.json` 如实记录 `ok:false`；日志 `_selftest-v11dew-run.log`。共享 `_v10-validation.json` 已恢复运行前内容。
- 未生成本轮截图，原 `_shot-v11.png` 保持不变。浏览器视觉、布局、离线缓存、iOS Safari 实机与持续帧率仍未验证；在可运行 Chromium 的环境执行 `node _selftest-v10.mjs` 可补齐截图和浏览器检查。

## 浏览器补跑（runner）
- session `01a1a84e-8ba5-72a1-bb93-8a97d92cae17`
- see `_selftest-v11dew-run.log`
