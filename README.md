# ZM Results

A polished, responsive static results website with four pages:

- `index.html` — Home
- `results.html` — Results
- `schedule.html` — Draw Schedule
- `about.html` — About

## Publish with GitHub Pages

1. Open `lordZues/github.io` and choose **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.
4. Use **Visit site** after deployment completes. GitHub notes that publishing can take up to 10 minutes.

## Connect a GoDaddy domain

You need to own the domain and have access to its GoDaddy DNS management. First, in GitHub, open **Settings → Pages**, enter your custom domain, and click **Save**. GitHub will add a `CNAME` file to the publishing branch when using branch publishing.

For an apex domain such as `example.com`, open GoDaddy DNS and create four `A` records with host `@`:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www.example.com`, create one `CNAME` record with host `www` pointing directly to `lordZues.github.io` — do not include the repository name. Remove conflicting GoDaddy parking or forwarding records. Avoid wildcard records.

Return to GitHub Pages, wait for DNS verification, then enable **Enforce HTTPS**. DNS propagation can take up to 24 hours.

The sample numbers on this site are placeholders. Replace them with verified, authorized information before publishing.
