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


## v11 update

- Reworked Certificates section into a compact CV-style certification block.
- Certificates are now a standalone section before Experience / Skúsenosti.
- Large certificate cards were removed; badge/logo size is smaller and closer to the PDF CV style.
- Training is separated as a small related-training note below the main certificates.


## v12 update

- Removed the explanatory intro sentence from the Certifications section.
- Reworked certifications into a vertical list layout.
- Certification logos are now small bullet-like icons instead of large cards.


## v13 cert fix

- Rebuilt Certifications section with new class names: `cv-cert-list`, `cv-cert-row`, `cv-cert-icon`.
- Added versioned CSS file `assets/css/style-v13-certfix.css?v=13` to avoid stale browser/Cloudflare cache.
- Certificate icons are forced to 22x22 px inside a 30x30 px bullet container.


## v14 update

- Removed the standalone "Jump directly to a role" block.
- Moved the role links into the "7 roles / 7 pozícií" meta card as smaller, less prominent clickable links.
- Each role still links directly to its corresponding job-description anchor.


## v15 update

- Reduced the font size of role links inside the "7 roles / 7 pozícií" meta card.
- Links are now visually secondary and less prominent.


## v16 update

- Fixed role-link styling not applying because of old/cached CSS.
- Added new cache-busted CSS file: `assets/css/style-v16-rolelinks.css?v=16`.
- Forced the "7 roles / 7 pozícií" links to be a small, bulletless, subtle list.


## v17 update

- Replaced PDF CV files with updated versions where Core Skills chips have a single clean outline instead of duplicated bubble borders.
- Updated both EN and SK PDF CV files under `cv/`.


## v18 update

- Updated the role links in the "7 roles / 7 pozícií" card.
- Each link now includes the role title plus the company/project name.


## v19 update

- Reworked the hero metadata cards layout.
- "10+ years" and "AI practice" are stacked vertically in the left column.
- "7 roles / 7 pozícií" is placed in a wider column on the right.
- Role links were adjusted to fit on single lines more comfortably.


## v20 update

- Reworked the hero metadata layout again for better visual balance.
- Left column contains "10+ years" and "AI practice" stacked vertically.
- Right column contains a wider "7 roles" card.
- Role link labels were shortened so each role fits more cleanly on one line.
- Added cache-busted CSS file `assets/css/style-v20-hero.css?v=20`.


## v21 update

- Updated "7 roles / 7 pozícií" role-link labels to the requested company/project format.
- Removed underline / dotted border styling from role links.
- Added cache-busted CSS file `assets/css/style-v21-roles.css?v=21`.
