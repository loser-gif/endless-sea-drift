# XI碑 / v11-slate 交接

基线：`42d72492f58526bc3ed3c8d2a4738135fbbdcf8d`。原地修改，未 commit / push；既有未跟踪文件未清理。

## 改动

- `styles.css` 仅死亡视图：冷灰石板底面、克制斜边、暖色标题与首行；统计使用细刻行纹、左对齐和等宽数字，保留 silk 黄铜框及按钮。替换既有表面，没有增加渐变 / 阴影层数、动画、滤镜、粒子或依赖。
- 统计文案与生成逻辑原样保留，仍是可换行纯文本；未拆分或删减数据。卡片滚动、安全区、按钮尺寸保持。
- `sw.js` CACHE → `endless-sea-drift-v11-slate`；`index.html` edition → `XI碑`；CHANGELOG 中文条目前置、README 近况同步。
- `_selftest-v10.mjs` 缓存、edition 断言、报告及截图路径同步 slate，保留 `_shot-v11.png` 与兼容 v10 输出。新增长文滚动压力场景之后的正常死亡画面截图：`_shot-v11slate-death-{landscape,portrait,small-portrait}.png`。

## 保留范围

`game.js`、`art.js` 与基线无差异。全部玩法数值、战斗 / HP / AI、合成、存档键 / 迁移、偏好、30fps 节流、≤4 声部逻辑不变。HUD、notice +176px、≥44px 触控与安全区规则未改。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器启动失败，退出码 1。
- `_v11slate-validation.json`：`ok:false`；兼容报告 `_v10-validation.json`；日志 `_selftest-v11slate-run.log`。
- Chromium 报错：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用；未冒充浏览器通过。
- 本轮未生成 slate 截图；现有 `_shot-v11.png` 为历史产物。脚本已配置浏览器成功时复制至 `_shot-v11slate.png` / `_shot-v11.png`，并输出死亡、暂停、竖屏与风暴场景。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`，目检石板质感与统计扫读；确认 844×390、390×844、320×568 死亡长文可滚动、重启按钮可达、触控 ≥44px，竖屏 HUD 高度 140–151px、notice gap ≥8px / offset +176px。iOS Safari 实机、字体回退和实际帧率未验证。

## 浏览器补跑（runner）
- session `01a1a795-712c-7742-a170-ead79a1000db`
- see `_selftest-v11slate-run.log`
