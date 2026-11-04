# XI✧ / v11-ember 交接

基线：`f5d0c9740b886813af4d6608b6e2fde4e8e428b0`。原地修改，未 commit / push。

## 变更

- `art.js` 仅 alpha：炉火及灯芯两级从不透明降为 `e6` / `d9`，RGB、尺寸与绘制次数不变。
- 已有夜间灯晕 alpha `.80 → .58`；有灯夜色洗色 `.26 → .29`；夜间暗角 `.48 → .54`，收敛暖光并压低 HUD 后方背景亮度。共享 halo 缓存、海面 bloom、雨线与白天效果保持不变，无新层、依赖、滤镜或粒子。
- `sw.js` CACHE 为 `endless-sea-drift-v11-ember`；`index.html` edition 为 `XI✧`；CHANGELOG 顶部及 README 近况已更新。
- `_selftest-v10.mjs` 更新 report.cache、报告复制及截图路径；夜间展示场景加入 lamp / stove，供浏览器可用时审阅。

## 保留项

`game.js`、`styles.css` 均未修改：全部玩法数值、战斗 / HP / AI、合成、存档 / 迁移 / 偏好、30fps 限制、≤4 声部、触控尺寸与安全区逻辑保留。存档仍为 v10，偏好仍为 v9。

基线 CSS 含 +215px notice 路径，后续 port 规则覆盖为 +176px；本次均未改动。真实竖屏可用性尚待浏览器复核，不能以静态检查代替。

## 验证与产物

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项浏览器运行失败，退出码 1。
- `_v11ember-validation.json`：`ok:false`；兼容输出 `_v10-validation.json`。日志：`_selftest-v11ember-run.log`。
- Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。
- 本次未生成 `_shot-v11ember.png`；现有 `_shot-v11.png` 是旧产物，不代表 ember 验证。脚本已配置成功时复制到 `_shot-v11ember.png` 和 `_shot-v11.png`，并输出 ember 两种竖屏截图。
- 待可用浏览器运行同一自测，再检查夜间灯 / 炉、HUD 可读性、横竖屏 ≥44px 目标与 notice 间距；iOS Safari 实机及实际帧率未验证。

## 浏览器补跑（runner）
- session `01a1a71d-2bc5-7ae1-bf80-64a5623811af`
- see `_selftest-v11ember-run.log`
