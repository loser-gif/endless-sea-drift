# XI缆 / v11-cord 交接

基线：`1d49378fb5c49c7731fdb7c06b075e59f8d834c8`。原地修改，未 commit / push。

## 修改

- `art.js`：在原有筏板绑绳两侧烘焙 1 缓存像素宽的接触 AO，三个跨板缝处补局部遮蔽。原绳股仍为 3 缓存像素宽，高光与编织像素不变。
- 沿用四张 80×104 缓存、unit=2、40×52 显示尺寸；新增像素均在原筏板不透明轮廓内。仅初始化缓存增加少量矩形，无新增逐帧绘制、画布、滤镜、粒子、依赖或构建。
- CACHE 改为 `endless-sea-drift-v11-cord`；edition 为 `XI缆`；CHANGELOG 中文条目前置，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言与输出路径同步为 cord；成功运行将生成 `_shot-v11cord.png`、`_shot-v11.png` 及各场景截图，报告为 `_v11cord-validation.json`。

## 保留范围

`game.js`、`styles.css` 与基线完全一致；玩法数值、战斗、HP、AI、合成、存档 key、迁移、偏好不变。30fps 与最多 4 声部保持原实现；触控尺寸、竖屏 notice +176px 与 HUD 布局未改。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过；浏览器启动失败，退出码 1，`_v11cord-validation.json` 为 `ok:false`。
- Chromium 报 `FATAL:content/browser/sandbox_host_linux.cc:41`，`shutdown: Operation not permitted (1)`，调试端点不可用。完整日志：`_selftest-v11cord-run.log`。
- 本轮未生成 `_shot-v11cord.png`，既有 `_shot-v11.png` 未更新，不作为本轮证据。兼容输出 `_v10-validation.json` 已恢复基线。
- 浏览器触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px 与 offset=176px 的原断言保留，但本轮未执行到浏览器检查；观感、实际帧率及 iOS Safari 尚未实测。在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，并在 Safari 真机复核。

## 浏览器补跑（runner）
- session `01a1a801-4a47-7f91-8f0e-53b3210df043`
- see `_selftest-v11cord-run.log`
