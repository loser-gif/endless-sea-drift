# XI锁 / v11-lock2 交接

基线：`ec376f8abde79bdad35289b1289592ed9fa8d367`。原地编辑，未 commit / push。

## 改动

- `index.html`：edition → `XI锁`；暂停按钮的 Ⅱ 字符替换为 `aria-hidden` 的 CSS 锁图标，中文按钮名称仍为“暂停”。
- `styles.css`：8×7px 黄铜锁体、锁梁与锁孔；卡片左右内侧各一个 6×24px 静态铰链，位于边框与内容之间，不拦截指针。使用普通边框与渐变，无动画、滤镜、粒子、新依赖或构建。
- 保留按钮 ≥44px 最小高度、卡片内边距及滚动规则；竖屏 notice +176px 和 HUD 布局规则不变。
- `sw.js` CACHE → `endless-sea-drift-v11-lock2`；CHANGELOG 顶部中文记录和 README 近况已同步。
- `_selftest-v10.mjs` 的 report.cache、版签断言、报告和截图路径已切换 lock2。浏览器成功时输出 `_shot-v11lock2.png`、复制至 `_shot-v11.png`，并生成暂停、竖屏、安全区等辅助截图。

## 保留范围

`game.js` 与 `art.js` 相对基线无改动。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 调度与 ≤4 声部实现保持不变。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 已运行 `node _selftest-v10.mjs`：69 项非浏览器检查通过，总结果 **ok:false**。
- 报告：`_v11lock2-validation.json`；日志：`_selftest-v11lock2-run.log`；脚本同时更新兼容报告 `_v10-validation.json`。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。本轮未生成截图；既有 `_shot-v11.png` 不代表本轮效果，未复制旧图充作新结果。
- 浏览器可用后重跑同一脚本，复核横屏 / 390px 竖屏 / 320px 小竖屏的锁图标、铰链、CTA ≥44px、HUD 高 140–151px、notice 间距 ≥8px，以及安全区和卡片滚动。现有脚本保留上述布局断言。
- 视觉效果、实际布局与帧率尚未通过浏览器验证；iOS Safari 真机未验证。

## 浏览器补跑（runner）
- session `01a1a868-c210-7ac0-a4df-de63ed74e057`
- see `_selftest-v11lock2-run.log`
