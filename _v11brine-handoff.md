# XI盐 / v11-brine 交接

基线：`2577f4d98085c35a2a9e4ec05e2bf737f5b31637`。原地修改，未 commit / push。

## 修改

- `art.js`：四种木板接缝改为低饱和湿木暗带，少量青灰微反光；竖直边保留干木到浸水青色的过渡，把整齐横纹收敛为断续盐壳、盐粒与短湿痕。商船和沉船湿脚上方增加少量同色盐斑。
- 盐色沿用海浪的 `#c9d8b1`，配低对比灰绿与深青，不引入纯白描边。全部在现有精灵初始化时烘焙；精灵尺寸、缓存画布数量、逐帧绘制次数不变，无新依赖、构建、粒子、滤镜或动画。
- `sw.js` CACHE → `endless-sea-drift-v11-brine`；`index.html .edition` → `XI盐`；CHANGELOG 顶部中文记录、README 近况及英文 edition 同步。
- `_selftest-v10.mjs` 的 report.cache、截图与报告副本目标改为 brine，保留 `_shot-v11.png` 和 v10 兼容产物。优先使用 Node 原生 WebSocket，旧 Node 回退到系统 undici；不安装依赖，不绕过浏览器测试。

## 保留范围

`game.js`、`styles.css`、`manifest.webmanifest` 对比 HEAD 无改动。全部玩法数值、战斗 / HP / AI、合成、存档键、迁移、偏好、30fps 设置和最多四声部不变。触控 ≥44px、竖屏 notice +176px 规则保留；自测继续要求 HUD ≤168px、通知间距 ≥8px。

## 验证

- `node --check art.js`、`node --check sw.js`、`node --check _selftest-v10.mjs`：通过。
- `git diff --check`：通过。
- `node _selftest-v10.mjs`：68 项通过，1 项失败，退出码 1。真实 Chromium 启动失败：`FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`；调试端点不可用。未把 VM 测试当作浏览器验收，报告明确 `ok:false`。
- 报告：`_v11brine-validation.json`（兼容 `_v10-validation.json`）；日志：`_selftest-v11brine-run.log`。
- 本次未生成 `_shot-v11brine.png`、竖屏截图或覆盖 `_shot-v11.png`。已有旧截图不代表本版视觉验收。
- 待环境可运行 Chromium 后执行 `node _selftest-v10.mjs`，验收 844×390、390×844、320×568 画面、盐壳密度、湿木微反光、触控与 HUD / notice 间距；成功后自动写出 `_shot-v11brine.png`、`_shot-v11.png` 及 brine 两张竖屏截图。iOS Safari 实机、实际 30fps 与离线缓存升级尚未验证。

## 浏览器补跑（runner）
- session `01a1a749-3a9e-7c53-8c49-84b0ad5e7570`
- see `_selftest-v11brine-run.log`
