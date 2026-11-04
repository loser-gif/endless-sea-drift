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
