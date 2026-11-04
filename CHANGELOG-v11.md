## XI✧ / v11-ember

- 仅 art.js 透明度微调：灯芯 / 炉火收敛，夜间灯晕减弱、原暗角略加深，改善 HUD 背景对比；无新增层。
- CACHE `endless-sea-drift-v11-ember`；edition `XI✧`。保留 port 竖屏 notice 覆盖、触控、安全区、全部玩法数值、存档与偏好。
- 验证见 `_v11ember-validation.json`、`_v11ember-handoff.md`；浏览器成功时生成 `_shot-v11ember.png` / `_shot-v11.png`。

## XI▥ / v11-port

- 仅竖屏收紧标题、航程、弹药与库存行距，保留全部读数和 ≥44px 触控目标。
- notice 偏移从 +215px 调整为 +176px，保留双行提示与刘海安全区。
- CACHE `endless-sea-drift-v11-port`；edition `XI▥`；玩法、战斗、合成、存档、迁移、偏好与渲染预算不变。
- 验证见 `_v11port-validation.json`、`_v11port-handoff.md`；浏览器成功时输出 `_shot-v11port.png` / `_shot-v11.png`。

## XI⎈ / v11-helm

- 模块 / 炮台放置预览加暗衬与黄铜角标；中央固定炮座使用不可放置色，仅调整绘制。
- 原生建造 / 配方选择器与放置按钮增加仪表边框；触控尺寸、竖屏 notice +215px 与玩法数据保持不变。
- CACHE `endless-sea-drift-v11-helm`；验证与截图路径改为 `_v11helm-validation.json`、`_shot-v11helm.png`（兼容 `_shot-v11.png`）。

## XI∽ / v11-tide

- 白浪尖端由 `#e0e4c4` 收敛为尾流环同系 `#ccdebe`（204,222,190）；保留静水区跳过与最多 18 次绘制。
- 外侧木板下现有 1px 冷色水线 `#548e8c80` → `#548e8c99`，仅微增透明度以补偿 dawn slate wash。
- 风暴泡沫、尾流环、CSS、notice +215px、粒子 / 绘制预算、泛光、玩法、战斗与存档均不变。
- CACHE `endless-sea-drift-v11-tide`；edition `XI∽`，避免复用 wake 的 `XI≋`。
- 验证见 `_v11tide-validation.json`、`_v11tide-handoff.md`；浏览器可用时生成 `_shot-v11tide.png`。

## XI✦ / v11-gilt

- 终章正文增加上下留白与行距，统计与高光更易扫读；暂停内框与顶轨降噪，主 CTA 层级保留。
- 航程数字加重、统一等宽数字，库存与弹药文字增加细暗影；保留空弹暖赭提示。HUD 尺寸、触控、安全区与 notice +215px 不变。
- 停靠点 / 雾灯船名称与商船报价沿用原描边绘制，暗底加深、字面微暖亮；首领标题暗描边统一。无新增绘制层、字体、素材或粒子。
- 灯光微调与角标删减；art.js、海面预算、玩法、战斗与存档不变。CACHE `endless-sea-drift-v11-gilt`；edition `XI✦`。
- 验证状态见 `_v11gilt-validation.json`、`_v11gilt-handoff.md`；浏览器可用时生成 `_shot-v11gilt.png`。

## XI☀ / v11-dawn

- 原 atmosphere 暮色洗色改为低饱和琥珀、略减透明度；夜色与缓存暗角统一灰青，风暴沿同一青灰色系加深，雨线轻微转暖灰绿。无新增层、滤镜或粒子。
- 原海底色与既有侧光暗角减去蓝黑偏色，保留清透青绿日间与暖色左肩；雾灯船缓存 tint 从冰蓝转灰青，尺寸及透明度不变。既有岛屿 / 沉船 / 商船黄铜边与木板湿边保持原样。
- CSS 与 HUD / notice 布局不变，竖屏 +215px 保留；155 浪纹 / 18 泡沫 / 32 焦散 / 75 反光 / 52 雨线预算、reduced-motion 时间冻结不变。
- CACHE `endless-sea-drift-v11-dawn`；edition `XI☀`。game.js 仅三处缓存绘制颜色调整；玩法、战斗、存档与迁移不变。
- 验证状态见 `_v11dawn-validation.json`、`_v11dawn-handoff.md`；浏览器可用时生成 `_shot-v11dawn.png`。

## XI▤ / v11-frame

