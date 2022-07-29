let nombre = prompt("Elija el nombre de esta pagina web");
let titulo = prompt("Elija el titulo de esta pagina web");
let parraph = prompt("Parrafo principal de esta pagina web");
let usuarios = [];
let contadorClicks = 0;
let containerDatos = ["", "", ""];
if (nombre != null) {
  document.getElementById("logo").innerHTML = nombre;
}
if (titulo != null) {
  document.getElementById("titulo").innerHTML = titulo;
}
if (parraph != null) {
  document.getElementById("parrafo").innerHTML = parraph;
}
function registro(user, email, password) {
  this.user = user;
  this.email = email;
  this.password = password;
}
usuarios.push(new registro("admin", "admin@gmail.com", "Z2XHJ8LKW"));
usuarios.push(new registro("designer", "designer@gmail.com", "462226819tecH"));
usuarios.forEach((element) => console.log(element));
function clickBtn() {
  console.log("hizo click en el titulo");
  contadorClicks = contadorClicks + 1;
  console.log(contadorClicks);
}
const btn = document.getElementById("btn");
btn.onclick = clickBtn;

if (typeof Storage !== "undefined") {
  console.log("LocalStorage Dispo");
} else {
  console.log("LocalStorage no soportado");
}

localStorage.setItem("creador", "Sebastian Vargas");
console.log(localStorage.getItem("creador"));
