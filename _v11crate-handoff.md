# XI箱 / v11-crate 交接

基线：`aa03ea4bfd1f16b6f39b619e5aa6587e40e6960f`。原地编辑，未 commit / push。

## 改动

- `art.js`：仅修改 `playArt` 的货箱缓存精灵。增加盖板接缝、箱盖下沿 AO、侧板暗缝、斜压条接触阴影和细亮边；正面增加带暗色底座、单点高光与锁孔的黄铜锁扣。所有新增绘制均烘入既有缓存，不增加逐帧特效、粒子、滤镜或依赖。
- 保留 64×64 缓存、`art.crate.unit=2`、32×32 显示尺寸及原轮廓；其他精灵不变。
- `sw.js` CACHE → `endless-sea-drift-v11-crate`；`index.html` edition → `XI箱`；CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言、全部本版截图路径及报告副本。浏览器可用时输出 `_shot-v11crate.png`、`_shot-v11.png` 及横竖屏、昼夜、安全区等截图；报告为 `_v11crate-validation.json`。
- `game.js`、`styles.css` 未改。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑均保留；触控尺寸和竖屏 notice +176px 未改。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，1 项 browser-runtime 失败，退出码 1；报告 `ok:false`。详见 `_v11crate-validation.json`、`_selftest-v11crate-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。没有生成本版截图；既有 `_shot-v11.png` 是历史产物，不能作为本版验证证据。
- 待浏览器可启动时重跑同一自测：验证 844×390、390×844、320×568 与安全区；检查触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px、notice offset 176px。
- 浏览器视觉及 iOS Safari 实机性能未验收；补验检查原尺寸下木板暗缝与黄铜锁扣可辨，昼夜中高光不过亮，整体保持克制的 HD-2D B 档效果。

## 浏览器补跑（runner）
- session `01a1a7d7-b27c-7f02-93c6-6168c7858918`
- see `_selftest-v11crate-run.log`
