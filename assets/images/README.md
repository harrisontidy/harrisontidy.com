# Portfolio images

Add these files here. The website automatically replaces the corresponding placeholder when a file is available:

| Filename | Content | Suggested size |
| --- | --- | --- |
| `portrait.webp` | Portrait or workshop photo | 1000 × 1100 |
| `writeaway.webp` | Pen prototype or CAD render | 1200 × 700 |
| `autobom.webp` | KiCad / AutoBOM screenshot | 1200 × 700 |
| `picklebot-prototype.png` | Cleaned prototype photo (already included) | Transparent PNG |
| `picklebot-cad.png` | Supplied mechanical design (already included) | Original screenshot |
| `picklebot-pcb.png` | Supplied PCB design (already included) | Original screenshot |
| `scheduler.webp` | Course calendar screenshot | 1200 × 700 |

Images fill the frame with `object-fit: cover`. Keep important details near the center. You can change filenames and image descriptions in `index.html` and `script.js` to use PNG or JPEG instead.

PickleBot uses `object-fit: contain` so the full robot and board remain visible. The prototype photo is an AI-assisted background removal of the supplied photograph; the CAD and PCB screenshots are unchanged.
