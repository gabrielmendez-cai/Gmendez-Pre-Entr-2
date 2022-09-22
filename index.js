let resultados = document.getElementById("resultados");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
e.preventDefault();
let inputs = e.target.children;
let valor = parseInt(inputs[0].value);

let div = document.createElement("div");
div.innerHTML = `<h2>El valor a recibir en dolares es: ${valor * 0.234}</h2>`;
resultados.append(div);
 });