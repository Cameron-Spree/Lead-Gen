# Website Lead Workflow

A local prototype for the cheap-website lead generation workflow:

- Lead discovery setup with demo mode and optional Google Places API mode.
- Google Sheets-ready lead CSV import/export.
- Template library with niche placeholders.
- Auto-populated website preview generator.
- Outreach email draft setup.
- Sales pipeline tracking.

## Run locally

From this folder:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

You can also open `index.html` directly, but Google Places API testing is more reliable through `localhost`.

## Google Places API setup

You need to create your own key because it is tied to your Google Cloud account, billing, quotas, and restrictions.

1. Create a Google Cloud project.
2. Enable Maps JavaScript API.
3. Enable Places API.
4. Create an API key.
5. Restrict the key while testing to `http://localhost:5173/*`.
6. Add billing budget alerts and quota limits.
7. Paste the key into the Discovery tab and switch mode to Google Places API.

Use the API within Google's terms. Treat Places as a discovery/reference source, keep source and review dates, and avoid bulk scraping/exporting Maps data.

## CSV

`data/leads-template.csv` contains the starting Google Sheets columns.

In the app:

- Use `Export leads CSV` to download current leads.
- Use `Import CSV` to bring in a sheet exported from Google Sheets.

## Next build steps

The prototype is intentionally local-first. The natural next steps are:

- Move the data layer to Google Sheets API or Airtable.
- Add a proper backend for secure API keys.
- Add Lighthouse/PageSpeed checks for website quality scoring.
- Add authenticated Gmail/Workspace sending or a mail merge provider.
- Deploy generated previews to Netlify, Vercel, or Cloudflare Pages.

Refreshed on 2026-05-25.