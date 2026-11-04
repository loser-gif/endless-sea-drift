# XI▤ / v11-frame 交接

## 已完成
- CACHE：`endless-sea-drift-v11-frame`；edition：`XI▤`。
- 共用卡片加厚顶轨与双层内框，正文更安静；开始、暂停、死亡只以眉题 / 标题色重区分。启航 / 继续 / 重新启航仍是卡片唯一亮色主按钮，音效设置低调，新的漂流描边。
- 弹药 loaded 速射为黄铜面、empty 弱射为暖赭面；原生模块 / 配方选择器加深斜边并指定 option 配色，未替换系统控件。
- 合成 / 扩建次级黄铜边细化；打捞金色主级、其余冷色工具层级保留。摇杆上下边色微调，横屏 HUD 增加内轨，未加宽。
- `game.js` 仅为 showDialog 增加展示用 data-view，并将读档入口标为 start；无玩法逻辑改动。
- README 近况、CHANGELOG-v11 已更新；selftest report.cache、报告 / 截图输出名称已切至 frame。

## 保留与删减
- 竖屏 HUD 所有布局尺寸与 notice +215px 不变；既有 ≥44px、safe-area 与卡片滚动规则保留。
- 战斗、合成、数值、存档、迁移、偏好键不变。art.js 完全未改，海面预算与 Canvas 绘制不变。
- 现有设置仅为卡片音效开关，未新建设置页。死亡正文是纯文本，未为可选分隔线拆解内容或改写文案。
- 未新增依赖、实体、粒子、滤镜或 bloom；未 commit / push。

## 验证与限制
- `node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，浏览器启动失败，退出码 1；`_v11frame-validation.json` 为 `ok:false`。
- 失败原因：Chromium `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；当前环境禁止权限升级。
- 本轮未生成 `_shot-v11frame.png`，现有 `_shot-v11.png` 为旧截图，不能视为本版验证。浏览器可用后重跑 `node _selftest-v10.mjs` 将生成两者。
- 844×390、390×844、320×568 的 notice 净空、≥44px 控件、开始 / 暂停 / 死亡滚动与模拟安全区仍由现有浏览器测试覆盖，但本轮未执行成功。iOS Safari 原生选择器、实机安全区和视觉效果待验。
- 自测同时更新兼容输出 `_v10-validation.json`；完整运行日志：`_selftest-v11frame-run.log`。

## 浏览器补跑（executor）
- `node _selftest-v10.mjs` → ok:true；`_shot-v11frame.png` / `_shot-v11.png`。
- Codex session `01a1a70a-bb38-7f53-b347-3c8a7753a0f6`。
