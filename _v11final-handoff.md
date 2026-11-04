# XI终 / v11-final 交接

基线：`574e25ba338c54bd6d38250da0efcbc44e890c96`。原地修改，未 commit / push。

## 本轮修改

- `sw.js` CACHE → `endless-sea-drift-v11-final`；`index.html` 的 `.edition` → `XI终`。
- `CHANGELOG-v11.md` 前置中文短记录；README 近况与英文 edition 同步。
- `_selftest-v10.mjs` 更新 report.cache、edition 断言及全部场景截图路径至 final；成功时主图复制至 `_shot-v11final.png` 和 `_shot-v11.png`，报告复制至 `_v11final-validation.json`。
- 不追加 UI 美术效果；保留 spray 基线画面，避免封版引入风险。

## 保留审计

逐字节核对 `game.js`、`art.js`、`styles.css`、`manifest.webmanifest` 与 HEAD 一致；index.html 仅替换版签。全部玩法数值、战斗、HP、AI、合成、存档键、迁移和偏好不变。30fps 目标、≤4 声部及既有粒子预算不变，无依赖或构建新增。

竖屏 notice +176px 与触控布局原样保留；现有浏览器断言仍要求触控 ≥44px、HUD 高度 140–151px、notice gap ≥8px，并覆盖 390px / 320px 竖屏及模拟安全区。

## 验证结果

- `node --check sw.js`、`node --check _selftest-v10.mjs`、`git diff --check` 通过。
- `node _selftest-v10.mjs` 退出码 1：69 项非浏览器检查通过，浏览器启动失败。包含战斗、合成、存档回读与迁移、偏好、声部上限、30fps 配置和减少动态效果检查。
- `_v11final-validation.json` 如实记录 `ok:false`、final CACHE。Chromium 调试端点不可用，错误为 `sandbox_host_linux.cc:41` / `shutdown: Operation not permitted (1)`。完整日志：`_selftest-v11final-run.log`。
- 未生成 `_shot-v11final.png`，未复制历史截图冒充；既有 `_shot-v11.png` 保留。共享 `_v10-validation.json` 已恢复运行前内容，保留本轮 final 专属报告。

## 后续复核

在可启动 Chromium 的环境运行 `node _selftest-v10.mjs`，生成 final 截图并复核横竖屏、暂停/死亡面板、安全区、昼夜与风雨。当前不能宣称浏览器布局、离线缓存更新、iOS Safari 实机触控或持续 30fps 已验证；本轮验证边界为静态差异审计与非浏览器自测。

## 浏览器补跑（runner）
- session `01a1a83f-fa9d-71e1-a96c-4133215bfe75`
- see `_selftest-v11final-run.log`
