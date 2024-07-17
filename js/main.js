const filtro = document.querySelector("#filtro");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    filtro.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    filtro.classList.remove("visible");
})