- 共用卡片加强顶轨与双层内框，正文降噪；开始 / 暂停 / 终章仅以眉题和标题色重区分。音效设置保持安静，新的漂流为描边按钮。
- 弹药速射采用黄铜面、空弹采用暖赭警示面；模块 / 配方原生选择器强化斜边并指定选项配色。合成 / 扩建保持黄铜次级，打捞保持金色主级。
- 横屏 HUD 增加内轨，摇杆微调上下边色；尺寸、竖屏 notice +215px、安全区与 ≥44px 规则不变。
- CACHE `endless-sea-drift-v11-frame`；edition `XI▤`。game.js 仅添加卡片 data-view 展示标记；玩法数值、战斗、合成、存档、迁移、偏好及海面绘制未改。
- 验证与截图状态见 `_v11frame-validation.json`、`_v11frame-handoff.md`；浏览器可用时输出 `_shot-v11frame.png` / `_shot-v11.png`。

## XI▽ / v11-depth

- 原海浪缓存加深冷色浪槽；32 组焦散按左肩光带区分暖金与冷青，透明度不增加。155 浪纹 / 18 泡沫预算、bloom 与逐存活木板清晰遮罩不变。
- 原木板端面与六种模块共用木脚加深冷色接触阴影，保留左上黄铜 / 右下湿润斜边、unit=2 和显示尺寸。
- 开始 / 暂停 / 死亡卡片添加内嵌框与低对比木纹；弹药牌与选择器统一边框 / 内高光；竖屏 HUD 空隙压缩，notice 偏移从 +228px 调整为 +215px。
- CACHE `endless-sea-drift-v11-depth`；edition `XI▽`；game.js、战斗 / 合成 / 迁移 / 存档 / 偏好未改；44px 触控与安全区规则保留。
- 验证结果见 `_v11depth-validation.json` 与 `_v11depth-handoff.md`；浏览器成功后输出 `_shot-v11depth.png` / `_shot-v11.png`。

## XI≋ / v11-wake

- `waterRing` 单像素泡沫由冷绿转暖灰绿，透明度系数 0.7 → 0.8，让暗青海面上的打捞浪花与筏尾波更清楚；原有线性消退、0.9 秒寿命与 ≤3 上限不变。
- 潮汐王缓存夜间轮廓略暖为 `#e4d3a0`；保留原有 phase 3 呼吸透明度与 reduced-motion 行为。普通怪物 stamp / shadow 未改。
- CACHE `endless-sea-drift-v11-wake`；edition `XI≋`。仅 canvas 配色 / 透明度微调；无新增 draw call、实体或粒子系统；CSS、notice +228px、安全区、≥44px、HP / AI、v10 存档、v9 偏好、30fps 与四声部上限不变。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11wake-validation.json` ok:true；`_shot-v11wake.png` / `_shot-v11.png`。

## XI▣ / v11-chrome

- 首启 / 暂停卡片眉题改为独立行并微调行高；静音上方增加细弱分隔，启航 / 继续仍为卡片唯一亮色主按钮。
- 仅竖屏提高物资 chip 边框与航程文字对比，含短竖屏；字号、布局、安全区、≥44px 目标与 notice +228px 不变。
- 摇杆标签夜间对比略提亮，暂停边框匹配 HUD 黄铜轨；manifest theme_color / background_color 与 HTML theme-color 统一 `#0b202c`。
- CACHE `endless-sea-drift-v11-chrome`；edition `XI▣`。game.js / art.js 未改；玩法、战斗、迁移、v10 存档、v9 偏好、30fps 与四声部上限不变。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11chrome-validation.json` ok:true；`_shot-v11chrome.png` / `_shot-v11.png`。

## XI☾ / v11-night

- 小岛 / 沉船 / 商船在既有 make() 内增加克制的左上黄铜高光与冷色湿边，沿用 module / crate 材质；96×80、unit 与显示尺寸不变。
- 雾灯船现有灯框增加 1px 暖黄铜顶边 / 左边，保留 glow 调用。
- 暂停 / 结算卡片原 3px 顶轨略提亮；notice 字面与阴影略暖，保留滚动、安全区和竖屏 +228px。
- CACHE `endless-sea-drift-v11-night`；edition `XI☾`。玩法、战斗、合成、迁移、v10 存档、v9 偏好、30fps、四声部与 ≥44px 目标不变；无新增粒子、依赖或构建。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11night-validation.json` ok:true；`_shot-v11night.png` / `_shot-v11.png`。

## XI◇ / v11-glow

