// arrays y bucles 
let refranes = [
    "Más vale tarde que nunca.",
    "Camarón que se duerme, se lo lleva la corriente.",
    "El que mucho abarca, poco aprieta.",
    "No hay mal que por bien no venga.",
    "A falta de pan, buenas son galletas.",
    "Quien no arriesga, no gana."
];
let p = document.getElementById("parrafo");

function refranRandom() {
    let num = Math.floor(Math.random() * refranes.length);
    p.textContent = "\"" + refranes[num] + "\"";
}

let colores = [
    { nombre: "red", traduccion: "rojo" },
    { nombre: "blue", traduccion: "azul" },
    { nombre: "green", traduccion: "verde" },
    { nombre: "black", traduccion: "negro" },
    { nombre: "yellow", traduccion: "amarillo" },
];
let p2 = document.getElementById("parrafo2");

function color() {
    let num = Math.floor(Math.random() * colores.length);
    p2.textContent = colores[num].nombre.toUpperCase() + " en español es " + colores[num].traduccion.toUpperCase();
    p2.setAttribute("class", colores[num].nombre);

    switch (p2.getAttribute("class")) {
        case "red":
            p2.style.backgroundColor = p2.getAttribute("class");
            break;
        case "blue":
            p2.style.backgroundColor = p2.getAttribute("class");
            break;
        case "green":
            p2.style.backgroundColor = p2.getAttribute("class");
            break;
        case "black":
            p2.style.backgroundColor = p2.getAttribute("class");
            break;
        case "yellow":
            p2.style.backgroundColor = p2.getAttribute("class");
            break;
    }

    if (p2.getAttribute("class") == "blue" || p2.getAttribute("class") == "black") {
        p2.style.color = "white";
    } else {
        p2.style.color = "black";
    }
}