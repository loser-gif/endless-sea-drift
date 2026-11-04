# XI✦ / v11-gilt handoff

Implemented in place on dawn baseline `fcf5c83`. No commit or push.

## Changes
- Death recap: more vertical space, 2.05 line height, brighter body copy and more separation before the primary CTA. Existing plain-text stats and highlights retained.
- Pause: quieter brass top rail / inset frame and roomier body rhythm. Start card styling and primary CTA treatment retained.
- Voyage: slightly heavier monospace digits, tabular numerals, clearer face and a small dark text shadow. Inventory values and ammo chip receive matching separation; empty ammo keeps its warm warning color. Font sizes and HUD geometry retained.
- Canvas: existing site / fogship / merchant label strokes deepen to #06131c and widen from 3 to 3.5; warm faces brighten slightly. Boss title keeps its existing warm face and brass rim with matching dark outer stroke. No extra text passes.
- CACHE `endless-sea-drift-v11-gilt`; edition `XI✦`; README, CHANGELOG-v11 and existing selftest output names updated.

## Deliberate cuts / preserved constraints
- No corner ticks or lamp spill adjustment; art.js is unchanged.
- No gameplay, save, combat, migration or preference changes. game.js diff contains only three text-render styling lines.
- Dawn/depth ocean budgets, existing glow, reduced-motion handling, touch target sizes, safe-area rules and portrait notice +215px retained. No new assets, fonts, particles, bloom or drawing layers.

## Validation
- `node --check game.js`, `sw.js`, `_selftest-v10.mjs`: passed.
- `git diff --check`: passed.
- `node _selftest-v10.mjs`: 68 non-browser checks passed; exit 1 because Chromium could not launch its debugging endpoint.
- Browser error: `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`. This environment does not permit approval escalation.
- `_v11gilt-validation.json` honestly records `ok:false`; `_selftest-v11gilt-run.log` contains the run. Compatibility report `_v10-validation.json` also updated by the existing harness.
- No `_shot-v11gilt.png` was generated. Earlier screenshots are not gilt evidence. No visual approval claimed for death/pause rhythm, merchant/fogship night readability, boss title, or viewport clearance.

## Browser follow-up
Run `node _selftest-v10.mjs` in an environment where Chromium can launch. The harness outputs `_shot-v11gilt.png` (night showcase), compatibility screenshots and the validation reports, and checks landscape, portrait, 320px short portrait, card scrolling, CTA reachability and synthetic safe areas. Visually inspect death/pause cards and merchant/site/boss labels across day, dusk, night and storm; the automated showcase alone does not cover all those appearances.

## 浏览器补跑（executor）
- ok:true；`_shot-v11gilt.png`。session `01a1a710-a521-7483-bd0b-c730cd5acd52`。
