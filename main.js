//Swal.fire("Hola mundo");


let usuarios = [];


function registro(user, email, password,name,lastname) {
  this.user = user;
  this.email = email;
  this.password = password;
  this.name = name;
  this.lastname = lastname;
}
usuarios.push(new registro("admin", "admin@gmail.com", "Z2XHJ8LKW", "sebastian", "vargas"));
usuarios.push(new registro("designer", "designer@gmail.com", "462226819tecH", "gimena", "lopez"));
//usuarios.forEach((element) => console.log(element.user));



function registrarse() {
  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  usuarios.push(new registro(user,email,password,name,lastname));
}

const regSubmit = document.getElementById("btnsubmit");
regSubmit.addEventListener("click", registrarse);
console.log(usuarios);






// function loaddata() {
//   let users = JSON.parse(localStorage.getItem("users"));
//   users.forEach((element) => console.log(element));
// }
// localStorage.setItem("users", JSON.stringify(usuarios));

// if (typeof Storage !== "undefined") {
//   console.log("LocalStorage Dispo");
// } else {
//   console.log("LocalStorage no soportado");
// }
// localStorage.setItem("creador", "Sebastian Vargas");
// console.log(localStorage.getItem("creador"));
// loaddata();

// fetchedData = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((element) => {
//       console.log(element.name);
//     });
//   });

// ajax = new XMLHttpRequest();
// ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
// ajax.send();
// ajax.onreadystatechange = function () {
//   if (ajax.readyState == 4 && ajax.status == 200) {
//     console.log(ajax.responseText);
//   }
// };


