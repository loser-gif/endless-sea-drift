# XI金2 / v11-gilt2 交接

基线：`9b46b5b4c6bbbe947e6a3e2eb757c3c8c8bb33ef`。原地编辑，未 commit / push，既有未跟踪文件保留。

## 改动

- `styles.css`：航程文字改为浅暖金 `#ead9b2`，已装弹文字改为 `#ffe5b2`；航程与弹药复用原有单层 1px 暗影并微调底色，弹药增加 lining-nums。空弹警示色与库存样式保留，无新增阴影层、动画、滤镜、粒子、依赖或构建。
- Warp 航程及暂停／终章统计的等宽字体、齐宽数字、字距规则完整保留。字号、行高、边距、触控尺寸及竖屏 notice +176px 均未改。
- `sw.js` CACHE → `endless-sea-drift-v11-gilt2`；`index.html` edition → `XI金2`；CHANGELOG 中文条目前置，README 近况同步。
- `_selftest-v10.mjs` 的 cache、edition 断言、报告和截图路径同步 gilt2。浏览器成功时生成 `_shot-v11gilt2.png`、复制至 `_shot-v11.png`，并生成各视口辅助截图；保留 v10 兼容输出。

## 保留范围

`game.js` 与 `art.js` 相对基线无改动。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 调度及 ≤4 声部实现不变。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 已运行 `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1，总结果 **ok:false**。
- 报告：`_v11gilt2-validation.json`；日志：`_selftest-v11gilt2-run.log`；兼容报告 `_v10-validation.json` 同步。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本轮未生成 `_shot-v11gilt2.png`；既有 `_shot-v11.png` 为历史截图，未复制旧图充作新结果。

## 待补验

浏览器可用后重跑 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 下的数字清晰度、长航程和装弹／空弹状态。脚本保留触控 ≥44px、竖屏 HUD 高 140–151px、notice gap ≥8px / offset +176px、安全区及卡片滚动断言。本轮未实测浏览器布局、视觉效果或帧率；iOS Safari 字体回退与真机表现仍待验证。

## 浏览器补跑（runner）
- session `01a1a873-18e5-72b1-98c5-95aa11ea9d65`
- see `_selftest-v11gilt2-run.log`
