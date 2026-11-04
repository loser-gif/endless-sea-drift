# XI坞 / v11-dock 交接

基线：`aefeabf94d68a3221427c28051197a99bb3b0310`。原地修改，未 commit / push。

## 修改

- `art.js`：小岛右下岸边新增四块短栈桥木板。低饱和木色沿用 Cove 湿沙、青灰岸脚色系；1px 板缝、短湿边反光、紧贴木板的冷色接触阴影提供微量厚度。所有绘制均烘焙进原 `make('island',96,80,...)`，无新精灵尺寸、逐帧图层、滤镜、粒子、依赖或构建步骤。
- `sw.js` CACHE → `endless-sea-drift-v11-dock`；`index.html` edition → `XI坞`；CHANGELOG 前置中文短记录，README 近况同步。
- `_selftest-v10.mjs`：report.cache、edition 断言、版本截图与报告路径同步 dock；浏览器成功时生成 `_shot-v11dock.png` / `_shot-v11.png` 以及各场景截图。

## 保留

`game.js`、`styles.css` 未改。玩法数值、战斗、HP、AI、合成、存档键、迁移和偏好保持基线；30fps 配置、≤4 声部预算不变。96×80 精灵边界不变。

竖屏 notice +176px、HUD 与触控布局未改；沿用自测的触控 ≥44px、notice gap ≥8px、竖屏 HUD 高度 140–151px 断言。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项检查通过，浏览器启动失败，退出码 1。
- `_v11dock-validation.json` 如实 `ok:false`；Chromium 调试端点不可用，错误 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。日志：`_selftest-v11dock-run.log`。
- 本轮未生成浏览器截图，未复制旧图冒充；既有 `_shot-v11.png` 未改。共享 `_v10-validation.json` 恢复基线，dock 专属失败报告保留。

## 待复核

可启动 Chromium 后重新运行 `node _selftest-v10.mjs`；复核 844×390、390×844、320×568 及模拟安全区的 HUD、notice 间距、触控与卡片滚动。检查小岛码头在昼夜、风雨中的湿木细节与 Cove 配色是否协调。

本轮未完成浏览器视觉、布局检查或 iOS Safari 真机测试；30fps 与声部预算为既有配置保留，不代表真机性能实测。

## 浏览器补跑（runner）
- session `01a1a87c-126c-7760-8751-5f3d0f8519ff`
- see `_selftest-v11dock-run.log`
