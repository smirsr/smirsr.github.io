// =========================================================
// MOBILE MENU
// =========================================================

const menuButton =
    document.getElementById("menuButton");

const closeMenuButton =
    document.getElementById("closeMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileOverlay =
    document.getElementById("mobileMenuOverlay");


function openMenu() {

    if (!mobileMenu || !mobileOverlay) {
        return;
    }

    mobileMenu.classList.add("active");

    mobileOverlay.classList.add("active");

    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    document.body.classList.add(
        "no-scroll"
    );

}


function closeMenu() {

    if (!mobileMenu || !mobileOverlay) {
        return;
    }

    mobileMenu.classList.remove("active");

    mobileOverlay.classList.remove("active");

    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    document.body.classList.remove(
        "no-scroll"
    );

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMenu
    );

}


if (closeMenuButton) {

    closeMenuButton.addEventListener(
        "click",
        closeMenu
    );

}


if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        closeMenu
    );

}


// Close mobile menu when clicking one of its links

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu-links a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});



// =========================================================
// EMAIL MODAL
// =========================================================

const emailButton =
    document.getElementById(
        "emailButton"
    );

const emailModal =
    document.getElementById(
        "emailModal"
    );

const emailClose =
    document.getElementById(
        "emailClose"
    );

const copyEmailButton =
    document.getElementById(
        "copyEmailButton"
    );

const emailText =
    document.getElementById(
        "emailText"
    );

const copyMessage =
    document.getElementById(
        "copyMessage"
    );


function openEmailModal() {

    if (!emailModal) {
        return;
    }

    closeMenu();

    emailModal.classList.add(
        "active"
    );

    emailModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeEmailModal() {

    if (!emailModal) {
        return;
    }

    emailModal.classList.remove(
        "active"
    );

    emailModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


if (emailButton) {

    emailButton.addEventListener(
        "click",
        openEmailModal
    );

}


if (emailClose) {

    emailClose.addEventListener(
        "click",
        closeEmailModal
    );

}


if (emailModal) {

    emailModal.addEventListener(
        "click",
        function (event) {

            if (event.target === emailModal) {

                closeEmailModal();

            }

        }
    );

}



// =========================================================
// COPY EMAIL
// =========================================================

if (
    copyEmailButton &&
    emailText
) {

    copyEmailButton.addEventListener(
        "click",
        async function () {

            const email =
                emailText
                    .textContent
                    .trim();

            try {

                await navigator
                    .clipboard
                    .writeText(email);

                showCopySuccess();

            }

            catch (error) {

                fallbackCopy(email);

            }

        }
    );

}


function fallbackCopy(email) {

    const textArea =
        document.createElement(
            "textarea"
        );

    textArea.value = email;

    textArea.style.position =
        "fixed";

    textArea.style.opacity =
        "0";

    document.body.appendChild(
        textArea
    );

    textArea.focus();

    textArea.select();

    document.execCommand(
        "copy"
    );

    document.body.removeChild(
        textArea
    );

    showCopySuccess();

}


function showCopySuccess() {

    if (!copyEmailButton) {
        return;
    }

    copyEmailButton.textContent =
        "Copied! ✓";


    if (copyMessage) {

        copyMessage.classList.add(
            "show"
        );

    }


    setTimeout(
        function () {

            copyEmailButton.textContent =
                "Copy";


            if (copyMessage) {

                copyMessage.classList.remove(
                    "show"
                );

            }

        },
        2000
    );

}



// =========================================================
// ESCAPE KEY
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMenu();

            closeEmailModal();

        }

    }
);



// =========================================================
// CLOSE MOBILE MENU ON DESKTOP
// =========================================================

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 900) {

            closeMenu();

        }

    }
);



// =========================================================
// SMOOTH INTERNAL LINKS
// =========================================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function (event) {

            const targetID =
                link.getAttribute(
                    "href"
                );


            if (
                !targetID ||
                targetID === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetID
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});



// =========================================================
// PROJECT PAGE VIDEO
// =========================================================

const projectVideos =
    document.querySelectorAll(
        ".project-video"
    );


projectVideos.forEach((video) => {

    // Pause other project videos if another one starts playing

    video.addEventListener(
        "play",
        function () {

            projectVideos.forEach(
                (otherVideo) => {

                    if (
                        otherVideo !== video &&
                        !otherVideo.paused
                    ) {

                        otherVideo.pause();

                    }

                }
            );

        }
    );

});



// =========================================================
// PROJECT CARD KEYBOARD ACCESSIBILITY
// =========================================================

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    const link =
        card.querySelector("a");


    if (!link) {
        return;
    }


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                link.click();

            }

        }
    );

});



// =========================================================
// EXTERNAL LINKS
// =========================================================

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach((link) => {

    // Make sure external links opened in a new tab
    // cannot access the original page.

    if (!link.rel.includes("noopener")) {

        link.rel += " noopener";

    }

    if (!link.rel.includes("noreferrer")) {

        link.rel += " noreferrer";

    }

});