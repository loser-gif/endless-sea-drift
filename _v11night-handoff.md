# v11-night handoff

Baseline: main `ac77551`, CACHE `endless-sea-drift-v11-glow`, edition `XI◇`.
Current: CACHE `endless-sea-drift-v11-night`, edition `XI☾`. In-place edits only; no commit or push.

## Changes

- `art.js`: small polygon / rectangle paints inside existing island, wreck and merchant make() callbacks. Broken upper-left brass catches and cool wet feet reuse module / crate palette. All three remain 96×80 with unchanged unit and display footprint. No new sprites or particles.
- `game.js`: existing fogship lamp gets a 1px warm brass top / left rim. Its glow call and all dialog / gameplay logic remain unchanged.
- `styles.css`: slightly brighter existing 3px card top rail and inset highlight; warmer notice text with a dark separation shadow. Card dimensions, scroll, safe-area rules and portrait notice +228px unchanged.
- `sw.js`, `index.html`, `README.md`, `CHANGELOG-v11.md`: cache / edition and release notes updated.
- `_selftest-v10.mjs`: current cache and screenshot / validation output names switched to v11-night. Existing test coverage and scene retained.

Preserved: gameplay, combat, crafting, migration and save keys, v10 saves, v9 preferences, 30fps, four voices, ≥44px targets, safe areas. No build, CDN or dependencies added.

## Validation

- `node --check art.js`, `node --check game.js`, `node --check _selftest-v10.mjs`: passed.
- `git diff --check`: passed.
- `node _selftest-v10.mjs`: 68 non-browser checks passed; browser-runtime failed before launch. `_v11night-validation.json` and the runner's legacy `_v10-validation.json` truthfully contain `ok:false`.
- Chromium error: `FATAL:content/browser/sandbox_host_linux.cc:41` / `Check failed: . shutdown: Operation not permitted (1)`.
- No fresh `_shot-v11night.png` could be generated in this environment. Existing screenshots were not relabeled. Browser visual inspection, moon-glyph rendering, and runtime layout checks remain pending.

## Parent follow-up

Run `node _selftest-v10.mjs` in the browser-capable parent environment. A successful run writes `_shot-v11night.png`, `_shot-v11.png`, `_shot-v10.png`, `_v11night-validation.json`, and `_v10-validation.json`. Inspect night sites plus pause / death cards, confirm XI☾ glyph and the existing portrait / safe-area checks, then validate and push as intended. Existing untracked logs / briefs were left untouched.
