# XI冠 / v11-crown 交接

基线：`74f128051316dd1383cddef7f5423e1949d12b7f`。原地修改，未 commit / push。

## 变更

- `styles.css` 在既有 Silk 规则内调整，未追加效果层：卡片标题字距从固定 5px 改为 `.14em`（30px 标题为 4.2px，24px 标题为 3.36px）；≤360px 窄屏使用 `.1em`。
- 复用既有 3px 卡片顶边作黄铜冠线，颜色由 `#e5c999` 收敛为 `#d3b781`，边框尺寸不变。保留 Silk 缎面背景、阴影、内框、标题底线和滚动布局；暂停视图原有低亮顶线仍保留。
- CACHE → `endless-sea-drift-v11-crown`；edition → `XI冠`；CHANGELOG 前置中文记录，README 近况同步。
- `_selftest-v10.mjs` report.cache、报告副本及截图路径切换到 crown：`_v11crown-validation.json`、`_shot-v11crown.png`、`_shot-v11.png`，竖屏副本为 `_shot-v11crown-portrait.png` / `_shot-v11crown-small-portrait.png`。

## 保留项

`game.js`、`art.js` 与 HEAD 完全一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 配置及 ≤4 声部逻辑未变；无新依赖、构建、粒子、滤镜或动画。

HUD 与 notice 规则未修改，竖屏最终偏移仍为 +176px。触控目标 ≥44px、卡片按钮间隔、滚动和安全区规则保留。现有浏览器断言仍覆盖竖屏 gap≥8、HUD 高度≤168px、触控尺寸及 CTA 可达性，但本轮浏览器未能启动，不能据此宣称实际布局验证通过。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器运行失败，退出码 1。
- `_v11crown-validation.json`：真实 `ok:false`；兼容报告 `_v10-validation.json` 已同步；日志 `_selftest-v11crown-run.log`。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮未生成 crown 截图，未复制历史截图冒充结果；现有 `_shot-v11.png` 为历史产物。
- 在可用浏览器环境重跑 `node _selftest-v10.mjs` 后，才能刷新截图并验证三种视口。卡片视觉、iOS Safari 实机触控及实际帧率尚未验证。

## 浏览器补跑（runner）
- session `01a1a752-94fd-71d1-bbd2-1bd5d9a0ee8f`
- see `_selftest-v11crown-run.log`
