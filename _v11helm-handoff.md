# XI⎈ / v11-helm 交接

基线：`74076cc603ca86586941224d2808873a7c5d4819`。已原地修改；未 commit / push。

## 变更
- `styles.css`：原生建造 / 配方选择器使用黄铜仪表边框、暗底与清晰焦点；放置按钮增加内凹边框，扩建激活态加侧标。保持既有布局、≥44px 最小触控尺寸、安全区和竖屏 notice +215px 路径。
- `game.js`：仅建造预览绘制块改变。暗衬、细边与四角标；中央固定炮座显示不可放置色。颜色表示格位有效性，不表示材料充足。没有更改放置判定或资源扣除。
- `sw.js` CACHE → `endless-sea-drift-v11-helm`；`index.html` edition → `XI⎈`；更新 README 近况与 CHANGELOG-v11 顶部短条目。
- `_selftest-v10.mjs` 更新报告 CACHE、`_v11helm-validation.json` 与 `_shot-v11helm.png` 路径，保留 `_shot-v11.png` 和旧 v10 兼容输出。

## 保持
全部玩法数值、战斗 / HP / AI、合成、存档 key、迁移、偏好未改。30fps 调度及最多 4 音轨逻辑未改；无新增依赖、构建、粒子、滤镜或动画。仅建造模式增加 1 次矩形描边和 8 次角标填充，不增加常驻实体。

## 验证
- `node --check game.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项非浏览器检查通过，退出码 1。
- Chromium 启动失败：`sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`；CDP 不可用。没有绕过或伪造浏览器成功。
- `_v11helm-validation.json` 为 `ok:false`；完整输出见 `_selftest-v11helm-run.log`。兼容报告 `_v10-validation.json` 同步更新。
- 未生成 `_shot-v11helm.png`；现有 `_shot-v11.png` 不作为本版证据。浏览器布局、预览视觉、30fps 实测与 iOS Safari 原生选择器仍待可用浏览器 / 设备验证。

## 接续
在可运行 Chromium 的环境执行 `node _selftest-v10.mjs`，成功后自动生成新版截图。另在 iOS Safari 横屏、390×844 和 320×568 竖屏检查原生选择器、建造模式角标、中央炮座无效色与 notice 避让。

## 浏览器补跑（runner）
- session 
- see 
