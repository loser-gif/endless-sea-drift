# XI箱2 / v11-crate2 交接

基线：`4c3d0b68f24e79de5f6236300732cb106ec1c784`。原地修改，未 commit / push。

## 改动

- `art.js` 仅修改货箱缓存绘制的 11 个色值及注释。盖缝阴影略柔化，木缝和斜撑接触影偏冷；锁座由 `#463d31` 调至 `#3e4036`，暖铜面由 `#a88344` 调至 `#b18d50`，亮沿由 `#e1c17d` 收敛至 `#cfb477`，保留锁孔层次。
- 所有坐标、轮廓、绘制调用数量不变；货箱缓存 64×64、unit=2、显示 32×32 保留。没有新增逐帧效果、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-crate2`；`index.html` edition → `XI箱2`。CHANGELOG 前置中文记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部本版截图路径与报告副本。成功时输出 `_shot-v11crate2.png` / `_shot-v11.png`；报告 `_v11crate2-validation.json`，兼容保留 `_v10-validation.json`。
- `game.js`、`styles.css` 对基线无修改；玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑均保留。触控 ≥44px、竖屏 notice +176px 和 HUD 布局规则不变。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- 实际执行 `node _selftest-v10.mjs`，69 项非浏览器检查通过；browser-runtime 失败，退出码 1，报告 `ok:false`。日志：`_selftest-v11crate2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；调试端点不可用，未伪报浏览器成功。
- 未生成 `_shot-v11crate2.png`；既有 `_shot-v11.png` 未覆盖，属于历史产物，不能作为本版验收证据。

## 待补验

在允许 Chromium 启动的环境重跑 `node _selftest-v10.mjs`，检查货箱日夜 AO、锁扣辨识度。现有浏览器断言覆盖 844×390、390×844、320×568、安全区、触控 ≥44px、摇杆头 44×44px、notice gap ≥8px / offset +176px、HUD 高 140–151px；本轮未能执行。iOS Safari 实机触控与 30fps 尚未实测。

## 浏览器补跑（runner）
- session `01a1a8d7-4900-7b41-ac5d-22d8fefc32ba`
- see `_selftest-v11crate2-run.log`
