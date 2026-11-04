# XI∽ / v11-tide handoff

Implemented in place on gilt baseline `e1c21a2` on main. No commit or push.

## Changes
- `art.js`: cached whitecap tips `#e0e4c4` → `#ccdebe` (204,222,190), matching the warm gray-green wake rings with less bright tips. Existing quiet-zone skip and maximum 18 whitecap draws retained.
- `game.js`: existing outer-board 1px waterline `#548e8c80` → `#548e8c99` (alpha ~0.50 → 0.60). Same cool RGB, position, width and draw count; intended to retain separation under the dawn slate wash. Visual confirmation remains pending.
- CACHE `endless-sea-drift-v11-tide`; edition `XI∽` (wake already uses `XI≋`). Updated README, CHANGELOG-v11 and existing selftest artifact names.

## Preserved / cut
- Storm foam, wake rings and local foam flecks unchanged. No extra entities, particles, drawing layers or bloom.
- CSS unchanged, including portrait notice +215px, safe areas and touch targets.
- No gameplay, combat, save, migration or preference changes. Runtime diff is exactly two rendering color literals plus cache and edition plumbing.

## Validation
- `node --check art.js`, `game.js`, `sw.js`, `_selftest-v10.mjs`: passed.
- `git diff --check`: passed.
- `node _selftest-v10.mjs`: 68 non-browser checks passed; exit 1 on browser startup.
- Chromium failed with `sandbox_host_linux.cc:41 … shutdown: Operation not permitted (1)`; debugging endpoint unavailable. This environment does not permit approval escalation.
- `_v11tide-validation.json` honestly records `ok:false`; details in `_selftest-v11tide-run.log`. The existing harness also refreshed compatibility report `_v10-validation.json`.
- No `_shot-v11tide.png` was generated. Existing screenshots are not tide evidence; no visual approval or browser layout validation claimed.

## Follow-up
Run `node _selftest-v10.mjs` where Chromium can launch to generate `_shot-v11tide.png` and rerun viewport / safe-area checks. Inspect whitecap clusters and the lower outer-board waterline in day, dusk, night and storm; the automated night showcase alone does not cover all lighting states. Confirm notice clearance in portrait. No real-device Safari validation performed.

## 浏览器补跑（executor）
- ok:true；`_shot-v11tide.png`。session `01a1a713-5c27-7ed3-9c5e-54c50aa9b03f`。
