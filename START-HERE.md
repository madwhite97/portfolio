# Deployment polish for www.maddiew.dev

This folder contains only replacement/new files. Your existing Home, Work, Contact, shared footer, and layout CSS are retained. App.jsx was based on your current project. The contact form is NOT connected by this package.

## Apply the files

1. Extract this ZIP somewhere outside your project.
2. Copy its contents into `C:\Users\leggo\OneDrive\Desktop\projects\maddie-portfolio`, preserving the public, src, and scripts folders. Accept replacement of App.jsx, index.html, package.json, favicon.svg and root vercel.json. Do not replace your whole src or public folder; merge the contents.
3. If `src/vercel.json` exists, remove that misplaced copy. Vercel reads the configuration at the project root, beside package.json.
4. Run `npm run build`. It should finish with “SEO HTML generated for Home, Work, and Contact.”
5. Run `npm run preview` and check Home, Work, Contact, and the favicon. Direct /work and /contact should load. Client-side unknown routes show the new 404; Vercel will use public/404.html for unknown direct requests.
6. Commit the replacement/new files and push using your normal workflow. This package has not been applied to your project or deployed for you.

Build validation passed on an isolated copy using installed Vite 8.3.1. The live project's package range currently allows that version. Layout/browser behavior and live HTTP responses still need checking after deployment.

## Included

- Page titles, descriptions, canonical URLs, Open Graph and Twitter sharing metadata.
- Build-generated HTML metadata for /, /work and /contact, so social crawlers can read it without running JavaScript. The page body still renders through React; this is not full prerendering.
- Person structured data using the site's existing public name and GitHub profile.
- MW favicon SVG, 48px PNG, 180px Apple touch icon, and a 1200x630 social preview PNG.
- robots.txt and sitemap.xml listing the three public pages.
- React catchall 404 and standalone 404.html. Root Vercel config rewrites only the two real routes, allowing unknown direct URLs to return a 404 instead of rewriting everything to the homepage.

## Check after deployment

- https://www.maddiew.dev/
- https://www.maddiew.dev/work (refresh too)
- https://www.maddiew.dev/contact (refresh too)
- https://www.maddiew.dev/sitemap.xml
- https://www.maddiew.dev/robots.txt
- https://www.maddiew.dev/this-page-does-not-exist (custom page, HTTP 404)
- Confirm https://maddiew.dev redirects to https://www.maddiew.dev.
- View page source on /work and /contact: their titles and canonical addresses must differ from Home.

The 404 HTTP status depends on the deployed Vercel configuration and must be checked live. Do not re-add a rewrite of every URL to index.html.

## Connect Google Search Console

1. Open https://search.google.com/search-console/ and sign in.
2. Add a Domain property: `maddiew.dev` (no https or www).
3. Copy the unique Google TXT verification value.
4. In Vercel's team domain management page for maddiew.dev, add that TXT record at the domain root. Keep the existing records.
5. Return to Search Console and click Verify. If DNS has not updated yet, retry later; keep the TXT record after verification.
6. Submit https://www.maddiew.dev/sitemap.xml in Sitemaps after deployment.
7. Inspect Home, Work, and Contact in URL Inspection and request indexing. Submission does not guarantee indexing or ranking.

Google ownership verification requires your account's unique value. No placeholder verification token is included.

## Still needed before the full launch polish is complete

- Connect contact-form delivery. The current form reports success but does not send an email. Choose a hosted form endpoint or Resend and provide the resulting endpoint/configuration. Never put a secret API key in browser code.
- Optimize the large decorative SVG/image assets (several are 1–3MB) and check loading performance.
- Confirm keyboard navigation, mobile layouts, project links, and actual message delivery.
- Analytics is not installed; decide whether you want Vercel Analytics or Google Analytics before adding tracking.
- Consider consolidating the homepage's three h1 elements into one semantic heading while retaining its visual lines.

Sources: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics , https://vercel.com/kb/guide/custom-404-page , https://support.google.com/webmasters/answer/9008080
