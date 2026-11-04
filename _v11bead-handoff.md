# XI珠 / v11-bead 交接

基线：`2729c2cfeebc66d21b9374b95f0e262bf7c972f7`。原地编辑，未 commit / push；既有未跟踪文件未清理。

## 改动

- `styles.css`：仅为 `.vitals` 原生 progress 添加静态末端珠光与深色内凹轨道，保留饱腹暖金、淡水青蓝；WebKit / Firefox 分别声明填充伪元素。珠光随原生填充宽度显示，零值无填充。
- 保留 5px 高度、间距及 HUD 几何；阴影替换该控件原有描边，无新增动画、滤镜、粒子、依赖或构建步骤。
- CACHE → `endless-sea-drift-v11-bead`；edition → `XI珠`；CHANGELOG 中文条目前置，README 近况同步。
- `_selftest-v10.mjs` 同步 cache、edition、报告与截图路径；成功时输出 `_shot-v11bead.png` / `_shot-v11.png` 及各视口检查截图，保留 v10 兼容输出。

## 保留范围

`game.js`、`art.js` 与基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流及 ≤4 声部逻辑不变。原有 ≥44px 触控规则和竖屏 notice +176px 保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。
- `_v11bead-validation.json`：`ok:false`；兼容输出 `_v10-validation.json` 同步。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 本轮没有生成 `_shot-v11bead.png`；现有 `_shot-v11.png` 为历史截图，不能用作本版验收证据。

## 待复核

在可启动 Chromium 的环境执行 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568。既有脚本要求竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px，以及触控目标 ≥44px。视觉复核两种进度条在 0 / 1 / 25 / 50 / 100 值下的珠光裁切和凹槽；iOS Safari 实机显示、刘海与帧率尚未验证。

## 浏览器补跑（runner）
- session `01a1a7ab-effe-7d00-9f2d-30fe20d6846d`
- see `_selftest-v11bead-run.log`
