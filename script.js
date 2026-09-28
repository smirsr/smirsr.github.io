// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuButton =
    document.getElementById("menuButton");

const closeMenuButton =
    document.getElementById("closeMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuOverlay =
    document.getElementById("mobileMenuOverlay");


// ---------------------------------------------------------
// OPEN MOBILE MENU
// ---------------------------------------------------------

function openMobileMenu() {

    if (!mobileMenu || !mobileMenuOverlay) {
        return;
    }

    mobileMenu.classList.add("active");

    mobileMenuOverlay.classList.add("active");

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

    document.body.style.overflow =
        "hidden";

}


// ---------------------------------------------------------
// CLOSE MOBILE MENU
// ---------------------------------------------------------

function closeMobileMenu() {

    if (!mobileMenu || !mobileMenuOverlay) {
        return;
    }

    mobileMenu.classList.remove("active");

    mobileMenuOverlay.classList.remove("active");

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

    document.body.style.overflow = "";

}


// ---------------------------------------------------------
// HAMBURGER
// ---------------------------------------------------------

if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMobileMenu
    );

}


// ---------------------------------------------------------
// CLOSE BUTTON
// ---------------------------------------------------------

if (closeMenuButton) {

    closeMenuButton.addEventListener(
        "click",
        closeMobileMenu
    );

}


// ---------------------------------------------------------
// CLICK OUTSIDE MENU
// ---------------------------------------------------------

if (mobileMenuOverlay) {

    mobileMenuOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

}


// ---------------------------------------------------------
// CLOSE MENU AFTER LINK CLICK
// ---------------------------------------------------------

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu-links a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


// =========================================================
// EMAIL POPUP
// =========================================================

const emailPopupButton =
    document.getElementById(
        "emailPopupButton"
    );

const emailModal =
    document.getElementById(
        "emailModal"
    );

const emailModalClose =
    document.getElementById(
        "emailModalClose"
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


// ---------------------------------------------------------
// OPEN EMAIL POPUP
// ---------------------------------------------------------

function openEmailModal() {

    if (!emailModal) {
        return;
    }

    emailModal.classList.add("active");

    emailModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


// ---------------------------------------------------------
// CLOSE EMAIL POPUP
// ---------------------------------------------------------

function closeEmailModal() {

    if (!emailModal) {
        return;
    }

    emailModal.classList.remove("active");

    emailModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


// ---------------------------------------------------------
// EMAIL BUTTON
// ---------------------------------------------------------

if (emailPopupButton) {

    emailPopupButton.addEventListener(
        "click",
        openEmailModal
    );

}


// ---------------------------------------------------------
// EMAIL X BUTTON
// ---------------------------------------------------------

if (emailModalClose) {

    emailModalClose.addEventListener(
        "click",
        closeEmailModal
    );

}


// ---------------------------------------------------------
// CLICK OUTSIDE EMAIL CARD
// ---------------------------------------------------------

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

if (copyEmailButton && emailText) {

    copyEmailButton.addEventListener(
        "click",
        async function () {

            const email =
                emailText.textContent.trim();

            try {

                await navigator.clipboard.writeText(
                    email
                );

                showCopiedMessage();

            }

            catch (error) {

                fallbackCopy(email);

            }

        }
    );

}


// ---------------------------------------------------------
// FALLBACK COPY
// ---------------------------------------------------------

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

    textArea.style.pointerEvents =
        "none";

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

    showCopiedMessage();

}


// ---------------------------------------------------------
// COPIED MESSAGE
// ---------------------------------------------------------

function showCopiedMessage() {

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
                "Copy Email";


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

            closeMobileMenu();

            closeEmailModal();

        }

    }
);


// =========================================================
// WINDOW RESIZE
// =========================================================

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 900) {

            closeMobileMenu();

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

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
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