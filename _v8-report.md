# v8 polish — shipped

Codex session `01a1a5a2-e5a0-7970-9069-21e81257cdf5` implemented P0/P1; executor finished Chrome selftest + commit/push outside Codex sandbox.

## Shipped
- P0 touch pad: ≥44px targets; portrait stick left / actions right (no overlap)
- P0 localStorage `endless-sea-drift-save-v8` v:8 autosave; 继续漂流 / 新的漂流; death → new run
- P0 ammo: loaded 38 dmg / 0.48s; empty weak 22 / 0.95s + HUD「无弹药 · 弱射」
- P0 module replace with ~50% refund; center cannon locked with clear copy
- P1 tips, light balance, tide-king flash / kill flash
- CACHE `endless-sea-drift-v8-polish`; edition VIII

## Cut
- P2 SFX/vibrate, art redraws

## Validation
`node _selftest-v8.mjs` → ok:true (landscape+portrait, save reload, touch layout, screenshot `_shot-v8.png`)

## 19:00 checklist
1. 横竖屏摇杆移动并打捞，确认不挡按钮。
2. 合成弹药，对比装弹速射与无弹弱射。
3. 替换模块看返还，点中央炮座应禁止。
4. 玩一会儿刷新/重开，点继续漂流；再点新的漂流。
5. 加主屏幕离线开一把，吃喝修理后可故意死一局再启航。

## Known
- iPhone Safari/PWA 需真机确认；旧 SW 需联网后关标签重开
- 强杀进程可能丢最近 ~5 秒存档
