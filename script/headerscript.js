fetch("../pages/header.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    })
    .then(() => {
        const navToggle = document.querySelector(".mobile-nav-toggle");
        const sideNav = document.querySelector(".side-nav");
        const body = document.querySelector("body");

        navToggle.addEventListener("click", () => {
            sideNav.classList.toggle("opened");
            body.classList.toggle("opened");
        });

        // ---

        const boutiqueToggle = document.querySelector(".boutiqueToggle");
        const sideCart = document.querySelector(".sideCart");

        boutiqueToggle.addEventListener("click", () => {
            sideCart.classList.toggle("opened");
        });

        // ---

        let ajout = document.querySelectorAll(".panier");
        for (let i = 0; i < ajout.length; i++) {
            ajout[i].addEventListener("click", function () {
                ajout[i].innerHTML = "Ajouté !";
            });
        }
    });
fetch("../pages/footer.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });
