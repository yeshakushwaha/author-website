
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
emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const btn=document.getElementById("sendBtn");

btn.disabled=true;
btn.innerHTML="Sending...";

const params={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

subject:document.getElementById("subject").value,

message:document.getElementById("message").value

};

try{

await emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
params
);

alert("Thank you! Your enquiry has been sent successfully.");

form.reset();

}
catch(error){

alert("Something went wrong. Please try again.");

console.log(error);

}

btn.disabled=false;
btn.innerHTML="Start the Conversation";

});





