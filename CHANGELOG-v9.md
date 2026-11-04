# IX · v9-free

- **已实现 / Added**：轻量 WebAudio 事件音效（4 声部上限、reduced-motion 更轻、静音偏好持久化）；多炮分散锁敌；潮汐王加速 + 狂怒一次召唤；漂流瓶 / 商船像素精灵与交易；时段物资偏向；岛/沉船风味文案；灶台炖菜（1食1水，优先食用 +62）；雨棚减风暴边缘伤 35%；舵台引流漂浮物；暂停/死亡统计；提示扩至 8 条。
- **保留 / Preserved**：纯静态 Canvas PWA、30fps、v6–v8 海光、中央炮锁定、模块替换半价返还、装弹 38/0.48s 与空弹 22/0.95s、触控 ≥44px、竖屏摇杆左/按钮右。
- **存储 / Storage**：CACHE `endless-sea-drift-v9-free`；存档 `endless-sea-drift-save-v9` / `v:9`，每 2 秒 + 暂停/pagehide/visibility。独立新档，不迁移 v8。偏好 `endless-sea-drift-prefs-v9` `{mute}`。
- **删减 / Cut**：长按提示、震动、额外弹药种类 UI、首领变色、180ms 防连点。
- **验证 / Validation**：`node _selftest-v9.mjs` → **ok:true（35/35）**，含横竖屏 Chrome、触控布局、存档刷新、截图 `_shot-v9.png`。
- **已知 / Known**：旧 v8 存档不会自动续玩（需新启航）；iOS Safari 首次手势才能解锁音效；强杀约丢 ≤2 秒存档；旧 SW 需联网后关标签重开。

English: A–F feel upgrades shipped without external audio assets. Selftest 35/35 green including landscape/portrait CDP and `_shot-v9.png`.
