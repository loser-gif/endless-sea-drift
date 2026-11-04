# XI潮 / v11-tide3 交接

基线：`ba265d853f173fe364be59caf08822cef4eb1926`。原地修改，未 commit / push。

## 修改

- `art.js`：brine 木筏与沉船盐痕由黄绿收敛为灰绿 `#9eafa3`、浅象牙 `#cdd6c4`；商船保留较暗的同色系盐痕，湿木底色轻微偏青。
- `game.js`：tide2 水线与湿边统一灰青、灰绿；尾沫顶面 `#bfcec2`、尖端 `#e4e3cf` 与现有远处白沫和 gleam 浪尖对应。保留暖木、黄铜与深青海面的既有风格。
- 仅改 RGB 颜色：对比 HEAD，屏蔽六位 RGB 后 art.js / game.js 完全一致，八位色的 alpha 99 保留。形状、尺寸、透明度、频率、缓存、绘制次数不变，无新依赖、构建、粒子、滤镜或绘制层。
- CACHE → `endless-sea-drift-v11-tide3`；edition → `XI潮`；CHANGELOG 前置中文记录、README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 cache、edition 断言、全部截图与报告副本路径改为 tide3，成功时输出 `_shot-v11tide3.png` / `_shot-v11.png`，报告 `_v11tide3-validation.json`。

## 保留

全部玩法数值、战斗、HP / AI、合成、存档键、迁移、偏好不变。styles.css 与 manifest 无改动。触控 ≥44px、竖屏 notice +176px、gap ≥8px 与 HUD 布局规则保留；30fps 调度、最多四声部及绘制预算保留。

## 验证

- `node --check art.js`、`node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，browser-runtime 失败，退出码 1。报告明确 `ok:false`，兼容报告 `_v10-validation.json` 同步更新；日志 `_selftest-v11tide3-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器通过。
- 本轮未生成 `_shot-v11tide3.png` 或其他 tide3 截图；既有 `_shot-v11.png` 未覆盖，不能作为本轮视觉证据。
- 待可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，复核 844×390、390×844、320×568、晨昏 / 风雨 / 夜间、触控与安全区、HUD 高度及 notice 间距。浏览器视觉效果、iOS Safari 实机和实际 30fps 尚未验证。

## 浏览器补跑（runner）
- session `01a1a8a9-77af-7971-babe-e5d6bcc9e8a1`
- see `_selftest-v11tide3-run.log`
