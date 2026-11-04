# XI汐 / v11-tide2 交接

基线：`9e939540a25a8a4392d33382f749912f78d76159`。原地修改，未 commit / push。

## 改动

- `art.js`：crest 左肩稀疏浪尖亮点改为柔和象牙色；远处泡沫的灰青底、浅色面与象牙尖端统一色系。保留全部缓存尺寸、形状、透明度和采样位置。
- `game.js`：接水圆弧由偏黄绿收敛为灰青；木筏水线及局部泡沫与远处泡沫协调。只改 RGB / hex 颜色，保留 alpha（包括水线色的 99）、宽高、位置、频率和绘制次数。
- CACHE → `endless-sea-drift-v11-tide2`；edition → `XI汐`；CHANGELOG 前置中文说明、README 近况与英文 edition 同步。
- `_selftest-v10.mjs`：report.cache、截图及报告副本统一指向 tide2；修正遗留浏览器 edition 断言 `XI焰` → `XI汐`。成功运行时输出 `_shot-v11tide2.png`、`_shot-v11.png` 及横竖屏/晨昏/风雨/安全区/弹层截图；报告副本 `_v11tide2-validation.json`。

## 保留范围

已用基线对比确认：去除颜色字面量后，`art.js`、`game.js` 与 HEAD 完全一致；`styles.css` 无差异。玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好不变。30fps 与 ≤4 声部限制、触控尺寸、竖屏 notice +176px、HUD 布局不变。无新依赖、构建、缓存表面、粒子、滤镜或绘制层。

## 验证结果

- `node --check art.js`、`node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 通过；`git diff --check` 通过。
- 已运行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1；`_v11tide2-validation.json` 为 `ok:false`。日志：`_selftest-v11tide2-run.log`；既有 `_v10-validation.json` 同步更新。
- Chromium 实际启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，调试端点不可用。未伪报浏览器成功。
- 本轮未生成 `_shot-v11tide2.png`；既有 `_shot-v11.png` 未覆盖，属于历史产物，不能作为本轮视觉验收证据。

## 待复核

在可启动 Chromium 的环境重跑 `node _selftest-v10.mjs`。既有断言覆盖 844×390、390×844、320×568、触控 ≥44px、竖屏 notice offset +176px、gap ≥8px、HUD 高度 140–151px、安全区及弹层。查看日间/晨昏/风雨夜间泡沫与水线，确认象牙亮点克制、木筏轮廓清晰。浏览器布局、实际画面与 iOS Safari 实机 30fps 本轮未验证。

## 浏览器补跑（runner）
- session `01a1a7e9-a35f-7e61-ab2b-bb6fcd79f9a2`
- see `_selftest-v11tide2-run.log`
