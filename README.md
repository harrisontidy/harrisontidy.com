# Harrison Tidy — Personal Portfolio

Personal engineering portfolio for **harrisontidy.com**, based on Harrison's Embedded Mechatronics résumé. Responsive static HTML, CSS, and JavaScript, with no build step or dependencies.

## Local preview

Run from this directory:

```powershell
python -m http.server 8080
```

Open http://localhost:8080. You can also open `index.html` directly.

## Edit content

- `index.html`: biography, projects, experience, skills, and links.
- `styles.css`: layout, colors, typography, and mobile styles.
- `script.js`: automatic image-placeholder replacement.
- `assets/harrison-tidy-resume.pdf`: downloadable résumé (the supplied original).
- `assets/images/README.md`: image filenames and recommended sizes.

Projects without supplied repository or demo URLs have no invented links. PickleBot and WriteAway are labeled as in development. The résumé PDF includes the contact information from the original supplied document.

## Cloudflare Pages

1. Open Cloudflare → Workers & Pages → Create application → Pages → Connect to Git.
2. Select this GitHub repository and the `main` branch.
3. Choose framework preset **None**. Leave the build command empty and use `/` as the build output directory. If asked for a root directory, leave it empty.
4. Deploy. Check the generated `pages.dev` URL.
5. In the Pages project's **Custom domains**, add `harrisontidy.com` and follow Cloudflare's DNS instructions. Add `www.harrisontidy.com` too if desired.

Git integration redeploys automatically after pushes to `main`.

Docs: https://developers.cloudflare.com/pages/get-started/git-integration/ and https://developers.cloudflare.com/pages/configuration/custom-domains/

## Verification

Check desktop and mobile layouts, project navigation, résumé download, and contact links. Verify both the `pages.dev` URL and the custom domain after deployment; repository creation alone does not publish the site.
