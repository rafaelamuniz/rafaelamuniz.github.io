document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector(".abas").addEventListener("click", () =>
    document.querySelector(".sections").classList.toggle("show-notices")
);

function contactButtonFunction() {
    document.querySelector(".hamburguer").click();
}