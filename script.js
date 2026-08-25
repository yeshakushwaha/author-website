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