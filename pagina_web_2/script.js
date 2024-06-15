let boton = document.getElementById("active-button")
let boton_cerrar = document.getElementById("close-button")
let activo = false
let menu = document.getElementById("menu-sec")

function accionBtn(){
    activo = !activo
    if (activo){
        menu.classList.remove("menu-celular")
        menu.classList.add("menu-celular-activo")
        boton.classList.remove("menu-logo")
        boton.classList.add("hide-btn")
        boton_cerrar.classList.remove("hide-btn")
        boton_cerrar.classList.add("menu-logo")
    }else{
        menu.classList.remove("menu-celular-activo")
        menu.classList.add("menu-celular")
        boton.classList.add("menu-logo")
        boton.classList.remove("hide-btn")
        boton_cerrar.classList.add("hide-btn")
        boton_cerrar.classList.remove("menu-logo")
    }
}

boton.addEventListener("click", accionBtn);
boton_cerrar.addEventListener("click", accionBtn)

const fecha = new Date()
let hora = fecha.getHours()

const cielo = document.getElementById("cielo")
const img1 = document.getElementById("sky-1")
const img2 = document.getElementById("sky-2")
if (hora > 6 && hora <= 18){
    cielo.classList.remove("main-dark-sky")
    cielo.classList.add("main-sky")
    img2.classList.remove("sky-img")
    img2.classList.add("hide-img")

}else if (hora < 6 || hora > 18){
    cielo.classList.add("main-dark-sky")
    cielo.classList.remove("main-sky")
    img1.classList.remove("sky-img")
    img1.classList.add("hide-img")
}