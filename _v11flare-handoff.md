# XI焰 / v11-flare 交接

基线：`61a6109110fd84eddda075326033ffe5c94dbbc3`。原地编辑，未 commit / push。

## 改动

- `art.js`：现有吊灯玻璃 alpha 从 e6/d9 收至 bf/b3，火芯从 4×9 收至 2×6、alpha cc → bf；灯模块玻璃 alpha d9 → a6，火芯从 10×5 收至 3×4、alpha cc → bf。火芯保持在玻璃内部，暖色与黄铜外框保留。仅修改初始化精灵缓存像素，缓存尺寸、位置、逐帧绘制次数不变；无新增粒子、动画、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-flare`；`index.html` edition → `XI焰`；CHANGELOG 前置中文记录，README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、所有场景截图前缀与报告副本：`_shot-v11flare.png`、`_shot-v11.png`、`_v11flare-validation.json`。沿用 `_v10-validation.json` 中间报告输出。
- `game.js`、`styles.css` 未改；玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好及 30fps / ≤4 声部逻辑保持原样。触控 ≥44px 与竖屏 notice +176px 规则保留。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1，报告 `ok:false`。日志：`_selftest-v11flare-run.log`。
- Chromium 启动报 `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，无法连接 CDP。未伪造浏览器通过，未复制旧截图。`_shot-v11flare.png` 未生成；已有 `_shot-v11.png` 为历史产物，不代表本版。
- 浏览器可用时重跑 `node _selftest-v10.mjs`，生成本版截图并验证横屏、竖屏、小竖屏、昼夜风暴、安全区及暂停/死亡布局。保留 notice gap ≥8px、HUD 高度 140–151px、offset 176px 与触控 ≥44px 断言，本轮未获得浏览器实测结果。
- 待浏览器视觉及 iOS Safari 实机验收：灯芯缩放可读性、夜间灯光与真实帧率。本版只收敛原有光源，未增加逐帧渲染负担。

## 浏览器补跑（runner）
- session `01a1a7e3-0508-7462-acd2-a5fa2dca8d81`
- see `_selftest-v11flare-run.log`
