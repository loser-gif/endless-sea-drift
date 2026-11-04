# XI沫3 / v11-foam3 交接

基线：`ffeb98125c24c7944a5831a37fc8f1db86d27a81`。原地编辑，未 commit / push。

## 修改

- `art.js` 缓存泡沫中层 `#b8cdc4 → #bfcec2`、尖端 `#e4e1ca → #e9dfc5`，第三轮轻微收绿、暖向象牙色。沿用已有缓存泡沫；未新增独立船艏效果。
- 仅两个十六进制色值变化；像素形状、尺寸、透明度、缓存数量、循环与绘制次数不变。无新增依赖、构建、滤镜、粒子或效果层。
- `game.js` 动态喷溅、Wake2 尾迹与打捞水圈完整保留。
- CACHE 为 `endless-sea-drift-v11-foam3`；edition 为 `XI沫3`；CHANGELOG 前置中文记录，README 近况同步。
- `_selftest-v10.mjs` 更新 report.cache、浏览器 edition 断言及全部本版截图/报告路径；成功时输出 `_shot-v11foam3.png`、`_shot-v11.png` 和分场景截图。

## 保留与核验

- 已比对 `game.js`、`styles.css` 与 HEAD 字节一致；去除十六进制颜色后 `art.js` 与 HEAD 一致。
- 全部玩法数值、战斗、HP、AI、合成、存档键、迁移、偏好、30fps 配置与 ≤4 声部预算不变。
- 触控 ≥44px、竖屏 notice +176px 规则不变；原有自测的通知间距 ≥8px、HUD 高度及安全区断言保留。
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs` 与 `git diff --check` 通过。
- `node _selftest-v10.mjs`：69 项通过，浏览器启动失败，退出码 1。报告 `_v11foam3-validation.json` 为 `ok:false`；完整日志 `_selftest-v11foam3-run.log`。
- Chromium 调试端点不可用：`sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。没有伪造浏览器成功或复用旧图作为本版截图。
- 本轮未生成 `_shot-v11foam3.png`，既有 `_shot-v11.png` 未改；兼容输出 `_v10-validation.json` 已恢复基线，本版报告保留。

## 待复核

在可运行 Chromium 的环境重跑 `node _selftest-v10.mjs`，检查横屏 844×390、竖屏 390×844 / 320×568、安全区、昼夜及暴雨下泡沫暖度与喷溅尾迹。浏览器截图、实际 HUD/通知间距、iOS Safari 真机帧率与离线更新尚未实测；配置不变不代表实测通过。

## 浏览器补跑（runner）
- session `01a1a884-9bd8-73c1-a306-e22d00ff3170`
- see `_selftest-v11foam3-run.log`
