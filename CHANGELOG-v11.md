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
