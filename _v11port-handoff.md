# XI▥ / v11-port 交接

- 基线：`286c6d80d8f04d750ba664f66d1af9474fe02983`。原地修改，未 commit / push。
- `styles.css` 末尾仅竖屏覆盖：标题 / 眉题明确行高，收紧航程、弹药、生命读数与库存留白。所有读数保留；暂停按钮显式保持 ≥44×44px，动作按钮、原生选择器与摇杆尺寸沿用。
- notice 从顶部安全区 +215px 改为 +176px；保留左右安全区、两行折行和原有提示行为。目标 HUD ≤168px、提示间距 ≥8px；这些是待浏览器验证的断言，不是已测量结果。
- CACHE：`endless-sea-drift-v11-port`；HTML edition：`XI▥`；CHANGELOG-v11.md 已前置中文记录，README 近况已更新。
- `_selftest-v10.mjs` 已更新 cache 与产物路径；增加 390×844、320×568 竖屏高度 / 提示间距及模拟安全区断言。成功运行时生成 `_shot-v11port.png`、`_shot-v11.png`，另留两张竖屏截图 `_shot-v11port-portrait.png`、`_shot-v11port-small-portrait.png`。

## 验证结果

- `node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- `node _selftest-v10.mjs` 已实际执行：68 项 Node / VM 检查通过；浏览器检查失败，总报告 `ok:false`。
- Chromium 调试端口未启动：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`。未伪造浏览器成功，未复制历史截图作为本版截图；现有 `_shot-v11.png` 不是本次生成。
- 报告：`_v11port-validation.json`（兼容输出 `_v10-validation.json`）；日志：`_selftest-v11port-run.log`。
- Chromium 可用环境需重跑自测；iOS Safari 实机需复核 320 / 390 宽度、刘海与底部安全区、长提示换行、库存读数及暂停按钮。此次无法确认真实布局或帧率。

## 范围保证

`game.js`、`art.js` 未改，游戏数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部逻辑保持原样。无新依赖、构建、粒子或滤镜。工作区原有 runner 日志等未清理。

## 浏览器补跑（runner）
- session `01a1a719-6c55-7462-929a-6a2ba6d6f6fe`
- see `_selftest-v11port-run.log`
