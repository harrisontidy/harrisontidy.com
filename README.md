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

## Project presentation

Each project has its own large scrolling section. Content uses an IntersectionObserver fade/slide reveal, with readable fallbacks when JavaScript is off or reduced motion is requested. AutoBOM uses three selectable story steps: component search, placed circuit, and completed BOM. Only these three images appear in the page.

WriteAway's embedded C, I2C/SPI, and OV2640 architecture details were supplied by Harrison for this update. OV2640 terminology was checked against the manufacturer datasheet hosted by Espressif: https://dl.espressif.com/dl/schematics/Camera_OV2640.pdf (parallel DVP image output and SCCB camera control). The text describes architecture oversight rather than sole firmware authorship.

The Bluetooth RC Car project was supplied directly by Harrison: ESP32-based and Bluetooth-controlled. Its description does not infer the firmware language, Bluetooth profile, or motor-driver parts from the photograph.
