# XI彡 / v11-silk 交接

基线：`004f8414946fb3ea1b9f1c77d4c57bb79157c1e9`。原地修改；未 commit / push。

## 变更

- `styles.css` 末尾新增 Silk 样式：浮层缎面渐变、细黄铜内框、柔和阴影与主 CTA 高光；无动画、粒子、滤镜或依赖新增。
- 死亡统计保留原文与换行，增加低对比行纹底衬、28px 行距、等宽数字及窄屏长文本换行。仅 CSS，不拆分或重算统计数据。
- 启航 / 继续漂流 / 重新启航、静音、新的漂流按钮保留；浮层按钮最小 44px，间隔 10px，死亡主 CTA 间隔 16px。保留卡片高度上限、纵向滚动和安全区。
- `sw.js` CACHE → `endless-sea-drift-v11-silk`；`index.html` edition → `XI彡`；CHANGELOG 顶部与 README 近况同步。
- `_selftest-v10.mjs` report.cache、报告复制及截图路径已转向 silk，成功时输出 `_shot-v11silk.png`、`_shot-v11silk-portrait.png`、`_shot-v11silk-small-portrait.png`，保留 `_shot-v11.png` 兼容复制。

## 保留项

`game.js`、`art.js` 无改动；全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好不变。30fps 限制与 ≤4 声部逻辑不变，无新增构建步骤。

HUD / notice 未修改：基线含 +215px 路径，后续 port 规则以 +176px 覆盖，本次均保留。原自测仍检查竖屏 HUD / notice 间距、≥44px 触控、模拟安全区及死亡卡片滚动 CTA 可达性。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器运行项失败，退出码 1。
- `_v11silk-validation.json`：`ok:false`；兼容报告 `_v10-validation.json`。日志：`_selftest-v11silk-run.log`。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 本次没有生成 silk 截图；现有 `_shot-v11.png` 为旧产物，未覆盖或冒充本次结果。
- 待浏览器环境可用时重跑 `node _selftest-v10.mjs`；卡片实际视觉、三种视口下 CTA 可达性、iOS Safari 实机触控与实际帧率尚未验证。

## 浏览器补跑（runner）
- session `01a1a724-a5e2-7721-be9c-6c1d4c48be87`
- see `_selftest-v11silk-run.log`
