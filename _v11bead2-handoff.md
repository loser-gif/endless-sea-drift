# XI珠2 / v11-bead2 交接

基线 HEAD：`42cf823136b40b0f8343514222b813b38f6a410e`。原地修改，未 commit / push。

## 改动

- `styles.css`：直接细化既有生存条珠光，亮心半径从 1px 收至 .7px，晕边终点从 2.5px 收至 2px；饱腹暖白、淡水冷白，降低晕边和上沿亮线透明度。保留原有两层背景、5×5px 高光区域、右端居中位置、轨道背景与阴影；未增加滤镜、动画、粒子或依赖。
- CACHE：`endless-sea-drift-v11-bead2`；edition：`XI珠2`。中文 CHANGELOG 前置，README 近况同步。
- `_selftest-v10.mjs`：同步 report.cache、edition 断言、全部本轮截图与验证路径。成功时复制至 `_shot-v11bead2.png` 与 `_shot-v11.png`，报告为 `_v11bead2-validation.json`，保留原 v10 共用输出。

## 验证结果

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器启动失败，退出码 1；报告 `ok:false`，日志 `_selftest-v11bead2-run.log`。
- Chromium 实际失败信息：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，CDP 端点不可用。
- 未生成 `_shot-v11bead2.png`；已有 `_shot-v11.png` 为历史产物，不能作为本轮验证证据。未伪造浏览器通过或截图。

## 保留与待验收

`game.js` / `art.js` 相对基线无改动。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流和 ≤4 声部上限保持不变。

CSS 轨道宽高、间距、HUD 布局、≥44px 触控、安全区和竖屏 notice +176px 均未改。现有自测包含 844×390、390×844、320×568、竖屏 HUD 高度 140–151px、notice gap ≥8px、触控与安全区检查；因 Chromium 无法启动，本轮这些浏览器断言尚未执行。

可运行 Chromium 后重跑 `node _selftest-v10.mjs`；检查满值、半值、低值及空值下两条珠光的细腻度和端点裁切。真实 iOS Safari 的显示、安全区和 30fps 表现实测仍待完成。

## 浏览器补跑（runner）
- session `01a1a8c0-2723-7211-bcb5-050721a1ea43`
- see `_selftest-v11bead2-run.log`
