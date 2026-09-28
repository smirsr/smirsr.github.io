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


function openMobileMenu() {

    if (!mobileMenu || !mobileMenuOverlay) {
        return;
    }

    mobileMenu.classList.add("active");

    mobileMenuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeMobileMenu() {

    if (!mobileMenu || !mobileMenuOverlay) {
        return;
    }

    mobileMenu.classList.remove("active");

    mobileMenuOverlay.classList.remove("active");

    document.body.style.overflow = "";
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMobileMenu
    );

}


if (closeMenuButton) {

    closeMenuButton.addEventListener(
        "click",
        closeMobileMenu
    );

}


if (mobileMenuOverlay) {

    mobileMenuOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

}


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


function openEmailModal() {

    if (!emailModal) {
        return;
    }

    emailModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeEmailModal() {

    if (!emailModal) {
        return;
    }

    emailModal.classList.remove("active");

    document.body.style.overflow = "";
}


if (emailPopupButton) {

    emailPopupButton.addEventListener(
        "click",
        openEmailModal
    );

}


if (emailModalClose) {

    emailModalClose.addEventListener(
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

                showCopiedMessage();

            }

        }
    );

}


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
// RESET MOBILE MENU WHEN RESIZING TO DESKTOP
// =========================================================

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 850) {

            closeMobileMenu();

        }

    }
);