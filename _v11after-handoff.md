# XI续 / v11-after 交接

基线：`44f8991110d0584f2502f3260b341f0058b6c88f`。原地修改，未 commit / push。

## 修改

- `sw.js` CACHE 更新为 `endless-sea-drift-v11-after`；`index.html` `.edition` 更新为 `XI续`。
- `styles.css` 仅修改现有版签文字色 `#ffe4aa` → `#ead8ad`、边框色 `#dbb77980` → `#c7ad7980`，衔接音效铭牌黄铜色；未增加图层、动画、滤镜、粒子或布局占位。
- 前置中文 CHANGELOG，更新 README 近况及英文 edition。
- `_selftest-v10.mjs` 的 report.cache、浏览器版签断言、所有场景截图及报告输出切换至 after；主截图成功时复制至 `_shot-v11after.png` 与 `_shot-v11.png`。

## 保留范围

`game.js`、`art.js`、`manifest.webmanifest` 与基线逐字节一致。玩法数值、战斗、HP、AI、合成、存档键、迁移和偏好不变。30fps 配置、最多 4 声部不变，无新增依赖或构建。

CSS 只替换两个颜色值：触控尺寸、HUD 几何、安全区与竖屏 notice +176px 均保持原样。现有浏览器自检仍要求触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px，并覆盖 390px / 320px 竖屏与模拟安全区。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs` 和 `git diff --check` 通过。
- `node _selftest-v10.mjs` 退出码 1：69 项非浏览器检查通过；Chromium 启动失败，调试端点不可用，报错 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。
- `_v11after-validation.json` 如实记录 `ok:false` 与 after CACHE；完整日志 `_selftest-v11after-run.log`。
- 本轮未生成 `_shot-v11after.png`，未以历史截图冒充；既有 `_shot-v11.png` 保持不变。共享 `_v10-validation.json` 已恢复运行前内容。

在可运行 Chromium 的环境执行 `node _selftest-v10.mjs` 可生成 after 截图并复核布局。浏览器布局、离线缓存更新、iOS Safari 实机触控与持续 30fps 本轮未验证。

## 浏览器补跑（runner）
- session `01a1a84a-9727-7fd3-b32f-d728fbfff900`
- see `_selftest-v11after-run.log`
