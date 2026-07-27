const id = localStorage.getItem("paintingID");

const painting = paintings[id];

if (painting) {

    document.getElementById("paymentImage").src = painting.image;

    document.getElementById("paymentTitle").innerText = painting.title;

    document.getElementById("paymentPrice").innerText = painting.price;

}

document.getElementById("paymentForm").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank You! Your payment details have been submitted.");

});