# XI刘 / v11-notch 交接

基线：`896e22dcfd22b3bff9ed38682a671f7cc7b00d3b`。原地编辑，未 commit / push；既有未跟踪文件未清理。

## 改动

- `styles.css`：音效解锁提示改为静态黄铜铭牌，替换原有表面与阴影，取消发光动画；顶部避开刘海 8px，左右按安全区限制宽度，文字可换行。提示仍为穿透指针的 status，不改变音频解锁行为。
- 提示显示期间，overlay 顶部额外预留 44px，卡片最大高度同步缩减，沿用内部滚动。横屏 notice 右侧补齐安全区。
- HUD 尺寸与竖屏 notice +176px 规则未改；无新依赖、滤镜、粒子或动画。
- CACHE：`endless-sea-drift-v11-notch`；edition：`XI刘`；CHANGELOG 中文条目前置，README 近况同步。
- `_selftest-v10.mjs` 更新缓存、edition、报告与截图路径；保留 `_shot-v11.png` 和 v10 兼容输出。增加三种视口的模拟安全区音效提示检查：边界、卡片间距 ≥8px、文字不裁切、无动画、指针穿透；成功时输出 `_shot-v11notch-safe-*.png`。

## 保留范围

`game.js`、`art.js` 与基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 节流与 ≤4 声部逻辑不变。交互目标原有 ≥44px 规则保留。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器失败，退出码 1。
- `_v11notch-validation.json`：`ok:false`，同步兼容 `_v10-validation.json`。
- Chromium 启动报错 `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器通过。
- 本轮未生成 `_shot-v11notch.png`；现有 `_shot-v11.png` 为历史截图。脚本已配置浏览器成功时复制上述两份，并输出横竖屏与安全区检查截图。

## 待复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`。检查 844×390、390×844、320×568 的安全区铭牌与卡片间距、长卡片按钮可滚动到达，以及竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px。模拟 inset 检查不能替代 iOS Safari 实机；实际刘海、横竖屏切换与帧率尚未实测。

## 浏览器补跑（runner）
- session `01a1a79a-99a4-75b0-bec5-a337f8b78f90`
- see `_selftest-v11notch-run.log`
