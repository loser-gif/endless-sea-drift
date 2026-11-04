# XI铆 / v11-rivet 交接

基线：`2a6443f7678f41fa3320c0a19b98f27fd2c16da0`。原地修改，未 commit / push。

## 修改

- `styles.css`：HUD 原顶部黄铜导轨两端各加一个 4px 静态 CSS radial 铆钉。空伪元素绝对定位、pointer-events:none；原导轨保留，不占布局、不新增动画、滤镜、粒子、依赖或 Canvas 绘制。
- `sw.js` CACHE → `endless-sea-drift-v11-rivet`；`index.html` edition → `XI铆`。
- CHANGELOG 前置中文短记录，README 近况及 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言、所有截图及报告复制路径；成功时输出 `_shot-v11rivet.png`、`_shot-v11.png` 及 rivet 场景截图。

## 保留

`game.js`、`art.js` 与基线一致。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部实现不变。原触控尺寸、HUD 几何布局、竖屏 notice +176px 规则不变；没有更改任何旧 CSS 声明。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，浏览器检查失败，退出码 1。
- `_v11rivet-validation.json` 如实 `ok:false`；Chromium 调试端点不可用，报 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。日志：`_selftest-v11rivet-run.log`。
- 未生成本轮截图，也未复制旧图冒充。历史 `_shot-v11.png` 保持不变；共享 `_v10-validation.json` 恢复基线内容。

## 待复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`，确认横屏、390px / 320px 竖屏和模拟安全区的真实画面。现有自测保留 ≥44px 触控、HUD 高度 140–151px、notice gap ≥8px 和 +176px 偏移断言，本轮未能执行这些浏览器断言。iOS Safari 真机触控与帧率未验证。

## 浏览器补跑（runner）
- session `01a1a837-a742-7ab2-9ab2-a61d2704d1d4`
- see `_selftest-v11rivet-run.log`
