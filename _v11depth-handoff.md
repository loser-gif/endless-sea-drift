# XI▽ / v11-depth 交接

## 已改
- `art.js`：现有海浪缓存的冷色浪槽略深；原 32 组焦散随左肩光带分配暖金 / 冷青，焦散 alpha 不增加。木板端面、入水边与六种模块木脚统一冷色接触阴影，左上黄铜高光保留。
- `styles.css`：共用卡片加内框、低对比细木纹与底部内阴影；弹药牌 / 模块及配方选择器加强黄铜边框和内高光。主 CTA 样式未改。
- 竖屏 HUD 收紧上下 padding、航程 / 库存 / 弹药空隙（合计约 13px）；notice 从 +228px 配套改为 +215px。字体尺寸不缩小，44px 最小触控、安全区与卡片滚动规则保留。
- CACHE `endless-sea-drift-v11-depth`，edition `XI▽`；README 近况、CHANGELOG 和 selftest 的版本 / 输出名称已更新。

## 删减 / 保留边界
- 未加任何粒子、实体、屏幕混合层、依赖或构建步骤；未增强 bloom。
- 浪纹 155 / 泡沫 18 / 焦散 32 的循环预算不变；逐存活木板清晰遮罩原样保留。缓存尺寸、unit=2 与显示尺寸不变。
- 未增加独立水线绘制：仅在原木板涂绘路径调整接触颜色。
- `game.js` 完全未改；玩法数值、战斗、合成、存档键、迁移和偏好逻辑不变。

## 验证
- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过；`game.js` / manifest 无差异。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过；浏览器启动失败，退出码 1。`_v11depth-validation.json` 如实保留 `ok:false` 与失败原因。
- Chromium 报错：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`。当前环境禁止权限升级，未尝试绕过。
- **截图待补**：本次未生成 `_shot-v11depth.png`；现有 `_shot-v11.png` 保留为旧截图，不能视作本版验证。浏览器可用后重跑脚本将输出这两个名称。
- **视觉 / 布局待验**：844×390、390×844、320×568 的 notice 净空、库存、44px 触控、开始 / 暂停 / 死亡卡片滚动和模拟安全区；iOS Safari 实机与夜间海面观感尚未验证。现有浏览器测试仍包含上述布局断言。
- 自测沿用 `_v10-validation.json` 兼容输出，并复制为本版报告。
- 未 commit / push。

## 浏览器补跑（executor）
- 本机 `node _selftest-v10.mjs` → ok:true，含 844×390 / 390×844 / 320×568 布局与截图 `_shot-v11depth.png` / `_shot-v11.png`。
- Codex session `01a1a707-baa7-70e1-8367-70fb879830f9`。
