# Smridhi Subedi ✦ Portfolio

**Computer Engineering · People-first technology · Embedded systems · Accessible design**

Welcome to my portfolio! I'm a Computer Engineering student at **The University of Texas at Dallas** (expected graduation: December 2027). I enjoy building and teaching technology that serves people—especially systems that can improve accessibility, independence, and everyday experiences.

🌐 **Portfolio:** [smirsr.github.io](https://smirsr.github.io)  
💻 **GitHub:** [@smirsr](https://github.com/smirsr)  
🔗 **LinkedIn:** [Smridhi Subedi](https://www.linkedin.com/in/smridhi-subedi-8a55b8218)  
✉️ **Email:** [smridhisubedi@yahoo.com](mailto:smridhisubedi@yahoo.com)

## Why I build

I want to work on engineering that helps people. That motivation shapes the way I approach assistive technology, embedded systems, design, education, and teamwork. I care not only about whether a system works, but also about who it works for.

## Featured work

| Project | What it explores | Details |
| --- | --- | --- |
| **SAAMOS / SAAM** | Offline voice interaction, computer vision, and audio feedback for an assistive system designed with blind and low-vision users in mind | [Project story](projects/saamos.html) · [Code](https://github.com/smirsr/SAAMOS) |
| **MSP432 Intrusion Alarm** | Embedded C, GPIO, switch handling, and state-driven control | [Project story](projects/msp432-intrusion-alarm.html) |
| **Analog Circuit Characterization** | Circuit measurement, debugging, and comparison with simulations | [Project story](projects/analog-circuits.html) |
| **GrowYourTime** | Productivity app prototyping and frontend development | [Project story](projects/grow-your-time.html) · [Code](https://github.com/smirsr/GrowYourTimes) |
| **Java Adventure Game** | Interactive Java game development | [Project story](projects/java-game.html) · [Code](https://github.com/smirsr/Java-Adventure-Game) |
| **Light-Controlled Instrument** | Sensor-driven creative electronics | [Project story](projects/light-controlled-instrument.html) |

### SAAMOS: the project closest to my motivation

I lead a four-person team developing an **offline assistive prototype** using a TI SK-AM62 embedded Linux platform. The project combines locally processed voice commands, computer-vision information, and directional audio feedback. My work includes team coordination, integration, audio software, and automated testing. The project is a prototype; its potential benefits should not be confused with independently validated real-world accessibility outcomes.

## Site features

- Responsive, mobile-first homepage with collapsible navigation
- Filterable project cards with links to individual project case studies
- Dedicated project pages for explanations, technical decisions, and demos where available
- LinkedIn, GitHub, email, resume, and cover-letter links
- Reduced-motion support and keyboard-focus styles
- No framework or build step required: static HTML, CSS, and JavaScript for GitHub Pages

## Repository layout

```text
.
├── index.html                     # Homepage
├── css/
│   └── refresh.css                # Theme, layout, and responsive styles
├── js/
│   └── refresh.js                 # Menu, filters, and interactive behavior
├── projects/                      # Individual project pages
├── documents/
│   ├── Smridhi-Subedi-Resume.pdf
│   ├── Smridhi-Subedi-Cover-Letter.pdf
│   └── Smridhi-Subedi-Cover-Letter.docx
└── README.md
```

Your existing `images/`, `videos/`, and other folders can remain in the repository. Keep any media used by older project pages; copying this update over an existing site without checking project media may remove demos.

## Preview locally in VS Code

1. Open the **repository root** (the folder containing `index.html`) in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` → **Open with Live Server**.
4. Open the address in your browser and test desktop and mobile widths.
5. Confirm the resume, cover letter, LinkedIn, GitHub, and project links work.

Alternatively, with Python installed, run `python3 -m http.server 8000` from the repository root and visit `http://localhost:8000`.

## Update content

- **Text and links:** edit `index.html` and the corresponding file in `projects/`.
- **Colors and responsive layout:** edit the CSS custom properties and media queries in `css/refresh.css`.
- **Menu and project filtering:** edit `js/refresh.js`.
- **Resume:** replace `documents/Smridhi-Subedi-Resume.pdf` with a revised file using the *same filename*.
- **Cover letter:** edit `documents/Smridhi-Subedi-Cover-Letter.docx`, export to PDF, and overwrite `documents/Smridhi-Subedi-Cover-Letter.pdf`.
- **Media:** add videos/images within the appropriate project page and retain required assets.

> The cover letter is a general introduction for the portfolio, **not a company-specific application letter**. Personalize the employer, role, and examples before sending it for a particular position.

## Publish to GitHub Pages

If you're working in a Git clone, review your changes, then commit and push to the branch your GitHub Pages deployment uses:

```bash
git status
git add README.md index.html css/refresh.css js/refresh.js projects/ documents/
git commit -m "Refresh portfolio and add project stories and cover letter"
git push
```

**If you downloaded the original repository as a ZIP**, it won't have Git history. Either upload the files through GitHub's web interface or clone the repository before using the Git commands above.

For GitHub Pages, confirm **Settings → Pages** is configured to publish from your intended branch and folder. The site typically appears at `https://smirsr.github.io/`.

## Notes

- This site is a portfolio, not evidence of external validation of prototype performance.
- Some project demos and externally hosted links may need to be refreshed as projects evolve.
- The designs and writing should continue to reflect both technical work and the people it is intended to serve.

---

Made with care, curiosity, and a hope to make technology more helpful. ♡
