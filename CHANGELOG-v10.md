# X / v10-deep

纯静态 Canvas PWA；无构建步骤、无新增运行依赖。CACHE：`endless-sea-drift-v10-deep`。
Static Canvas PWA; no build step or new runtime dependencies.

## 已完成 / Shipped

- 同一动作 180ms 防误触；键盘和触屏共用。按住动作按钮 450ms 显示中文提示，提前松手取消；长按只看提示、不消耗资源。暂停、失焦、取消触摸时清理计时器。
  Per-action debounce and cancellable long-press help, without vibration.
- 死亡对话框增加「高光」：最大筏面积、累计击退、最长生存、漂流瓶、商船交易、炖菜和潮汐王击杀。随存档保存，保留「重新启航」。
  Persistent run highlights and a richer death recap.
- 潮汐王二阶段琥珀色、三阶段红色；岛屿/沉船三种轻微色调与对应风味文案。漂流瓶、商船、潮汐王加强墨线，瓶子和王略放大。色调及轮廓在启动时缓存，无逐帧滤镜。
  Cached pixel-preserving phase palettes, site variants and stronger encounter silhouettes.
- 商船按次轮换三种报价：2木→1绳1钉；1废铁→1绳1钉；1布1木→1弹药1淡水。报价随站点保存、显示，成交一次；保留「商船 · G」。漂流瓶增加两条提示。
  Three persistent, rotating merchant offers and two bottle messages.
- 音频未解锁时显示「轻触任意处开启音效」，AudioContext 真正运行后隐藏；静音不提示。无音频 API 时显示不支持说明。
  Visible audio invitation, cleared on actual unlock; existing mute flag retained.
- 竖屏压缩 HUD；短竖屏使用三列动作区，维持摇杆左、动作右、≥44px。增加弹药状态与冷却细条，以及开火后约 0.2s 的炮口方向线/短弧。
  Compact portrait HUD, short-screen controls, ammo/cooldown chip and brief gun aim cues.
- 保留海光/HD-2D、模块替换退款、中央炮座锁定、装弹38伤害/0.48s、空弹22伤害/0.95s、多炮分目标、炖菜、舵台牵引、雨棚防风暴；30fps、音效上限4声部。
  Prior combat, crafting, weather and rendering behavior preserved.

## 存档 / Saves

- `endless-sea-drift-save-v10`，序列化 `v:10`；每2秒自动存档，暂停/pagehide/visibility 保留。
- v10 键存在时优先读取，不因损坏或结束而倒退到旧航行；否则优先 v9、再 v8。旧存档完整验证后才接入并写入 v10，原始键保持原样。无效数据不改现场、不覆盖旧数据。增加木筏连通性、新字段与站点报价检查。
- 仅缺失的新字段填默认值：高光、开火间隔、站点变体/报价，v8 炖菜及闪光状态。已有错误字段不会被默认值掩盖。
- 旧版本未记录历史峰值/事件数；迁移以当前筏面积（至少初始9格）、击退和航行时间为起点，其余计数从0开始。旧商船默认第一种报价。
- 偏好继续使用 `endless-sea-drift-prefs-v9`，保留静音选择。

Validated v9/v8 saves migrate only when no v10 key exists. Originals remain untouched. New history starts at the available snapshot; unrecorded past events cannot be recovered. The v9 mute preferences key is intentionally retained.

## 验证 / Validation

`node _selftest-v10.mjs` → `_v10-validation.json`（`ok:true`）。保留 v9 测试并增加防误触边界、长按真实鼠标序列、音频真实手势、阶段绘制、高光、三种交易、迁移/损坏保护、弹药UI。Chrome 使用 `--no-sandbox`；844×390、390×844、320×568 检查运行、重载、按钮尺寸和摇杆避让。

`_shot-v10.png` 是浏览器生成的可控展示场景（第二阶段王、商船、瓶子、多炮），不是长局成绩证明。浏览器截图已目视检查。`window.testAPI` 仅在 `?test` 下暴露相关状态和帮助函数。

## 未做与限制 / Cut and known

- 未加雾灯船、最远站点或击杀连击；使用累计击退。没有振动、原生包装、弹药类型系统、海面重绘或新大型资源。
- 未进行真机 iOS/Safari 测试；已验证 Chrome 移动视口和 WebAudio 手势。系统暂停音频后提示可再次出现，等待下一次手势恢复。
- 极小竖屏维持可操作区域，海面视野较小；长死亡总结可滚动。
- Legacy historical peaks are approximate as described above; physical iOS validation remains outstanding. No known failing selftest checks.
