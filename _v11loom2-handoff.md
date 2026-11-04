# XI远2 / v11-loom2 交接

基线：`402d502bffdb72d55c13c13466afc246a7678bf3`。原地修改，未 commit / push。

## 改动

- `art.js`：仅改远岛雾幕缓存生成。岛形在 96×64 临时画布绘制，再平滑回采到原 192×128 雾幕；轮廓色由 `#557a79` 调为 `#5e807e`，顶部 / 中段 alpha 从 `2e / 38` 收敛到 `26 / 30`，岛脚仍渐隐至透明。保留原山形位置、loom 雾色与覆盖范围。
- 临时画布仅在 resize 时创建（原始像素约 24 KiB），不增加逐帧绘制、粒子、滤镜、依赖或构建步骤。
- `sw.js` CACHE：`endless-sea-drift-v11-loom2`；`index.html` edition：`XI远2`。更新 CHANGELOG 和 README。
- `_selftest-v10.mjs`：报告 cache、浏览器版签断言及全部版本截图 / 报告路径更新为 loom2；保留通用 `_shot-v11.png` 副本。

## 保留项

`game.js`、`styles.css` 未修改：玩法数值、战斗 / HP / AI、合成、存档键、迁移及偏好均保持基线。30fps 和 ≤4 声部逻辑不变。44px 触控及竖屏 notice +176px 布局未改动。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过；总报告 `ok:false`，见 `_v11loom2-validation.json`。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。未伪造浏览器通过结果。
- 本轮未生成 `_shot-v11loom2.png`，既有 `_shot-v11.png` 不是本轮验证截图。浏览器可用后重跑脚本即可生成版本截图与通用副本。
- 竖屏 HUD 高度、notice 间距 ≥8px、触控尺寸、实际视觉与帧率尚未完成本轮浏览器验证；真实 iOS Safari 亦未验证。脚本保留横屏、390×844、320×568 和安全区布局断言。

## 浏览器补跑（runner）
- session `01a1a851-614a-7ba2-8eee-7a5bbfa3f5c6`
- see `_selftest-v11loom2-run.log`
