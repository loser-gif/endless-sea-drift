# XI龙2 / v11-keel2 交接

基线：`9ab227a3ee0f09ac325daecfef088cfe5a9b6ce6`。原地编辑，未 commit / push。

## 修改

- `art.js`：仅加深四款缓存船板底部既有 AO 色带。湿木过渡 `#243b3d` → `#1d3337`，窄亮沿 `#36504b` → `#304842`，下层 `#192f34` → `#12262d`，接触底边 `#10262e` → `#0a1c25`。保留冷青层次，不扩张阴影。
- 船板 40×52 单位、80×104 缓存、所有矩形坐标及绘制次数不变；无新增滤镜、粒子、依赖、构建或效果层。
- `sw.js` CACHE → `endless-sea-drift-v11-keel2`；`index.html .edition` → `XI龙2`。CHANGELOG 前置中文短记，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图及报告路径。浏览器成功时输出 `_shot-v11keel2.png`、`_shot-v11.png` 和分场景截图。

## 保留与验证

- `game.js`、`styles.css` 与基线逐字节一致。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部逻辑未改。
- 去除注释并归一化十六进制颜色后，`art.js` 与基线一致，单位尺寸、轮廓及绘制操作未变。
- 触控 ≥44px、竖屏 notice +176px 保持；自测保留 HUD 高度 140–151px、通知间距 ≥8px 及安全区断言，但本次未能执行浏览器断言。
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器项失败，退出码 1。`_v11keel2-validation.json` 为 `ok:false`；日志 `_selftest-v11keel2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。没有生成本版截图；既有 `_shot-v11.png` 未覆盖，不代表本次视觉验收。兼容报告 `_v10-validation.json` 已恢复基线。

## 待实测

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，补验船底 AO 在昼夜、风暴和扩建场景的表现，以及横屏 844×390、竖屏 390×844 / 320×568 的 HUD、通知间距、触控和安全区。iOS Safari 实机、实际 30fps 与离线更新尚未验证；绘制预算不变不代表实测通过。

## 浏览器补跑（runner）
- session `01a1a897-fc03-7840-8be7-1ce17f5ca88a`
- see `_selftest-v11keel2-run.log`
