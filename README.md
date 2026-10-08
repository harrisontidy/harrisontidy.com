# Harrison Tidy — Personal Portfolio

A compact project-focused portfolio for **harrisontidy.com**. Dark theme inspired by lucastidy.com, with project pictures, short descriptions, and technical implementation bullets. Static HTML/CSS/JavaScript; no build step or dependencies.

## Preview

From this directory, run `python -m http.server 8080` and open http://localhost:8080.

## Edit

- `index.html`: projects, descriptions, technical bullets, and links.
- `styles.css`: dark theme and responsive layout.
- `script.js`: replaces the WriteAway placeholder when `assets/images/writeaway.webp` is added.
- `assets/harrison-tidy-resume.pdf`: original supplied résumé.
- `assets/images/README.md`: image provenance and replacement instructions.

## Content sources

- Harrison's supplied Embedded Mechatronics résumé: WriteAway, education, and original project descriptions.
- https://github.com/harrisontidy/auto_BOM: README, repository guide, native C++ integration patches, and server.js. Confirms native wxWidgets controls and local HTTP/JSON communication with Node.js.
- https://github.com/harrisontidy/pickleball-robot: tracking/README.md and simple_hobby_controller/README.md. Describes the prototype tracking algorithm and UART/PWM controller design. In-progress wording is intentional.
- https://github.com/harrisontidy/harrison-tidy-course-calendar: README and original screenshot.

Project source documentation describes implementation; this portfolio update does not verify the hardware or rerun the source projects.

## Deploy with Cloudflare Pages

1. Cloudflare → Workers & Pages → Create application → Pages → Connect to Git.
2. Select this repository and `main`.
3. Framework: None. Build command: empty. Build output directory: `/`. Root directory: empty.
4. Deploy and check the generated `pages.dev` URL.
5. In the Pages project's Custom domains, add `harrisontidy.com` and follow the DNS instructions.

Pushes to `main` trigger deployments once Git integration is connected. The repository alone does not publish the site.
