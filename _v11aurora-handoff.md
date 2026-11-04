# XI极 / v11-aurora 交接

基线：`0e6f7270eeb64bc2ebe1196900039413435a2874`。原地修改，未 commit / push。

## 修改

- `art.js`：夜间原有全屏色调填充改用 resize 时创建的渐变，在现有远景雾带内加入极轻灰蓝冷边；峰值色 `#2b3d46`，向下恢复原色 `#202e38`。沿用灯亮 / 无灯的 .25 / .35 不透明度，焦点水域及木筏色调不变。
- 原 veil 雾幕、远山、暗角、灯光与风暴层保留；无新增绘制层、粒子、滤镜、依赖或构建步骤。
- CACHE 为 `endless-sea-drift-v11-aurora`；edition 为 `XI极`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图及报告路径切换到 aurora。主图 `_shot-v11aurora.png` / `_shot-v11.png` 保留夜间雾灯船场景，移除正午覆盖；黎明、正午、黄昏与风暴图仍各自输出。

## 保留边界

`game.js`、`styles.css` 与基线逐字节一致。全部玩法数值、战斗、HP、AI、合成、存档键、迁移与偏好未改；30fps 上限与最多 4 声部实现保留。竖屏 notice +176px 保留，既有自测仍要求触控 ≥44px、HUD 高度 140–151px、notice gap ≥8px，并覆盖 390×844 / 320×568 及模拟安全区。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1；`_v11aurora-validation.json` 真实为 `ok:false`。
- Chromium 无法启动：`sandbox_host_linux.cc:41`，`shutdown: Operation not permitted (1)`；调试端点不可用。日志：`_selftest-v11aurora-run.log`。
- 未生成本轮截图；现有 `_shot-v11.png` 为历史产物，未更新，不作为本轮证据。未伪造浏览器通过结果。
- 兼容输出 `_v10-validation.json` 已恢复运行前内容；保留 aurora 专属报告与日志，未清理已有无关文件。

## 待复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`，核对夜景冷边足够轻柔、雾幕保留，并检查横竖屏 HUD、notice、触控及安全区。iOS Safari 真机画面、触控和实际 30fps 性能尚未验证；本轮不能以静态检查代替这些结论。

## 浏览器补跑（runner）
- session `01a1a820-2dd3-77a0-88f5-a2e5639fc940`
- see `_selftest-v11aurora-run.log`
