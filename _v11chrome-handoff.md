# v11-chrome handoff

Implemented in place on baseline `cbddd86` (`v11-night`). No commit or push.

- CACHE: `endless-sea-drift-v11-chrome`; edition: `XI▣`.
- Card eyebrow now has a stable block / line-height rhythm; a thin muted rule separates sound controls. Resume retains the only bright card CTA; no JS copy changes.
- Portrait and short portrait inventory borders and voyage text have slightly clearer contrast, with existing font sizes and spacing retained.
- Joystick label contrast lifted; pause border uses the HUD rail brass hue.
- Manifest theme and background plus HTML theme-color consistently use `#0b202c`.
- README and CHANGELOG-v11 top updated. Selftest now targets chrome cache and artifact names.

Validation: 68 non-browser checks passed. Browser launch failed before layout checks because the managed workspace denied a Chromium operation: `FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`. `_v11chrome-validation.json` records `ok:false`; `_selftest-v11chrome-run.log` retains the run. No fresh `_shot-v11chrome.png` could be generated. Historical screenshots and the prior generic validation report were preserved, not relabeled as this release.

Static checks confirmed matching PWA colors, unchanged game.js / art.js, and clean `git diff --check`. Notice +228px, safe-area rules, target dimensions, v10/v9 keys, 30fps and four voices are unchanged. Browser / device visual validation is still outstanding.

To complete validation in an environment that permits Chromium: run `node _selftest-v10.mjs`. It writes `_v11chrome-validation.json`, `_shot-v11chrome.png` and the generic current artifacts. Inspect cold open / pause and portrait layouts at 844×390, 390×844 and 320×568. Real iOS PWA appearance remains a device check.
