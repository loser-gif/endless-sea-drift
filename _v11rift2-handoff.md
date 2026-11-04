# XI隙2 / v11-rift2 交接

基线：`043aa62347f0fe0700d71f30a72af89ad6d7e445`。原地修改；未 commit / push。

## 改动

- `styles.css`：HUD 既有 2px / 4px 内阴影加深；开始与结算卡片复用现有阴影层形成窄接缝 AO，并压暗 5px 内框；暂停卡片增加一层轻量 inset 接缝阴影。无新增滤镜、动画、依赖或构建。
- 不改尺寸、边距、排版和触控规则。竖屏 notice 仍为 +176px；44px 触控规则保留。
- `sw.js` CACHE 为 `endless-sea-drift-v11-rift2`；`index.html` edition 为 `XI隙2`。
- 已更新 CHANGELOG-v11.md、README 近况及自测版本断言、报告和截图路径。
- `game.js`、`art.js` 未修改；玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 配置与音频声部限制原样保留。

## 验证

- `node --check sw.js`：通过。
- `node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：退出码 1；69 项通过，浏览器启动失败，`_v11rift2-validation.json` 为 `ok:false`。
- Chromium 错误：`sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。日志：`_selftest-v11rift2-run.log`。
- 未生成本轮截图，未复制旧截图冒充结果。自测已配置成功后输出 `_shot-v11rift2.png`、`_shot-v11.png` 及 rift2 横竖屏、暂停、结算、安全区截图。
- 仍需在可用 Chromium 中重跑自测，确认 HUD 高度 140–151px、notice 间距 ≥8px、偏移 176px 和触控 ≥44px；iOS Safari 实机视觉与性能尚未验证。保留 30fps 配置不代表本轮已实测帧率。

## 浏览器补跑（runner）
- session `01a1a8b4-ceaa-7ad0-8c19-6092c49a0d61`
- see `_selftest-v11rift2-run.log`
