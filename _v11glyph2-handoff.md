# XI符2 / v11-glyph2 交接

基线：`f3d227efccb80f92e54597cbdecb82c0c066fac2`。原地编辑，未 commit / push。

## 改动

- `art.js`：模块黄铜填色第二轮，仅调整雨棚、灶台、鱼网和灯架既有填色。中间铜面 `#af9261` → `#b59763`，暗铜面 `#987344` → `#8d6c43`，亮铜面使用 `#cbaa73`、象牙亮沿使用 `#e5cf9e`。这些颜色局限于四类模块，不改变全局 palette。
- 完整保留舵轮、炮台、共用木座、暗色镂空、灯火 RGB/alpha、灯架木座反光。40×48 缓存、像素坐标、绘制次数、摆放及预览路径不变；无新增特效、粒子、滤镜、依赖或构建。
- `sw.js` CACHE → `endless-sea-drift-v11-glyph2`；`index.html` edition → `XI符2`；CHANGELOG 前置中文短记录，README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 同步 report.cache、edition 断言、全部场景截图前缀及报告副本；浏览器成功时输出 `_shot-v11glyph2.png` / `_shot-v11.png`，报告为 `_v11glyph2-validation.json`。
- `game.js`、`styles.css` 与基线无差异。全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps / ≤4 声部逻辑不变。触控 ≥44px、竖屏 notice +176px 与 HUD 规则保持原样。

## 验证与限制

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- 实跑 `node _selftest-v10.mjs`：69 项通过，browser-runtime 失败，退出码 1。`_v11glyph2-validation.json` 与 `_v10-validation.json` 记录 `ok:false`；日志 `_selftest-v11glyph2-run.log`。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`，CDP 不可用。未生成 `_shot-v11glyph2.png`，未复制历史截图；现有 `_shot-v11.png` 不代表本版。
- 自测保留 notice gap ≥8px、HUD 高度 140–151px、offset 176px 与触控 ≥44px 断言，本轮无法取得浏览器实测。浏览器可用后重跑 `node _selftest-v10.mjs` 检查横屏、竖屏、小竖屏、安全区、暂停/死亡、昼夜风暴和模块辨识度。
- 视觉效果及 iOS Safari 实机 30fps 仍待验收，未声称已通过。

## 浏览器补跑（runner）
- session `01a1a8e2-9635-7b61-9d40-ace16bf2b4de`
- see `_selftest-v11glyph2-run.log`
