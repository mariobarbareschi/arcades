# ARCADES website

Static, responsive institutional website for the ARCADES research group.

## Preview

Open `index.html` directly or run a local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Brand assets

The official ARCADES vector mark is used in the header, hero, and footer. Header and footer use the original stylized lettering, cropped from `arcades-full.svg` through a dedicated SVG viewBox (not a replacement font). The hero keeps its dynamic “WE PLAY” line.

## People and publications

Edit `people.js` as the single membership source. `directory.js` renders the People section and generates IRIS links from the same data, including emeritus professors and excluding alumni.

- Set `personalUrl` to an absolute HTTPS URL to make a card clickable; otherwise leave it `null`.
- Set `irisId` to a verified IRIS authority identifier (`rp…`). Without an ID, the person remains in People but is excluded from both the publications query and its author selector. No name-based search is performed.
- Move a person into the alumni group when they leave; no separate publications list needs editing.
- PhD supervisor names are resolved using `supervisorId`.

The publications button opens a combined OR filter on IRIS, sorted newest first. Results reflect the public IRIS catalogue at each visit, without scraping or scheduled scripts. The site itself remains static and can also run from `file://` with JavaScript enabled.

## Content to confirm before publication

- Institutional contact details
- Individual profile links
- Final research-area wording
- Privacy/cookie information and analytics setup, if needed
