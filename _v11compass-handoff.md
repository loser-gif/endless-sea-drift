# XI罗 / v11-compass 交接

基线：`ada50d6540de4176b9b29bcf4e9444e7a3e57771`。原地修改，未 commit / push。

## 修改

- `styles.css`：航行等宽栏左侧原有留白加入 6×10px 黄铜单色罗盘针，以空伪元素及 CSS polygon 绘制。静态装饰不占文字宽度、不改变行高、不接收触控；无新依赖、动画、粒子、滤镜或 Canvas 绘制。
- `sw.js` CACHE → `endless-sea-drift-v11-compass`；`index.html` edition → `XI罗`。
- CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言、全部场景截图与报告复制路径。浏览器成功时输出 `_shot-v11compass.png`、`_shot-v11.png` 及 compass 场景图；本轮未生成新截图。

## 保留边界

`game.js`、`art.js` 与基线逐字节一致：全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 上限及 ≤4 声部实现保留。CSS 原有字号、文字宽度、行高、触控尺寸和竖屏 notice +176px 规则未改。原自测保留触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px 与模拟安全区检查；这些浏览器断言本轮未执行成功。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check`：通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1。
- `_v11compass-validation.json`：真实 `ok:false`，唯一错误为 browser-runtime。Chromium 启动失败：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`，调试端点不可用。日志：`_selftest-v11compass-run.log`。
- `_v10-validation.json` 已恢复运行前内容；历史 `_shot-v11.png` 未改，不作为本轮证据。未伪造或复制历史图片充当 compass 截图。

## 待复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`，确认横屏、竖屏、320px 窄屏及模拟安全区下罗盘针可见、文字无遮挡，HUD 与 notice 间距断言通过。iOS Safari 真机画面、触控和实际帧率尚未验证；本次装饰仅指示航行主题，不表示实时航向。

## 浏览器补跑（runner）
- session `01a1a82c-649d-7001-9d77-c9a5cc1d483c`
- see `_selftest-v11compass-run.log`
