# v11-wake handoff

Implemented in place on main baseline `6887a99` (`v11-chrome`). No commit, push, build, or migration.

- CACHE: `endless-sea-drift-v11-wake`; edition: `XI≋`.
- `game.js`: existing one-pixel water rings now use warm gray-green RGB `(204,222,190)` with opacity multiplier `0.8` (was `(164,214,198)` / `0.7`). This applies to collect splash, raft wake and existing ambient rings. At birth wake opacity is 0.24 instead of 0.21, with the same linear fade to zero.
- Cached Tideking night rim shifts from `#d9d4a0` to warm brass `#e4d3a0`. Its phase-three opacity range, pulse timing and reduced-motion behavior remain unchanged. Optional regular monster stamp / shadow change omitted to keep the pass minimal.
- No added draw calls, particles, entities or allocations in the frame loop. Wake cap ≤3, 0.9-second lifetime, HP / AI, gameplay and saves unchanged.
- CSS and art.js unchanged: notice +228px, ≥44px targets, safe-area rules, v10 saves / v9 preferences, 30fps and four-voice cap preserved.
- README / CHANGELOG-v11 updated; existing selftest now targets wake cache and wake artifact names.

Validation: `node --check game.js`, `node --check _selftest-v10.mjs` and `git diff --check` passed. `node _selftest-v10.mjs` passed 68 non-browser checks, including wake cap / expiry / reduced motion, collect splash, king rim range, save migration, combat and audio guards. Browser launch failed before browser checks: `FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`.

`_v11wake-validation.json` records `ok:false`; `_selftest-v11wake-run.log` retains the full result. `_shot-v11wake.png` could not be generated in this managed environment. No historical screenshot was relabeled; generic baseline report and existing screenshots were preserved. Night visual appearance and browser layout checks remain unverified.

To finish validation in an environment that permits Chromium, run `node _selftest-v10.mjs`. It targets `_shot-v11wake.png` and `_v11wake-validation.json` and exercises 844×390, 390×844 and 320×568 layouts. Inspect the night wake / water rings and warm Tideking rim before release.
