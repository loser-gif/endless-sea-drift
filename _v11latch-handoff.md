# XI闩 / v11-latch 交接

基线：`637450477cbd7d6099388fab3c119a416e7e3fc5`。原地修改，未 commit / push。

## 改动

- `styles.css`：动作区主按钮与弹层启航 / 继续按钮采用暖黄铜表面，次按钮采用青灰金属表面；四边明暗形成斜边，`:active` 与动作按钮 `.pressed` 改为反向渐变和内凹阴影。替换既有阴影，不增加动画、滤镜、粒子或依赖。
- 扩建选中态保留暖色左侧标记及文字色，按下时仍可辨认；原焦点轮廓、禁用透明度和减少动态效果规则保留。禁用动作按钮不位移。暂停与音效按钮沿用既有样式。
- 不改宽高、内外边距、边框宽度或布局；触控 ≥44px 规则、竖屏 notice +176px 和 HUD 规则保持。
- `sw.js` CACHE → `endless-sea-drift-v11-latch`；`index.html` edition → `XI闩`；CHANGELOG 中文条目前置，README 近况与 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言及输出路径。浏览器成功时复制 `_shot-v11latch.png` / `_shot-v11.png`，并输出 latch 竖屏与暂停截图。报告复制到 `_v11latch-validation.json`，保留原 `_v10-validation.json` 输出。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器启动失败，退出码 1；`_v11latch-validation.json` 为 `ok:false`。详见 `_selftest-v11latch-run.log`。
- Chromium 错误：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用，未伪造成功或截图。
- 未生成 `_shot-v11latch.png`。现有 `_shot-v11.png` 为历史产物，不能作为本次验收证据。
- `game.js`、`art.js` 与基线无差异：全部玩法数值、战斗 / HP / AI、合成、存档键与迁移、偏好、30fps 节流和 ≤4 声部逻辑不变。未进行帧率实测。

## 待浏览器复核

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，确认 844×390、390×844、320×568 的触控 ≥44px、竖屏 HUD 高度 140–151px、notice gap ≥8px、+176px 偏移和安全区。检查主次按钮松开 / 按下、扩建选中后按下、禁用放置按钮、键盘焦点与减少动态效果；在 iOS Safari 复核触摸按压与松开、暂停卡片滚动及帧率。本次这些浏览器和真机项目尚未验证。

## 浏览器补跑（runner）
- session `01a1a77e-c129-7752-91a1-e9c09308bcc1`
- see `_selftest-v11latch-run.log`
