# XI钉 / v11-bolt 交接

基线：`b93e4a5cccb6c93e28ef92f6685097e68e89065c`。原地修改，未 commit / push。

## 修改

- `art.js`：六种模块共用木底座的两处既有 2×2 钉头加入 1×1 左上微高光。左钉为柔和象牙色、右钉为较暗黄铜色，其余像素保留冷暗凹槽；没有扩张轮廓或增加光晕。
- 复用原 40×48 模块缓存，仅启动时每种模块多两次矩形绘制；不增加逐帧 draw call、画布、动画、粒子、滤镜、依赖或构建步骤。现有 fine 精灵的 unit=2 保持不变，模块原尺寸与单位也未改动。
- `sw.js` CACHE → `endless-sea-drift-v11-bolt`；`index.html` edition → `XI钉`；CHANGELOG 中文条目前置、README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、浏览器 edition 断言、截图及报告副本切换为 bolt。浏览器成功时输出 `_shot-v11bolt.png`、`_shot-v11.png` 及 bolt 各场景图；本轮报告为 `_v11bolt-validation.json`。

## 保留范围

`game.js`、`styles.css` 无修改；玩法数值、战斗、HP、AI、合成、存档 key、迁移与偏好均不变。30fps、最多 4 声部、触控尺寸、竖屏 notice +176px 与 HUD 布局保持原值。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器启动失败，退出码 1；报告 `ok:false`。
- Chromium 报 `FATAL:content/browser/sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。日志：`_selftest-v11bolt-run.log`。
- 没有生成本轮截图；既有 `_shot-v11.png` 未更新，不作为本轮视觉证据。兼容输出 `_v10-validation.json` 已恢复基线，保留 bolt 的真实报告。
- 本轮未实测钉栓昼夜／风暴观感、触控 ≥44px、notice gap ≥8px、HUD 高度、帧率或 iOS Safari。自测仍保留布局断言，在可用 Chromium 环境重跑即可生成上述截图；iOS Safari 需真机复核。

## 浏览器补跑（runner）
- session `01a1a7f8-430a-7980-9fc1-c00c1e0204d0`
- see `_selftest-v11bolt-run.log`
