# XI航2 / v11-warp2 交接

基线 HEAD：`aa8e349715cabce383a67a16fa526038d8952ad5`。原地编辑，未 commit / push；既有未跟踪文件保留。

## 改动

- `styles.css`：直接细化原有 Warp 牌匾，底色由 `#c8ad6c0a` 改为 `#b8b7ae0d`，底边由 `#c8ad6c40` 改为 `#b8b7ae33`，使中性灰底衬托鎏金读数。保留等宽字体、齐宽数字、文字颜色与阴影；未增加效果层、动画、滤镜、粒子或依赖。
- CACHE → `endless-sea-drift-v11-warp2`；edition → `XI航2`。CHANGELOG 中文条目前置，README 近况与 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、报告与本轮截图副本路径同步。成功时输出 `_shot-v11warp2.png` / `_shot-v11.png`，报告 `_v11warp2-validation.json`；保留 v10 共用输出。

## 保留范围

`game.js`、`art.js` 相对基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流与 ≤4 声部上限不变。鎏金库存数字规则未改。

CSS 仅改变牌匾两处颜色及注释，字号、字体、行高、边距、触控尺寸、安全区、HUD 布局与竖屏 notice +176px 均保持原样。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1；`_v11warp2-validation.json` 为 `ok:false`，兼容报告 `_v10-validation.json` 同步。
- Chromium 实际启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；CDP 端点不可用。日志：`/tmp/selftest-v11warp2.log`。
- 未生成 `_shot-v11warp2.png`。已有 `_shot-v11.png` 为历史产物，不能作为本版验证证据。

## 待复核

在可运行 Chromium 的环境执行 `node _selftest-v10.mjs`。既有浏览器检查覆盖 844×390、390×844、320×568、≥44px 触控、竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px、安全区与统计卡片滚动；本轮未能执行。复核长航程及暴风雨文字、牌匾对比度；真实 iOS Safari 显示、安全区与帧率尚未实机验证。

## 浏览器补跑（runner）
- session `01a1a8c2-fd60-7043-8119-02def9bb1e42`
- see `_selftest-v11warp2-run.log`