- 货箱 / 漂流瓶沿用 module_* 左上黄铜高光、右下冷色湿边；现有 make() 内细化，两者均为 2x authoring，显示尺寸不变，无新增 sprite 或粒子层。
- 站点名称 / 商船报价增加深色分离描边与暖色字面；save/restore 隔离状态，原字号与位置不变。
- audioUnlock 改为黄铜色胶囊，隐藏行为不变；empty 弱射提示提高字面、边框与底色对比，仍使用原 data-mode。
- CACHE `endless-sea-drift-v11-glow`；edition `XI◇`。玩法、战斗、合成、v10 存档、v9 偏好、30fps、四声部、44px 目标、安全区及 XI 竖屏 notice +228px 保留；kill-flash / phaseFlash 未改。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11glow-validation.json` ok:true；`_shot-v11glow.png` / `_shot-v11.png`。

## XI◆ / v11-finish

- 首领入场标题：深色隔离描边、细黄铜边与暖象牙字面，柔和阴影；绘制状态局部保存/恢复。
- 动作层级：打捞保持金色主操作，合成/扩建为黄铜次级，吃喝/修理/钓鱼/停靠收敛为冷色工具。
- 摇杆黄铜外缘与实心感拇指提亮；开始/暂停/终章卡片增加轻分隔、段落节奏与等宽数字。
- CACHE `endless-sea-drift-v11-finish`；edition `XI◆`。玩法、战斗、合成、v10 存档、v9 偏好、30fps、四声部上限不变；44px 目标、安全区与竖屏 notice 228px 偏移保留。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11finish-validation.json` ok:true；`_shot-v11finish.png` / `_shot-v11.png`。
- Cut: sea/raft micro, HUD changes, additional particles or lighting layers. No commit/push.

## XI★ / v11-polish

- 外缘木板下补 1px 冷青水线；仅暴雨时略提高现有筏边泡沫透明度，不增粒子。
- 弹层标题增加细分隔线，航程高光使用等宽数字；新的漂流按钮与静音保持 8px 间距，保留滚动与安全区。
- HUD 黄铜层级、v11-art 架构、玩法数值、战斗/合成、v10 存档、v9 偏好、30fps 与四音轨上限不变。
- CACHE `endless-sea-drift-v11-polish`；edition `XI★`。
- Validation: `node _selftest-v10.mjs` → 122/122；`_v11polish-validation.json` ok:true；`_shot-v11polish.png` / `_shot-v11.png`。
- Screenshot capture retains the night / phase-3 tideking / fogship / bottle / crate / multi-turret scene, adds scene assertions, and writes `_shot-v11polish.png` + `_shot-v11.png` on successful browser execution.
- Cut: extra HUD contrast (existing DOM panel remains readable above the canvas vignette). Real iOS Safari device validation remains outstanding.

## XI·A / v11-art

- 海面增加 6 张缓存白浪簇，减少散碎焦散纹理；远景浪槽加深、筏边泡沫改为短像素簇。
- 景深渐变减缓，并按实际存活木板清除模糊覆盖，扩建木筏也保持清晰。
- 模块共享木质底座、左上暖黄铜高光和右下冷青湿边；炮管、箱体与王冠高光统一。
- 夜色使用缓存冷色暗角，黄昏偏琥珀；暴雨稍加深，雨线缩为 52 组短像素虚线。沿用降动态时间冻结，无新增粒子实体。
- Cached sparse whitecaps, quieter caustics and deeper distant swells; softer depth falloff excludes every surviving board. Shared timber feet and brass/cool-metal accents unify modules and weapons. Restrained cool nights, amber dusk and short pixel rain.
- CACHE `endless-sea-drift-v11-art`; edition `XI·A`. Gameplay numbers, combat, crafting, v10 saves, v9 preferences, 30fps, four-voice cap and v11-ui CSS unchanged.
- Validation: `node _selftest-v10.mjs` → 118/118；`_v11art-validation.json` ok:true；`_shot-v11art.png` / `_shot-v11.png`。
- Cut: extra deck light spill / reflection layers; existing halo and waterline light retained. Real iOS Safari device validation remains outstanding.

## XI / v11-ui

- 黄铜远航仪表：标题、航程、弹药、状态与物资层级更清晰，速射/弱射进度条加粗。
- 木质黄铜弹层、突出启航/继续、弱化静音、描边重开；打捞主按钮与摇杆材质更新。
- Brass expedition HUD, timber-and-brass cards, and clearer touch controls. Safe-area scrolling and 44px targets retained.
- CACHE `endless-sea-drift-v11-ui`; edition XI. Gameplay, combat, crafting, v10 saves, v9 mute preferences and sea renderer unchanged.
- Validation: `node _selftest-v10.mjs` → 115/115；`_v11ui-validation.json` ok:true；`_shot-v11ui.png` / `_shot-v11.png`。
- Portrait notice offset raised so tips clear the denser HUD chips.
