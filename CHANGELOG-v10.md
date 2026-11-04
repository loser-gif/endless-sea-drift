# X★ / v10-final

纯静态 Canvas PWA；无构建步骤、无新增运行依赖。CACHE：`endless-sea-drift-v10-final`。
Static Canvas PWA; no build step or new runtime dependencies.

## Final pass

- 暂停统计下显示实时小高光：最大筏格数、击退、最佳连击、潮汐王与雾灯船；保留音效开关。读档入口在「继续漂流」前增加「续航摘要」（天数、时长、筏格数、击退）。卡片沿用短屏滚动。
- 玩家实际移动时，在木筏运动反方向的外缘生成柔和水环尾流，复用 `waterRing`，最多3个、0.9秒消退；碰壁、建造光标移动不生成。尾流不入存档，重开/读档清空，减少动态效果时不生成。
- 黄昏/夜晚漂流瓶增加轻微亮边和瓶颈高光；雾灯船复用原有缓存径向光晕，仅夜间亮灯，亮度恒定，无新增光晕动画或逐帧渐变。
- 前90秒最多依次显示移动→打捞→合成/吃食物三条引导，沿用 `tipIndex` 和提示计时器。成功打捞后跳过打捞教学，打捞+合成后停止早期教学；不会覆盖正在显示的操作/遭遇提示。首次风暴空闲时提示「雨棚可减风暴边缘伤 · 也可接雨水」，显示后不再重复。
- 饱腹/淡水每次从≥25跌至<25时，标签颜色提醒1.2秒；持续低值不重复，补足后可再次触发。读档低值保留静态提醒色，不重播脉冲；减少动态效果时仅变色。已有怪物受伤血条保持不变。
- 每局首次击败潮汐王额外直接获得1炖菜；原5废铁+3钉及食物掉落保留。使用已有 `bossesSlain` 判定，读档后不会重复领取；旧版本未记录的历史击杀仍遵循原迁移规则。
- 存档键及版本仍为 `endless-sea-drift-save-v10` / `v:10`，偏好仍为 `endless-sea-drift-prefs-v9`。仅追加可选布尔字段 `collectedOnce`、`craftedOnce`、`stormTipSeen`；缺失补默认，错误类型拒绝。旧档已过首次风暴（≥150秒）默认不补播风暴教学。
- `node _selftest-v10.mjs`：88项通过，保留原73项。新增摘要、尾流数量/消退/建造/减少动态效果、情境教学、风暴一次提示、低值阈值、兼容字段、首王奖励、三个视口真实CSS脉冲收尾和暂停卡片触达检查。
- 输出 `_v10-validation.json`、`_v10final-validation.json`（均 `ok:true`），覆盖 `_shot-v10.png` 并输出 `_shot-v10final.png`。展示图与小竖屏已目视检查；原plus交付产物保留。30fps、音效≤4、商船/雾灯船/弹药节奏、中央锁和替换退款不变；无新增资源或依赖。

## Plus pass

- 高光追加当前连击、连击纪录、最远成功停靠（`|x|+|y|`）和雾灯船次数；连续8秒无击杀清空当前连击，暂停不计时。终章保留全部原有统计。
- 第2、4、6…天的夜晚出现一次雾灯船，最多停留38秒且不跨入白昼；独立于原停靠点轮换。冷蓝帆船、琥珀小灯与「雾灯船 · G」，免费领取1废铁+1布或1弹药+1淡水；每船仅一次，出现日期和奖励次数随存档保留。
- 音效邀请一次柔和脉冲，真正开启后每会话提示一次「音效已开启」；动作按钮120ms按下反馈。竖屏HUD再压缩6px，所有交互目标保持≥44px；减少动态效果偏好停用脉冲、位移和阶段闪光。
- 潮汐王二/三阶段分别出现短琥珀/红色屏幕边缘渐隐；渐变在resize时缓存。对王炮口线从38加长至50、线宽1→1.8。弹药耗尽提示一次，重新补弹后可再次提示；伤害、射速及声部上限不变。
- 小岛、沉船各增加两条风味文案，瓶中提示增加两条；已有灶台烹饪教程保留。
- 终章卡片限制视口高度，内部可滚动，短屏可看完整统计并触达重新启航。
- 继续使用v10存档键/`v:10`、v9静音偏好和2秒自动存档；旧v10缺失plus字段补默认值，现存错误值仍拒绝。v8/v9迁移路径保留。
- `node _selftest-v10.mjs`：73项通过（包含原58项），`_v10-validation.json`及`_v10plus-validation.json`均为`ok:true`。新增夜间生成/消失、一次停靠、两种奖励、连击边界、兼容存档、弹药提示、真实按钮反馈和三个视口终章滚动检查。
- 截图覆盖`_shot-v10.png`，同时输出`_shot-v10plus.png`：第2夜雾灯船、二阶段潮汐王和多炮展示场景。已目视检查小竖屏及展示图；未做真机iOS验证。

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

`_shot-v10.png` 是浏览器生成的可控展示场景（第二阶段王、雾灯船、瓶子、多炮），不是长局成绩证明。浏览器截图已目视检查。`window.testAPI` 仅在 `?test` 下暴露相关状态和帮助函数。

## 未做与限制 / Cut and known

- 没有振动、原生包装、弹药类型系统、海面重绘或新大型资源。
- 未进行真机 iOS/Safari 测试；已验证 Chrome 移动视口和 WebAudio 手势。系统暂停音频后提示可再次出现，等待下一次手势恢复。
- 极小竖屏维持可操作区域，海面视野较小；长死亡总结可滚动。
- Legacy historical peaks are approximate as described above; physical iOS validation remains outstanding. No known failing selftest checks.
