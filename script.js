
// Navbar Section

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// menu close after click
document.querySelectorAll("#navMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

// Features Section
const track = document.querySelector(".logo-track");

track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});

// Features Youtube Video Section
const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
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





