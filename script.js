const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});


// About Section
const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const position = aboutSection.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (position < screen - 100) {
    aboutSection.classList.add("show");
  }
});

// Smooth scroll or CTA action
document.querySelector(".cta-btn").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// Work Section

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// initial state
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.5s ease";
});

// Footer

document.getElementById("copyEmail").addEventListener("click", function () {
  const email = "your@email.com";

  navigator.clipboard.writeText(email).then(() => {
    this.innerText = "✅ Copied!";
    setTimeout(() => {
      this.innerText = "📋 COPY EMAIL";
    }, 2000);
  });
});

// Back to top
const scrollBtn = document.getElementById("scrollTopBtn");
// Show button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//   Contact JS
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return;
  }

  alert("Message Sent Successfully 🚀");

  // Reset form
  this.reset();
});

// Services Section
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});

