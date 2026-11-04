# XI亮 / v11-gleam 交接

基线：`484707df78bbc4f65cb4e8ce78808c9468d81a72`。原地修改，未 commit / push。

## 改动

- `art.js`：既有左肩微高光仅出现在断续浪冠内，从浪冠上方落到同一行，透明度 .48 → .44；普通浪冠透明度由 .45 改为 .32 + shoulder × .13，减弱背光侧。浪尖与白沫顶面共用柔象牙色 `#e4e3cf`。
- 保留六张 192×48 浪形及六张 48×12 白沫缓存；每张浪形保留 1–3 个微高光，未增加缓存或逐帧调用，微高光缓存绘制次数减少。无新增依赖、构建、粒子、滤镜或动画。
- CACHE → `endless-sea-drift-v11-gleam`；edition → `XI亮`；已前置中文 CHANGELOG 并更新 README 近况。
- `_selftest-v10.mjs` 更新 cache、edition 断言与所有本轮截图、报告路径；成功时复制 `_shot-v11gleam.png` 与 `_shot-v11.png`。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；Chromium 启动失败，退出码 1，`ok:false`。
- 原因：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。
- 报告：`_v11gleam-validation.json`；日志：`_selftest-v11gleam-run.log`。未生成本轮截图，既有 `_shot-v11.png` 不是 gleam 验证证据。未完成浏览器视觉验收或 iOS Safari 实机验证；30fps 未实测。
- 浏览器可用后补跑 `node _selftest-v10.mjs`，检查昼夜/风暴水面、三种视口触控 ≥44px、竖屏 HUD 高 140–151px、notice +176px 与间距 ≥8px，以及安全区布局。

## 保留范围

`game.js` 与 `styles.css` 无改动；全部玩法数值、战斗、HP/AI、合成、存档键/格式、迁移、偏好保留。30fps 调度、≤4 声部上限及全部 UI 布局保留。

## 浏览器补跑（runner）
- session `01a1a8a6-9f4e-7882-a224-122a32683127`
- see `_selftest-v11gleam-run.log`
