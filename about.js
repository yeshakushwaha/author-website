document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-container");

  if (hero) {
    hero.classList.add("hero-loaded");
  }
});

/* =========================================
   BIOGRAPHY ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const biography = document.querySelector(".biography-container");

  if (!biography) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("biography-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  observer.observe(biography);
});

/* =========================================
   AWARDS SECTION ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const awards = document.querySelector(".awards-container");

  if (!awards) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("awards-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  observer.observe(awards);
});


document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".award-card");

    /* =====================================
       SCROLL ANIMATION
    ===================================== */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("award-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        cards.forEach(function (card) {

            card.classList.add("award-animation");

            observer.observe(card);

        });

    }


    /* =====================================
       IMAGE CHECK
    ===================================== */

    const images =
        document.querySelectorAll(".award-image img");


    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.error(
                "IMAGE NOT FOUND:",
                image.src
            );

        });


        image.addEventListener("load", function () {

            console.log(
                "IMAGE LOADED:",
                image.src
            );

        });

    });

});