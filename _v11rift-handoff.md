# XI隙 / v11-rift 交接

基线：`fc3b9bebd908fd8fe05a6ba56bb20e5b6e9edb11`。原地编辑，未 commit / push。

## 变更

- `styles.css` 替换 HUD、启航 / 结算卡片与暂停卡片的既有 box-shadow：顶部窄幅暗接缝模拟凹入 AO，收低内框亮边，暂停层级更轻。各规则阴影层数不增加，未新增滤镜、动画、粒子、依赖或构建。
- 不修改尺寸、间距、滚动、焦点或触控规则；竖屏 notice 最终偏移保持 +176px。
- `sw.js` CACHE 为 `endless-sea-drift-v11-rift`；`index.html` edition 为 `XI隙`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache 与报告路径切换至 rift。浏览器成功时写入 `_shot-v11rift.png`、`_shot-v11.png`、两种竖屏截图及三种视口的暂停截图。

## 保留项

`game.js`、`art.js` 与基线完全一致。玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 配置与最多 4 声部逻辑均未改。

## 验证与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1；日志 `_selftest-v11rift-run.log`。
- `_v11rift-validation.json` 如实为 `ok:false`，兼容报告 `_v10-validation.json` 同步。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮未生成截图；未复制旧截图冒充验证，现有 `_shot-v11.png` 为历史产物。
- 浏览器自测已有触控 ≥44px、竖屏 HUD ≤168px / notice gap ≥8px、滚动可达、库存无裁切及模拟安全区检查，本轮未能执行验证。iOS Safari 实机、实际 30fps 和最终视觉效果仍需在可用环境确认。
- 补跑命令：`node _selftest-v10.mjs`，成功后刷新报告和截图。

## 浏览器补跑（runner）
- session `01a1a75e-bfd8-7c23-a840-adecc857a788`
- see `_selftest-v11rift-run.log`
