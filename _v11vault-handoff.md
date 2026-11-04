# XI库 / v11-vault 交接

基线：`d99fba29abb452a183f441c197c8c118e368d9b6`。原地修改，未 commit / push。

## 变更

- `styles.css` 直接调整背包既有规则：青灰缎面、上左亮 / 下右暗黄铜斜边、两条 1px 内阴影。加工物资提亮顶边，弹药采用偏暖面板；普通标签、数量、炖菜与空库存提示色保持层级。
- 清除竖屏旧边框色覆盖，使各方向复用同一材质；四列 / 竖屏五列网格、字号、padding、gap、边框宽度均未改变。背包铭牌仍为只读信息，所有交互控件尺寸不变。
- CACHE → `endless-sea-drift-v11-vault`；edition → `XI库`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` report.cache 与截图 / 报告副本路径切换至 vault：`_v11vault-validation.json`、`_shot-v11vault.png`、`_shot-v11.png`，竖屏副本为 `_shot-v11vault-portrait.png` / `_shot-v11vault-small-portrait.png`。

## 保留项

`game.js`、`art.js` 与基线完全一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 配置与 ≤4 声部逻辑未修改。无新依赖、构建、粒子、滤镜或动画。

竖屏 notice 最终偏移仍为 +176px。既有自测覆盖交互触控 ≥44px、库存无裁切、竖屏 gap≥8px、HUD 高度≤168px 与模拟安全区；本轮浏览器未启动，不能声称这些布局检查通过。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器运行失败，退出码 1。
- `_v11vault-validation.json` 为真实 `ok:false`；兼容报告 `_v10-validation.json` 同步，日志为 `_selftest-v11vault-run.log`。
- Chromium 启动错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮未生成 vault 截图；未复制历史截图冒充结果，既有 `_shot-v11.png` 保留为历史产物。
- 在可用 Chromium 环境运行 `node _selftest-v10.mjs` 可刷新截图和三种视口检查。视觉效果、iOS Safari 实机表现及实际帧率仍待验证。

## 浏览器补跑（runner）
- session `01a1a758-a831-7730-a4f1-c76d571d8d40`
- see `_selftest-v11vault-run.log`
