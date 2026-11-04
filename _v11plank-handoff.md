# XI板 / v11-plank 交接

基线：`4a328f7238c62820bcf7a90b45aa8f86dde98d98`。原地修改，未 commit / push。

## 修改

- `art.js`：存活木板的景深清晰遮罩保留原有核心及上采样留边，在外侧增加 2 / 1 个低分辨率像素的透明度过渡。外圈移除 25% 景深，内圈累计移除 62.5%，核心仍完全清除。沿用现有景深画布及平滑上采样，无新增全屏层、画布、滤镜、粒子或依赖。
- 每块存活木板增加两个低分辨率 fillRect；直接读取当前 tiles，扩建和移除不留缓存残影。相邻过渡重叠会加强清晰度；原木纹、轮廓与美术层均保留。
- bloom 原 screen 合成、.65 强度及顺序保持不变。
- CACHE 为 `endless-sea-drift-v11-plank`，edition 为 `XI板`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 的 report.cache、edition 断言、截图及报告路径已切到 plank；成功运行浏览器时输出 `_shot-v11plank.png`、`_shot-v11.png` 及各场景截图。

## 保留边界

`game.js`、`styles.css` 与基线逐字节一致；全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好未改。30fps 上限、最多 4 声部与竖屏 notice +176px 保留。原浏览器断言继续覆盖触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px、横竖屏及模拟安全区。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1。新增检查覆盖多缩放、非整数画布尺寸、相邻木板、移除和空木板集合，以及 bloom 合成保留；这些是绘制调用检查，不冒充像素或真机验证。
- `_v11plank-validation.json` 为真实 `ok:false`；唯一失败项为 browser-runtime。Chromium 启动报 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。日志：`_selftest-v11plank-run.log`。
- 本轮未生成截图；现有 `_shot-v11.png` 是历史产物，未更新，不作为本轮验证证据。兼容报告 `_v10-validation.json` 已恢复运行前内容。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，查看扩建木筏在远近景深带的边缘过渡、相邻板角、移除后的海面与 bloom。初始木筏处于零景深焦带，变化主要体现在伸入景深带的扩建板。iOS Safari 真机画面、触控与实际 30fps 性能尚未验证；新增两次低分辨率填充的成本随存活木板数增长，需用大型木筏复核。

## 浏览器补跑（runner）
- session `01a1a829-0342-7351-bfd3-e453dbc647e3`
- see `_selftest-v11plank-run.log`
