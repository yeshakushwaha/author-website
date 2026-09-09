/* =========================================================
   AUTHOR WEBSITE - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   NAVBAR / MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");

    const isOpen = menuBtn.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu after clicking a navigation link
  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================================
   IMAGE / CARD HOVER EFFECT
   ========================================================= */

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


/* =========================================================
   FEATURED LOGO SLIDER
   ========================================================= */

const logoTrack = document.querySelector(".logo-track");

if (logoTrack) {
  logoTrack.addEventListener("mouseenter", () => {
    logoTrack.style.animationPlayState = "paused";
  });

  logoTrack.addEventListener("mouseleave", () => {
    logoTrack.style.animationPlayState = "running";
  });
}


/* =========================================================
   FEATURED VIDEO CARDS
   ========================================================= */

document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


/* =========================================================
   COPY EMAIL
   ========================================================= */

const copyEmailBtn = document.getElementById("copyEmail");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async function () {
    const email = "ykushwaha1213@gmail.com";
    const originalText = this.innerText;

    try {
      await navigator.clipboard.writeText(email);

      this.innerText = "✅ Copied!";

      setTimeout(() => {
        this.innerText = originalText || "📋 COPY EMAIL";
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);

      // Fallback
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();

      try {
        document.execCommand("copy");
        this.innerText = "✅ Copied!";

        setTimeout(() => {
          this.innerText = originalText || "📋 COPY EMAIL";
        }, 2000);
      } catch (fallbackError) {
        console.error("Fallback copy failed:", fallbackError);
      }

      tempInput.remove();
    }
  });
}


/* =========================================================
   CONTACT FORM - EMAILJS
   ========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const sendBtn = document.getElementById("sendBtn");

    if (!sendBtn) {
      return;
    }

    // Check whether EmailJS is loaded
    if (typeof emailjs === "undefined") {
      console.error("EmailJS is not loaded.");

      alert(
        "The contact service is temporarily unavailable. Please contact us directly by email or WhatsApp."
      );

      return;
    }

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const subject =
      document.getElementById("subject")?.value.trim() || "";
    const message =
      document.getElementById("message")?.value.trim() || "";

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Save original button text
    const originalButtonText = sendBtn.innerHTML;

    // Loading state
    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";

    const params = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      /*
       * IMPORTANT:
       * Replace these three values with your actual EmailJS details.
       */

      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        params
      );

      alert("Thank you! Your enquiry has been sent successfully.");

      contactForm.reset();

    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Something went wrong while sending your enquiry. Please try again or contact us directly."
      );

    } finally {
      sendBtn.disabled = false;
      sendBtn.innerHTML = originalButtonText;
    }
  });
}


/* =========================================================
   SERVICES FAQ
   ========================================================= */

const accordionItems = document.querySelectorAll(".accordion-item");

      accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const icon = item.querySelector(".icon");

        header.addEventListener("click", () => {
          const isActive = item.classList.contains("active");

          // Close all accordion items
          accordionItems.forEach((accordion) => {
            accordion.classList.remove("active");
            accordion.querySelector(".icon").textContent = "+";
          });

          // Open clicked accordion
          if (!isActive) {
            item.classList.add("active");
            icon.textContent = "−";
          }
        });
      });

      window.addEventListener("DOMContentLoaded", () => {
        const firstItem = document.querySelector(".accordion-item");

        if (firstItem) {
          firstItem.classList.add("active");
          firstItem.querySelector(".icon").textContent = "−";
        }
      });


/* =========================================================
   PAINTING DETAILS
   ========================================================= */

document.querySelectorAll(".view-details-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const paintingId = this.dataset.id;

    if (paintingId) {
      localStorage.setItem("paintingID", paintingId);
    }
  });
});


/* =========================================================
   SCROLL TO TOP BUTTON
   ========================================================= */

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


/* =========================================================
   QUOTE SECTION - INTERSECTION OBSERVER
   ========================================================= */

const quoteWrapper = document.querySelector(".quote-wrapper");

if (quoteWrapper && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  observer.observe(quoteWrapper);
}


/* =========================================
   MOMENTS DATA
========================================= */

