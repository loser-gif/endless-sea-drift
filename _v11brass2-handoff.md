# XI铜 / v11-brass2 交接

基线：`be0da7a3b1d29b00d32d0ecfdade02c01fc3f700`。原地修改，未 commit / push。

## 改动

- `styles.css`：HUD 原有单层渐变改为低饱和暖铜面色；顶轨、侧边与两枚原有 4px 铆钉共用 `--hud-brass-light / mid / dark`（`#e0c18b / #a18452 / #4d422d`）。既有内缘阴影同步色系，不增加阴影层、滤镜、动画、粒子或布局占位。
- 尺寸、边框宽度、padding、字号、触控区域与所有媒体查询布局保持原值；竖屏 notice 仍为 +176px。
- `sw.js` CACHE → `endless-sea-drift-v11-brass2`；`index.html` edition → `XI铜`。
- CHANGELOG 顶部新增中文记录，README 近况与版签同步。
- `_selftest-v10.mjs` 报告 cache、版签断言、全部版本截图与报告路径改为 brass2；主截图成功后仍复制到 `_shot-v11.png`。

## 保留项

`game.js`、`art.js` 未修改。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部实现保持基线，无新依赖或构建步骤。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，总结果 `ok:false`；报告 `_v11brass2-validation.json`（另有脚本原有 `_v10-validation.json` 输出）。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用，未伪造浏览器结果。
- 本轮未生成 `_shot-v11brass2.png` 或刷新 `_shot-v11.png`；既有通用截图不代表本轮效果。
- 本轮尚未验证实际 HUD 高度、notice 间距、触控尺寸、视觉或帧率，也未进行真机 iOS Safari 验证。现有浏览器自测保留横屏、390×844、320×568、安全区断言；竖屏要求 HUD 140–151px、间距 ≥8px、offset 176px，触控 ≥44px。
- 浏览器可用后运行 `node _selftest-v10.mjs`，将输出 `_shot-v11brass2.png`、`_shot-v11.png` 及分场景截图，并更新验证报告。

## 浏览器补跑（runner）
- session `01a1a854-a54b-7c20-abb8-9615ecf10eba`
- see `_selftest-v11brass2-run.log`
