# XI瞳 / v11-iris 交接

基线：`5d20dde7089bf16cae5237e81d3bf1c72b121030`。原地修改，未 commit / push。

## 修改

- `styles.css`：收拢四处重复焦点规则，按钮（含静音）与原生选择器共用 `--focus-ring: #e2c38a`；保持 2px 实线，统一 2px 外间距。移除选择器额外亮边，避免双重强调。强制配色模式使用系统 `Highlight`，保留浏览器原生焦点回退，无新阴影、动画、滤镜。
- `sw.js` CACHE → `endless-sea-drift-v11-iris`；`index.html` edition → `XI瞳`。
- 中文 CHANGELOG 已前置，README 近况与 edition 已同步。
- `_selftest-v10.mjs` 的 cache、edition 断言、报告与截图路径已切换 iris；成功运行时复制 `_shot-v11iris.png` 与 `_shot-v11.png`，附加场景截图也使用 iris 名称。

## 保留范围

`game.js`、`art.js` 未修改。玩法数值、战斗、HP、AI、合成、存档 key、迁移、偏好、30fps 与 ≤4 声部均保留。CSS 触控尺寸、HUD 高度及竖屏 notice +176px 规则未改；轮廓不参与布局，无依赖或构建新增。

## 验证与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过；浏览器启动项失败，69 项中 1 项失败，退出码 1。
- `_v11iris-validation.json`：`ok:false`。Chromium 报 `FATAL:content/browser/sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮没有生成 `_shot-v11iris.png`，没有更新既有 `_shot-v11.png`；旧图不作为本轮验证。兼容自测生成的旧版报告已还原，iris 报告保留本轮真实结果。
- 浏览器启动前失败，因此实际键盘焦点、强制配色、触控 ≥44px、notice gap ≥8px / HUD 高度及截图尚未完成本轮浏览器验证；iOS Safari 真机亦未实测。可在支持 Chromium 的环境重跑自测，再用键盘 Tab 检查按钮、静音及选择器的轮廓与滚动边缘。

## 浏览器补跑（runner）
- session `01a1a7f2-98db-7a70-840d-8f67f7b2923f`
- see `_selftest-v11iris-run.log`