const momentsImages = [

    {
        src: "img/gallery/1.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/2.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/3.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/4.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/5.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/6.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/7.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/8.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/9.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/10.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/11.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/12.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/13.JPG",
        alt: "Beautiful moment"
    },

    {
        src: "img/gallery/14.JPG",
        alt: "Beautiful moment"
    }

];


/* =========================================
   SETTINGS
========================================= */

const AUTO_PLAY_SPEED = 1500;

const MOVE_SPEED = 500;


/* =========================================
   ELEMENTS
========================================= */

const track =
    document.getElementById(
        "momentsTrack"
    );

const slider =
    document.getElementById(
        "momentsSlider"
    );

const dotsContainer =
    document.getElementById(
        "momentDots"
    );


/* =========================================
   VARIABLES
========================================= */

let currentIndex = 0;

let autoPlayTimer = null;

let isPlaying = true;

let isMoving = false;

let cardWidth = 0;

let gap = 0;

let originalCount =
    momentsImages.length;


/* =========================================
   CREATE CARDS
========================================= */

function createCarousel() {

    track.innerHTML = "";

    dotsContainer.innerHTML = "";


    /*
       Clone the images multiple times.

       This creates a genuine continuous
       carousel instead of a simple
       first-to-last reset.
    */

    const allImages = [

        ...momentsImages,
        ...momentsImages,
        ...momentsImages

    ];


    allImages.forEach(
        (image, index) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "moment-card";


            const img =
                document.createElement(
                    "img"
                );


            img.src =
                image.src;


            img.alt =
                image.alt ||
                "Beautiful moment";


            img.loading =
                index < 10
                    ? "eager"
                    : "lazy";


            card.appendChild(img);


            /*
               Lightbox original image index
            */

            card.dataset.imageIndex =
                index % originalCount;


            card.addEventListener(
                "click",
                () => {

                    openLightbox(
                        Number(
                            card.dataset.imageIndex
                        )
                    );

                }
            );


            track.appendChild(card);

        }
    );


    /*
       Create dots for original images
    */

    momentsImages.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    "button"
                );

            dot.className =
                "moment-dot";


            dot.setAttribute(
                "aria-label",
                `Go to image ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    goToImage(
                        index
                    );

                }
            );


            dotsContainer.appendChild(
                dot
            );

        }
    );


    /*
       Start from the middle copy.

       This is what makes infinite
       scrolling possible in both directions.
    */

    currentIndex =
        originalCount;


    calculateDimensions();

    updatePosition(false);

    updateDots();

}


/* =========================================
   CALCULATE CARD SIZE
========================================= */

function calculateDimensions() {

    const card =
        track.querySelector(
            ".moment-card"
        );


    if (!card) return;


    const style =
        window.getComputedStyle(
            track
        );


    gap =
        parseFloat(
            style.gap
        ) || 0;


    cardWidth =
        card.offsetWidth +
        gap;

}


/* =========================================
   MOVE TRACK
========================================= */

function updatePosition(
    animate = true
) {

    if (!animate) {

        track.style.transition =
            "none";

    }

    else {

        track.style.transition =
            `transform ${MOVE_SPEED}ms cubic-bezier(.22,.61,.36,1)`;

    }


    /*
       Center the current image
       inside the visible carousel.
    */

    const sliderWidth =
        slider.offsetWidth;


    const cardActualWidth =
        cardWidth -
        gap;


    const centerOffset =
        (
            sliderWidth -
            cardActualWidth
        ) / 2;


    const translateX =
        -(
            currentIndex *
            cardWidth
        ) +
        centerOffset;


    track.style.transform =
        `translate3d(${translateX}px,0,0)`;

    updateDots();

}


/* =========================================
   NEXT
========================================= */

function nextImage() {

    if (isMoving) return;

    isMoving = true;

    currentIndex++;

    updatePosition(true);


    /*
       When we reach the third copy,
       silently move back to middle copy.

       User never sees the reset.
    */

    setTimeout(
        () => {

            if (
                currentIndex >=
                originalCount * 2
            ) {

                currentIndex -=
                    originalCount;

                updatePosition(false);

            }


            isMoving = false;

        },
        MOVE_SPEED + 20
    );

}


/* =========================================
   PREVIOUS
========================================= */

function previousImage() {

    if (isMoving) return;

    isMoving = true;

    currentIndex--;

    updatePosition(true);


    setTimeout(
        () => {

            if (
                currentIndex <
                originalCount
            ) {

                currentIndex +=
                    originalCount;

                updatePosition(false);

            }


            isMoving = false;

        },
        MOVE_SPEED + 20
    );

}


/* =========================================
   GO TO SPECIFIC IMAGE
========================================= */

function goToImage(index) {

    currentIndex =
        originalCount +
        index;


    updatePosition(true);

    restartAutoplay();

}


/* =========================================
   COUNTER
========================================= */

function updateCounter() {

    let actualIndex =
        currentIndex %
        originalCount;


    if (
        actualIndex < 0
    ) {

        actualIndex +=
            originalCount;

    }


    currentCounter.textContent =
        String(
            actualIndex + 1
        ).padStart(
            2,
            "0"
        );


    totalCounter.textContent =
        String(
            originalCount
        ).padStart(
            2,
            "0"
        );

}


/* =========================================
   DOTS
========================================= */

function updateDots() {

    let actualIndex =
        currentIndex %
        originalCount;


    if (
        actualIndex < 0
    ) {

        actualIndex +=
            originalCount;

    }


    const dots =
        document.querySelectorAll(
            ".moment-dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === actualIndex
            );

        }
    );

}


/* =========================================
   AUTOPLAY
========================================= */

function startAutoplay() {

    stopAutoplay();


    autoPlayTimer =
        setInterval(
            () => {

                nextImage();

            },
            AUTO_PLAY_SPEED
        );


    isPlaying = true;

    playIcon.textContent =
        "Ⅱ";

}


function stopAutoplay() {

    if (
        autoPlayTimer
    ) {

        clearInterval(
            autoPlayTimer
        );

        autoPlayTimer = null;

    }

}


/* =========================================
   RESTART AUTOPLAY
========================================= */

function restartAutoplay() {

    if (!isPlaying) return;

    startAutoplay();

}


/* =========================================
   PAUSE ON HOVER
========================================= */

slider.addEventListener(
    "mouseenter",
    () => {

        if (isPlaying) {

            stopAutoplay();

        }

    }
);


slider.addEventListener(
    "mouseleave",
    () => {

        if (isPlaying) {

            startAutoplay();

        }

    }
);


/* =========================================
   TOUCH SWIPE
========================================= */

let touchStartX = 0;

let touchEndX = 0;


slider.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event
                .changedTouches[0]
                .screenX;

        stopAutoplay();

    },
    {
        passive: true
    }
);


slider.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event
                .changedTouches[0]
                .screenX;


        const distance =
            touchStartX -
            touchEndX;


        if (
            Math.abs(distance) > 50
        ) {

            if (distance > 0) {

                nextImage();

            }

            else {

                previousImage();

            }

        }


        if (isPlaying) {

            startAutoplay();

        }

    },
    {
        passive: true
    }
);


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById(
        "momentLightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );

const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );

const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );


let lightboxIndex = 0;


function openLightbox(index) {

    lightboxIndex =
        index;


    lightboxImage.src =
        momentsImages[
            lightboxIndex
        ].src;


    lightboxImage.alt =
        momentsImages[
            lightboxIndex
        ].alt;


    lightbox.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    lightbox.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


function nextLightbox() {

    lightboxIndex++;

    if (
        lightboxIndex >=
        originalCount
    ) {

        lightboxIndex = 0;

    }

    openLightbox(
        lightboxIndex
    );

}


function previousLightbox() {

    lightboxIndex--;

    if (
        lightboxIndex < 0
    ) {

        lightboxIndex =
            originalCount - 1;

    }

    openLightbox(
        lightboxIndex
    );

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightboxNext.addEventListener(
    "click",
    nextLightbox
);


lightboxPrev.addEventListener(
    "click",
    previousLightbox
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            lightbox
        ) {

            closeLightbox();

        }

    }
);


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains(
                "show"
            )
        ) return;


        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextLightbox();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousLightbox();

        }

    }
);


/* =========================================
   RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        calculateDimensions();

        updatePosition(false);

    }
);


/* =========================================
   INITIALIZE
========================================= */

createCarousel();

startAutoplay();