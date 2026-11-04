# XI缎 / v11-satin 交接

基线：`7ed8f907279da9e40a4382f827600ccee6f2d7cd`。原地修改，未 commit / push。

## 修改

- `styles.css`：直接调整现有普通卡片与结算卡片规则。斜向高光首端 alpha 从 0x14 降到 0x08，次端从 0x05 降到 0x03，过渡位置从 38% / 68% 放宽到 52% / 78%；顶部 1px 内反光 alpha 从 0x30 降到 0x18。目标是比 Glaze 更安静、柔和的缎面。
- 保留双层背景、原阴影数量、边框、铰链及全部几何尺寸；没有新动画、滤镜、backdrop 采样、粒子、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-satin`；`index.html` edition → `XI缎`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言及全部版本截图路径；成功时复制到 `_shot-v11satin.png` / `_shot-v11.png`，报告复制到 `_v11satin-validation.json`。

## 保留

`game.js`、`art.js` 未改。全部玩法数值、战斗、HP、AI、合成、存档键、迁移与偏好保持基线。30fps 配置及 ≤4 声部预算保持不变。

未修改触控尺寸、卡片滚动、HUD 或竖屏 notice +176px 规则；自测仍要求触控 ≥44px、notice gap ≥8px、竖屏 HUD 高度 140–151px。

## 验证

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项非浏览器检查通过，退出码 1。
- `_v11satin-validation.json` 如实 `ok:false`。Chromium 调试端点不可用，启动错误：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。完整日志见 `_selftest-v11satin-run.log`。
- 本轮未生成截图，没有复制历史截图冒充本轮；既有 `_shot-v11.png` 未改。共享 `_v10-validation.json` 已恢复基线，保留 satin 专属失败报告。

## 待复核

在可启动 Chromium 的环境重新运行 `node _selftest-v10.mjs`，检查 844×390、390×844、320×568 以及模拟安全区下的开始、暂停和结算卡片。重点确认高光更柔和、文字清晰、滚动及 CTA 可达、notice 间距和 HUD 高度正常。

浏览器视觉与布局本轮未验证；iOS Safari 真机触控及持续 30fps 也未实测，配置检查不代表实测帧率。

## 浏览器补跑（runner）
- session `01a1a878-c6f3-7663-9e59-d39f72e5c608`
- see `_selftest-v11satin-run.log`
