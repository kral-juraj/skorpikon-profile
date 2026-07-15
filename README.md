# skorpikon.eu profile website

Static personal website for Juraj Kráľ.

## Modular no-build structure

This version does **not** require Node.js or any build step.

The main pages are:

```text
index.html
sk/index.html
```

Each work position is stored as a separate HTML fragment:

```text
content/jobs/en/01-exxeta-real-garant.html
content/jobs/en/02-michelin-connected-fleet.html
content/jobs/en/03-nice-actimize-aml.html
content/jobs/en/04-perform-group-cms.html
content/jobs/en/05-tsystems-application-developer.html
content/jobs/en/06-tsystems-senior-application-operator.html
content/jobs/en/07-tsystems-it-assistant.html

content/jobs/sk/01-exxeta-real-garant.html
content/jobs/sk/02-michelin-connected-fleet.html
content/jobs/sk/03-nice-actimize-aml.html
content/jobs/sk/04-perform-group-cms.html
content/jobs/sk/05-tsystems-application-developer.html
content/jobs/sk/06-tsystems-senior-application-operator.html
content/jobs/sk/07-tsystems-it-assistant.html
```

The files are loaded by:

```text
assets/js/include-fragments.js
```

This keeps Git pull requests small. If you change one role, you normally edit only one file.

## Cloudflare settings

Use the same simple static setup as before.

```text
Build command: empty
Output directory: /
Root directory: /
```

Or, if using direct static upload, upload the contents of this ZIP root.

## Security-oriented choices

- Static HTML/CSS with one small local JS loader
- No external scripts
- No forms
- No cookies
- No analytics/tracking
- No external CDN dependencies
- CV PDFs served as static files
- Cloudflare `_headers` file includes basic security headers


## v6 update

- Intro text no longer says "two-page CV" / "dvojstranové CV".
- EN and SK CV PDFs now include a visible and clickable link to https://skorpikon.eu.


## v7 update

- Added visible Certifications & training section to EN and SK website pages.
- The website is now positioned as a complete professional profile, while the PDF CV remains a compact two-page version.
- Added certification badge/logo assets under `assets/img/certifications/`.


## v8 update

- Added dropdown navigation under Experience / Skúsenosti.
- Each job section now has a stable anchor, for example `#job-02-michelin-connected-fleet`.
- Users can jump directly to a specific job without scrolling through the full page.


## v9 update

- Fixed Experience / Skúsenosti dropdown behavior.
- The job list is hidden by default.
- The dropdown appears only on hover or keyboard focus.
- Clicking Experience / Skúsenosti still jumps to the beginning of the experience section.
- Clicking a specific job jumps directly to that job block.


## v10 update

- Removed the Experience / Skúsenosti dropdown from the top menu.
- Added a visible role-link panel in the hero area near the "7 roles / 7 pozícií" summary.
- Each listed role links directly to its job-description block.
