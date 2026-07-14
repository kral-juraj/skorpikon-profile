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
