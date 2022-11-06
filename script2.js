
let quadrado = document.createElement('div');
quadrado.style.cssText = "background-color: blue; width: 200px; height: 200px; display: flex; justify-content: center; border-radius: 12px";
document.body.appendChild(quadrado); // opção 1

const button = document.createElement("button");
button.innerText = "Clique";
document.querySelector("body").appendChild(button); // opção 2
button.style.cssText = "background-color: lightblue; width: 60px; height: 50px";

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.rowGap = "20px";

button.onclick = () => {
    quadrado.style.backgroundColor = `rgb(${radomcolors()})`;
}       


function radomcolors() {
let numero_1 = Math.floor(Math.random() * 256);
let numero_2 = Math.floor(Math.random() * 256);
let numero_3 = Math.floor(Math.random() * 256);
return (`${numero_1}, ${numero_2}, ${numero_3}`)
}

// quando entrar no botão aparece a mensagem e muda a forma - quando tira do quadrado volta ao normal

quadrado.innerText = "mensagem bonita"
quadrado.onmouseenter = () => {
    quadrado.innerText = "entrou"
    quadrado.style.borderRadius = "50%"
    quadrado.style.display = "flex"
    quadrado.style.alignItems = "center"
}

quadrado.onmouseleave = () => {
    quadrado.innerText = "saiu"
    quadrado.style.borderRadius = "0"
    quadrado.style.display = "flex";
    quadrado.style.alignItems = "center";
}

const campo = document.createElement("input")
document.body.appendChild(campo)
campo.style.margin = "1rem auto"
campo.setAttribute("placeholder", "onkeydown");


const placar = document.createElement("p");
placar.innerText = "0"
document.body.appendChild(placar)
placar.style.cssText = 'display: inline-block';


const campo2 = document.createElement("input");
document.body.appendChild(campo2);
campo2.setAttribute("placeholder", "onkeyup");


const placar2 = document.createElement("p");
placar2.innerText = "0";
document.body.appendChild(placar2);
placar2.style.cssText = "display: inline-block";

function contadorUp() {
    let textoPlacar = placar.innerText
    textoPlacar++;
    placar.textContent = textoPlacar
}

campo.onkeyup = contadorUp