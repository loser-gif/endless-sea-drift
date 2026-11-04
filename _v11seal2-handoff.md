# XI玺 / v11-seal2 交接

基线：`11df1947bff6bcc5a3f4f04044d59eed11001ced`。原地修改，未 commit / push。

## 修改与自审

- `sw.js` CACHE 更新为 `endless-sea-drift-v11-seal2`；`index.html` edition 更新为 `XI玺`。
- `CHANGELOG-v11.md` 前置中文短记录；README 近况及英文 edition 同步。
- `_selftest-v10.mjs` report.cache、浏览器 edition 断言、版本截图与报告路径切换为 seal2；浏览器可用时输出 `_shot-v11seal2.png`、`_shot-v11.png` 及各场景截图，报告输出 `_v11seal2-validation.json`。
- 本轮未发现需要改动运行时代码的已证实问题；不叠加视觉效果，不增加依赖或构建步骤。

## 保留边界

`game.js`、`art.js`、`styles.css` 与指定基线逐字节一致。全部玩法数值、战斗、HP、AI、合成、存档键、迁移及偏好未改。30fps 与最多 4 声部实现未改。
竖屏 notice +176px 与触控布局保留；既有浏览器断言仍要求触控 ≥44px、HUD 高度 140–151px、notice gap ≥8px，并覆盖小竖屏及模拟安全区。本轮未能执行这些浏览器断言。

## 验证结果

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器运行检查失败，退出码 1；专属报告真实为 `ok:false`。
- Chromium 启动失败：`sandbox_host_linux.cc:41`，`shutdown: Operation not permitted (1)`；调试端点不可用。日志见 `_selftest-v11seal2-run.log`。
- 本轮未生成 `_shot-v11seal2.png`；现有 `_shot-v11.png` 未更新，是历史产物，不作为本轮证据。截图复制路径已配置，未伪造截图或浏览器通过结果。
- 自检兼容输出 `_v10-validation.json` 已恢复运行前内容；seal2 专属报告与日志保留。已有无关文件未清理。

## 后续复核

在允许 Chromium 启动的环境运行 `node _selftest-v10.mjs`，生成 seal2 截图并复核横屏、390×844 / 320×568 竖屏、HUD 与 notice 间距、弹层和安全区；iOS Safari 真机视觉、触控与实际帧率仍待验证。本轮仅确认源码与非浏览器检查。

## 浏览器补跑（runner）
- session `01a1a81d-542a-7a31-9543-73deb05376e8`
- see `_selftest-v11seal2-run.log`
