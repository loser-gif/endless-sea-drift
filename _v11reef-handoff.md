# XI⬡ / v11-reef 交接

基线：`392e942693605322f31fe2482d347ba629d65176`。已原地修改；未 commit / push。

## 变更

- `art.js` 仅修改 island / wreck / merchant 三个缓存精灵：岛屿湿沙层、树根 / 石块接触阴影；沉船积水舱口、桅杆底座阴影及破损黄铜边缘；商船货箱 / 桅杆接触阴影、湿船壳及小型黄铜高光。
- 三个画布仍为 96×80，显示尺寸与原有轮廓保持不变。细节在精灵缓存初始化时绘制，无新增逐帧绘制、缓存画布、依赖、构建步骤、粒子或滤镜。
- `sw.js` CACHE → `endless-sea-drift-v11-reef`；`index.html` .edition → `XI⬡`；CHANGELOG 顶部、README 近况同步。
- `_selftest-v10.mjs` report.cache、报告复制及横竖屏截图路径已指向 reef；保留 `_shot-v11.png` 兼容复制。

## 保留项

`game.js`、`styles.css` 无改动。全部玩法数值、战斗 / HP / AI、合成、存档键与迁移、偏好保留。原 30fps 限制及 ≤4 声部逻辑不变。

触控尺寸、安全区与竖屏 notice 规则不变：基线含 +215px 路径，后续 port 规则以 +176px 覆盖。自测中 ≥44px 触控、HUD / notice 间距及模拟安全区检查均保留；本次浏览器未启动，不能宣称实际布局通过。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，浏览器运行项失败，退出码 1。
- `_v11reef-validation.json`：`ok:false`；兼容报告 `_v10-validation.json`。日志：`_selftest-v11reef-run.log`。
- Chromium 报错：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`，调试端点不可用。
- 未生成 `_shot-v11reef.png` 或 reef 竖屏截图；现有 `_shot-v11.png` 为旧产物，未用旧截图冒充本次验证。
- 浏览器可用时重跑 `node _selftest-v10.mjs`，成功截图复制到 `_shot-v11reef.png` / `_shot-v11.png`。三种精灵视觉效果、iOS Safari 实机布局与实际帧率尚未验证。

## 浏览器补跑（runner）
- session `01a1a720-ec3f-7872-b203-2d7e53cb7e80`
- see `_selftest-v11reef-run.log`
