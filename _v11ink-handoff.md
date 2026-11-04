# XI墨 / v11-ink 交接

基线：`8523ec95a10fa3ae455d13de7f98631bc8d1739a`。原地修改，未 commit / push。

## 修改

- `styles.css` 直接微调现有规则：HUD 眉题字距 1.8→1.5px、字重 500；竖屏眉题字距 1.4→1.1px。卡片眉题 1.8→1.6px，小屏 1.2→1.1px。
- 航程字距 .4→.25px（竖屏仍为 0），字重 500→600；库存标签字重 500、字距 .1px，数字独立保持字距 0、字重 600 与等宽数字。
- 未更改字号、字体族、行高、盒尺寸、布局间距、触控规则；未新增字体下载、动画、滤镜、粒子、依赖或构建步骤。字形宽度及换行是否完全不影响布局仍需浏览器确认。
- `sw.js` CACHE → `endless-sea-drift-v11-ink`；`index.html .edition` → `XI墨`。
- `CHANGELOG-v11.md` 顶部新增中文记录；README 近况一行及英文 edition 同步。
- `_selftest-v10.mjs` report.cache 与输出切换至 `_v11ink-validation.json`、`_shot-v11ink.png`；保留 `_shot-v11.png` 和 v10 兼容输出。竖屏截图目标为 `_shot-v11ink-portrait.png`、`_shot-v11ink-small-portrait.png`。

## 保留范围

`game.js`、`art.js`、`manifest.webmanifest` 与基线完全一致。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 限制及 ≤4 声部逻辑未改。竖屏 notice +176px 与 ≥44px 触控规则保留，自测仍要求 HUD 高度 ≤168px、通知间距 ≥8px。

## 验证与限制

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器启动失败，退出码 1。
- `_v11ink-validation.json`：`ok:false`，缓存名正确；日志 `_selftest-v11ink-run.log`，兼容报告 `_v10-validation.json`。
- 真实 Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。
- 本次未生成 ink 截图，未覆盖 `_shot-v11.png`；已有旧截图不能作为此次视觉验收。
- 浏览器可用后运行 `node _selftest-v10.mjs`，检查 844×390 横屏、390×844 / 320×568 竖屏的换行、库存溢出、HUD 高度、通知间距、触控和安全区。iOS Safari 实机、无布局偏移、实际帧率及离线缓存更新仍待验证。

## 浏览器补跑（runner）
- session `01a1a735-9a0a-7122-a06f-75d0437b5d51`
- see `_selftest-v11ink-run.log`
