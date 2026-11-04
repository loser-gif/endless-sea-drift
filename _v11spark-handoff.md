# XI弹 / v11-spark 交接

基线：`605ac0bd1bd2878ae0655ca0cb28c15ee2d5d4c3`。原地修改，未 commit / push。

## 变更

- `styles.css` 直接调整既有弹药规则：青灰黄铜铭牌、上左亮 / 下右暗的斜边；冷却槽用暗海蓝底面与低亮黄铜纵向填充，保留 64×5px 尺寸和原有 scaleX 更新。
- 空弹药仍显示暖铜文字、边框、左侧警示线及暖铜冷却填充；`弹药用尽 · 弱射中` 的游戏提示逻辑未改动。
- CACHE → `endless-sea-drift-v11-spark`；edition → `XI弹`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` report.cache 与产物副本路径已切换：`_v11spark-validation.json`、`_shot-v11spark.png`、`_shot-v11.png`；竖屏截图路径为 `_shot-v11spark-portrait.png` / `_shot-v11spark-small-portrait.png`。

## 保留项

`game.js`、`art.js` 与基线完全一致。玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 配置与 ≤4 声部逻辑均未修改。无新依赖、构建、粒子、滤镜或动画；仅使用静态渐变及细内阴影。

触控尺寸与所有布局规则未变；竖屏 notice 最终偏移保留 +176px。既有浏览器断言覆盖触控 ≥44px、竖屏 gap≥8px、HUD 高度≤168px 和安全区，但本轮浏览器启动失败，未获得实际布局验证结果。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器运行失败，退出码 1。
- `_v11spark-validation.json` 为真实 `ok:false`，兼容报告 `_v10-validation.json` 同步；日志 `_selftest-v11spark-run.log`。
- Chromium：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。
- 本轮未生成 spark 截图，未复制历史截图冒充结果；现有 `_shot-v11.png` 仍为历史产物。
- 在可用 Chromium 环境运行 `node _selftest-v10.mjs` 可刷新截图并验证三种视口。视觉效果、iOS Safari 实机触控与实际帧率仍待验证。

## 浏览器补跑（runner）
- session `01a1a755-6553-7892-86b1-a00968b51f8f`
- see `_selftest-v11spark-run.log`
