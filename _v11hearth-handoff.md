# XI灶 / v11-hearth 交接

基线：`d8dc79a9583b4b03510eb96b2fcfb1b069f490de`。原地修改，未 commit / push。

## 改动

- `art.js` 仅两处美术 alpha：灶沿 `#c0b797 → #c0b797cc`（100% → 80%），烟囱顶沿 `#b4bca5 → #b4bca5bf`（100% → 约75%）。RGB、位置、尺寸、缓存和绘制次数不变；ember 炉火两级 `e6` / `d9` 原样保留。无新增图层、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-hearth`；`index.html` edition → `XI灶`；CHANGELOG 中文条目前置、README 近况及 edition 同步。
- `_selftest-v10.mjs` report.cache、浏览器 edition 断言、报告和截图路径指向 hearth；保留兼容 v10 输出与 `_shot-v11.png`。既有昼夜风暴、横竖屏及暂停场景检查继续保留。

## 保留

`game.js`、`styles.css` 与基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键 / 迁移、偏好、30fps 节流、≤4 声部逻辑保持；触控尺寸、竖屏 notice +176px、HUD 与安全区布局不变。

## 验证与产物

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，1 项浏览器检查失败，退出码 1。
- `_v11hearth-validation.json`：`ok:false`；兼容报告 `_v10-validation.json`；日志 `_selftest-v11hearth-run.log`。
- Chromium 启动报错：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器成功。
- 本轮未生成 `_shot-v11hearth.png`，现有 `_shot-v11.png` 为历史产物，不能作为本轮证据。脚本已配置成功时输出这两个文件及 hearth 的竖屏 / 暂停 / 昼夜风暴截图。

## 待复核

在可用 Chromium 环境重跑 `node _selftest-v10.mjs`，检查灶沿在昼夜环境中的亮度与炉火分离；确认 844×390、390×844、320×568 的 ≥44px 触控、竖屏 HUD 高度 140–151px、notice gap ≥8px、+176px 偏移及安全区。iOS Safari 实机与实际帧率未验证。

## 浏览器补跑（runner）
- session `01a1a792-926c-7e22-84af-2574285a026b`
- see `_selftest-v11hearth-run.log`
