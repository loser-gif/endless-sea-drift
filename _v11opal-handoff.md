# XI欧 / v11-opal 交接

基线：`98eb16f66583e22ea4c4cc40e6e78c119deb74cd`。原地修改，未 commit / push。

## 修改

- `styles.css`：仅为 `#inventory>span.stew` 增加暖琥珀渐变面与黄铜边色；沿用 vault 的 1px 斜边、两条内阴影与全部几何尺寸。普通库存、弹药和空库存文字规则保持原样。
- 不增加 CSS 图层数量、阴影、动画、滤镜、粒子、依赖或构建。炖菜标签仍为只读信息。
- CACHE → `endless-sea-drift-v11-opal`，edition → `XI欧`；CHANGELOG 中文短记录前置，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言及所有版本截图/报告副本改为 opal。成功运行时输出 `_shot-v11opal.png`、`_shot-v11.png`、各场景截图及 `_v11opal-validation.json`。

## 保留

`game.js`、`art.js` 与基线一致。全部玩法数值、战斗、HP、AI、合成、存档 key、迁移、偏好保持不变。30fps 配置与最多 4 声部实现不变。
触控尺寸规则、库存网格与 HUD 高度规则不变；竖屏 notice +176px 保留。现有自测继续检查触控 ≥44px、库存不裁切、竖屏 gap≥8px、HUD 高度 140–151px 和安全区。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1；`_v11opal-validation.json` 为真实 `ok:false`。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41`，`shutdown: Operation not permitted (1)`，调试端点不可用。日志：`_selftest-v11opal-run.log`。
- 本轮未生成 opal 截图；既有 `_shot-v11.png` 未更新，不作为本轮证据。兼容输出 `_v10-validation.json` 已恢复基线，保留专属 opal 报告。
- 浏览器布局断言未执行，视觉效果、实际帧率及 iOS Safari 真机尚未验证。可用 Chromium 环境重跑 `node _selftest-v10.mjs`，再用 Safari 真机复核。

## 浏览器补跑（runner）
- session `01a1a805-ecd2-77b0-84e5-160a2e828659`
- see `_selftest-v11opal-run.log`
