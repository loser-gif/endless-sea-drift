# XI龙 / v11-keel 交接

- 基线：`56c2609df8da52a18b7fd39a5465bfe3ac9caee3`。就地修改，未 commit / push。
- 美术仅改 `art.js`：四张木板缓存的底缘改为湿木青灰过渡、船底 AO 与窄接触暗边，统一现有海水阴影材质。绘制范围位于原有不透明区域，缓存仍为 80×104、显示仍为 40×52；没有新增缓存、逐帧绘制、粒子、滤镜或依赖。
- `sw.js` CACHE 为 `endless-sea-drift-v11-keel`；`index.html` edition 为 `XI龙`。CHANGELOG 已前置中文记录，README 近况已更新。
- `_selftest-v10.mjs` 已切换报告 cache、报告副本及截图目标：`_v11keel-validation.json`、`_shot-v11keel.png`、`_shot-v11.png`，竖屏副本亦使用 keel 名称。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器运行检查失败，退出码 1；报告真实 `ok:false`。
- Chromium 存在，但调试端点未能启动：`FATAL:content/browser/sandbox_host_linux.cc:41 Check failed: . shutdown: Operation not permitted (1)`。没有伪造浏览器通过，也没有将旧截图复制为本轮成果。
- 本轮未生成 `_shot-v11keel.png`；现有 `_shot-v11.png` 是历史产物，不代表 keel。可用浏览器环境中重新运行上述自测后才会刷新两张截图。
- 未修改 `game.js`、`styles.css`：玩法数值、战斗、合成、存档键/版本、迁移、偏好、30fps 配置和 ≤4 声部逻辑保留。逻辑自测覆盖存档迁移、战斗、合成、音频上限等。
- 竖屏 notice +176px、触控布局原样保留；gap≥8、HUD 高度和触控≥44px 的浏览器断言仍在，但本轮未执行到。未验证 iOS Safari 实机性能、视觉与触控。

## 浏览器补跑（runner）
- session `01a1a74f-c5f6-7901-bc58-8051cc70c42e`
- see `_selftest-v11keel-run.log`
