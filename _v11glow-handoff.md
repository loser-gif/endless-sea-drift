# v11-glow handoff

Baseline: main `5d4783b` (`endless-sea-drift-v11-finish`, XI◆).
Now: CACHE `endless-sea-drift-v11-glow`, edition `XI◇`. Edits in place; no commit or push.

Changed: `art.js`, `game.js`, `styles.css`, `sw.js`, `index.html`, `README.md`, `CHANGELOG-v11.md`, `_selftest-v10.mjs`. Generated reports: `_v10-validation.json`, `_v11glow-validation.json`.

- Existing crate and bottle make() art gets upper-left brass highlights and lower-right cool wet bevels matching module_* materials. Crate stays 64×64 / unit=2; bottle becomes 64×64 / unit=2, preserving its 32px display footprint. No extra sprites or particle layers.
- Site labels and merchant offers use a dark 3px separation stroke and warm face inside save/restore; font sizes, text, and positioning unchanged. Cargo has no existing text labels, so no new label system was added.
- audioUnlock gains a brass pill treatment; hide behavior and animation timing remain unchanged. Existing empty ammo data-mode gets clearer warm warning contrast and an inset edge.
- Optional kill-flash recolor omitted; phaseFlash untouched.

Preserved: gameplay numbers, combat, crafting, migration/save keys, v10 saves, v9 preferences, 30fps, four-voice audio, ≥44px touch targets, safe-area rules, and XI portrait notice +228px. No dependencies, build, CDN, or fonts added.

Validation: `node --check` passed for art.js, game.js, and _selftest-v10.mjs; `git diff --check` passed. `node _selftest-v10.mjs`: 68 non-browser checks passed; browser-runtime failed because Chromium could not launch:

```
FATAL:content/browser/sandbox_host_linux.cc:41
Check failed: . shutdown: Operation not permitted (1)
```

Reports truthfully remain `ok:false`. No new `_shot-v11glow.png` was produced and existing screenshots were not relabeled. Parent rerun: `node _selftest-v10.mjs`; successful browser execution writes `_shot-v11glow.png` and `_shot-v11.png`, and copies the report to `_v11glow-validation.json`. Edition assertions remain `/^XI/`. Browser visual verification is pending that rerun.
