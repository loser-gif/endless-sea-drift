# XI符 / v11-glyph 交接

基线：`f3f05fe1e20db3a57e886526065fc51f99d4b705`。原地编辑，未 commit / push。

## 改动

- `art.js`：模块精灵使用与炮塔共用的 `palette.brass/light/shade`，辅以原有黄铜阴影色。舵轮由描边改为实心外圈与暗色内孔，保留轮轴、横纵辐条和支架；雨棚、灶台、鱼网、灯架统一黄铜面。灯芯尺寸与透明度沿用 flare。炮塔图像、40×48 缓存尺寸、放置位置、建造预览调用均保留；没有新增逐帧效果、滤镜、粒子、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-glyph`；`index.html` edition → `XI符`。CHANGELOG 前置中文条目，README 近况和英文 edition 同步。
- `_selftest-v10.mjs`：report.cache、全部截图前缀、报告副本改为 glyph。浏览器成功时输出 `_shot-v11glyph.png`、`_shot-v11.png` 及各布局/天气截图；报告副本为 `_v11glyph-validation.json`。
- `game.js`、`styles.css` 无改动。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 与 ≤4 声部逻辑保持原样。触控尺寸和竖屏 notice +176px 规则保持原样。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实际运行 `node _selftest-v10.mjs`：68 项通过，browser-runtime 失败，退出码 1，报告 `ok:false`。日志：`_selftest-v11glyph-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 不可用。未伪造浏览器成功，未复制历史截图。本轮没有生成 `_shot-v11glyph.png`；已有 `_shot-v11.png` 属于历史产物，不代表本版。
- 保留现有浏览器断言：触控 ≥44px、notice gap ≥8px、HUD 高度 140–151px、竖屏 offset 176px；本轮无法取得浏览器实测结果。
- 浏览器可用后重跑 `node _selftest-v10.mjs`，检查横屏、竖屏、小竖屏、安全区、暂停/死亡与昼夜风暴截图。舵轮预览与模块小尺寸辨识度、iOS Safari 实机帧率仍待视觉/真机验收。

## 浏览器补跑（runner）
- session `01a1a7e6-580f-7e83-85cf-81b922a1ad81`
- see `_selftest-v11glyph-run.log`
