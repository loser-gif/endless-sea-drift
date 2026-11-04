# XI碑2 / v11-slate2 交接

基线 HEAD：`ab7c5d895c6bee930bd89f586d044eae34283e3e`。原地修改，未 commit / push。

## 改动

- `styles.css`：仅调整既有 death 规则的颜色。压低冷石面亮光、28px 横纹与边框，首行保留较亮暖色，正文保持浅色。保留 silk 黄铜框、铰链、阴影和全部尺寸；未增加渐变层、滤镜、动画或粒子。
- CACHE 更新为 `endless-sea-drift-v11-slate2`，edition 为 `XI碑2`；CHANGELOG 中文条目前置，README 近况更新。
- `_selftest-v10.mjs`：report.cache、edition 断言、截图与报告路径同步 slate2。浏览器成功时生成 `_shot-v11slate2.png`、`_shot-v11.png` 和各场景截图；报告为 `_v11slate2-validation.json`，保留原 v10 公用输出。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器运行检查失败，退出码 1，报告 `ok:false`。日志：`_selftest-v11slate2-run.log`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，CDP 端点不可用。未伪造浏览器通过或截图。
- 未生成本轮 `_shot-v11slate2.png`；已有 `_shot-v11.png` 是历史产物，不能作为本轮验收证据。

## 保留与待验收

`game.js`、`art.js` 相对基线无修改。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流与 ≤4 声部逻辑均保留；无依赖或构建变化。

CSS 触控 ≥44px、竖屏 notice +176px、HUD 尺寸及滚动规则未改。现有浏览器自测覆盖 844×390、390×844、320×568，HUD 高度 140–151px、notice gap ≥8px、安全区、触控和死亡长文本滚动；本轮未能执行这些浏览器断言。

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，检查普通死亡碑面及长文滚动，确认正文、横纹与首行层级；真实 iOS Safari、安全区及帧率实测仍待完成。

## 浏览器补跑（runner）
- session `01a1a8bd-5161-7263-88f0-bad584309fac`
- see `_selftest-v11slate2-run.log`
