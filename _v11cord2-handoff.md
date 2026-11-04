# XI缆2 / v11-cord2 交接

基线：`a00931b0bc970906331c4f21dc8082e023783381`。原地修改，未 commit / push。

## 修改

- `art.js`：绑绳背光边、板缝接触 AO 加深为冷灰绿；保留上段麻绳暖色，下段绳股转为湿润灰绿。绳圈底影、内缘和尾绳接触阴影同步加深，底影 alpha 从 d9 调为 e6。
- 复用既有像素坐标和绘制调用：木板缓存仍为 80×104，三像素绑绳不变；绳圈缓存仍为 44×36，轮廓、摆放、绘制尺寸不变。仅在缓存生成时选色，没有新增每帧绘制层、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-cord2`；`index.html` edition → `XI缆2`；CHANGELOG 前置中文记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` cache、edition 断言及全部截图/报告副本路径同步为 cord2；成功时生成 `_shot-v11cord2.png` 和 `_shot-v11.png`。

## 保留

`game.js`、`styles.css`、manifest 无改动。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好不变。触控 ≥44px、竖屏 notice +176px、gap ≥8px 与 HUD 高度规则保留；30fps 调度与 ≤4 声部预算保留。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`node --check game.js` 通过；`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，browser-runtime 失败，退出码 1。`_v11cord2-validation.json` 明确 `ok:false`，兼容报告 `_v10-validation.json` 同步更新；日志 `_selftest-v11cord2-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 本轮未生成 `_shot-v11cord2.png` 或其他 cord2 截图；既有 `_shot-v11.png` 未覆盖，不能作为本轮视觉证据。
- 待可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，复核 844×390、390×844、320×568、晨昏/风雨/夜间、触控与安全区、HUD 高度 140–151px、notice 偏移 176px 与间距 ≥8px。浏览器视觉、iOS Safari 实机与实际 30fps 尚未验证。

## 浏览器补跑（runner）
- session `01a1a8ac-4e15-7601-a655-b5b373318cd7`
- see `_selftest-v11cord2-run.log`
