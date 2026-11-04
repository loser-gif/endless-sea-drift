# XI栏 / v11-rail 交接

基线：`60b27607a64a11e56e0a1b0580360343bca68a5c`。原地修改，未 commit / push。

## 修改

- `styles.css`：直接微调现有 HUD 和卡片规则。黄铜上左边缘偏暖亮，下右收暗；增加细下沿内阴影，复用既有内框。暂停卡片保留较柔和顶光，外投影与缎面卡片统一，去除原有宽下沿暗影。
- 仅改变边框颜色与 box-shadow，不改边框宽度、布局尺寸、间距、字体、滚动及触控规则；无新增滤镜、动画、粒子、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-rail`；`index.html .edition` → `XI栏`。
- CHANGELOG-v11.md 顶部新增中文记录，README 近况一行与英文 edition 同步。
- `_selftest-v10.mjs` report.cache 与报告 / 截图路径切换至 `_v11rail-validation.json`、`_shot-v11rail.png`；保留 `_shot-v11.png` 与 v10 兼容输出。竖屏截图路径为 `_shot-v11rail-portrait.png`、`_shot-v11rail-small-portrait.png`。

## 保留范围

`game.js`、`art.js`、`manifest.webmanifest` 与基线完全一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制和 ≤4 声部逻辑未改。竖屏 notice +176px、≥44px 触控规则不变。自测仍要求竖屏 HUD 高度 ≤168px、通知间距 ≥8px。

## 验证与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器失败，退出码 1。
- `_v11rail-validation.json`：`ok:false`，缓存名正确；日志 `_selftest-v11rail-run.log`，兼容报告 `_v10-validation.json`。
- 真实 Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本次未生成 rail 截图，也未覆盖 `_shot-v11.png`；现有旧截图不能代表此次视觉验收。
- 浏览器可用后运行 `node _selftest-v10.mjs`，补验横屏、390×844 / 320×568 竖屏、HUD 高度与通知间距、触控及安全区。iOS Safari 实机、实际帧率、离线缓存更新与斜面视觉效果尚未验证。

## 浏览器补跑（runner）
- session `01a1a732-cb02-78e0-88fb-1f49183febdf`
- see `_selftest-v11rail-run.log`
