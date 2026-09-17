# Daily Results site

An original, responsive results-information site for GitHub Pages. It is inspired by the clarity and layout patterns common to results portals, but does not copy another website's branding, text, or assets.

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.
4. GitHub will provide your `github.io` URL after the deployment finishes.

## Connect a GoDaddy domain

After GitHub Pages is enabled, add your custom domain in **Settings → Pages → Custom domain**. In GoDaddy DNS, remove conflicting parking/forwarding records and add:

- `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- A `CNAME` record for `www` pointing to `lordZues.github.io`.

DNS changes can take time to propagate. Return to GitHub Pages and enable **Enforce HTTPS** once the domain is verified.

Replace the sample result values with verified, authorized data before publishing.
