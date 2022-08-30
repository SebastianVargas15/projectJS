let usuarios = [];
Swal.fire("Bienvenido");
function registro(user, email, password, name, lastname) {
  this.user = user;
  this.email = email;
  this.password = password;
  this.name = name;
  this.lastname = lastname;
}
usuarios.push(
  new registro("admin", "admin@gmail.com", "Z2XHJ8LKW", "sebastian", "vargas")
);
usuarios.push(
  new registro(
    "designer",
    "designer@gmail.com",
    "462226819tecH",
    "gimena",
    "lopez"
  )
);
usuarios.forEach((element) => console.log(element.user));




localStorage.setItem("myusuarios", JSON.stringify(usuarios));
let myusuarios = localStorage.getItem("myusuarios");
function registrarse() {
  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let userExist = false;
  usuarios.forEach((element) => {
    if (element.user == user) {
      userExist = true;
    }
  });
  if (userExist) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El usuario ya existe!",
    });
  } else {
    usuarios.push(new registro(user, email, password, name, lastname));
    localStorage.setItem("myusuarios", JSON.stringify(usuarios));
    setTimeout(() => {
      conditional = true;
      Swal.fire({
        title: "Cargando....",
        text: "Espere un momento",
      });
    }, 0);
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Registro Exitoso",
        text: "Bienvenido",
      });
      conditional = false;
    }, 2000);
    console.log(usuarios);
  }
}
const regSubmit = document.getElementById("btnsubmit");
regSubmit.addEventListener("click", registrarse);
console.log(usuarios);

 // use promise to wait for html to load
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  let myusuarios = localStorage.getItem("myusuarios");
  usuarios = JSON.parse(myusuarios);
  console.log(usuarios);
}
);

// fetch para mostrar nombres de usuarios
const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  return data;
}

function searchUser() {
  let user = document.getElementById("input-search").value;
  let userExist = false;
  usuarios.forEach((element) => {
    if (element.user == user) {
      userExist = true;
    }
  }
  );
  if (userExist) {
    let pUserFound = document.getElementById("puserfound");
    pUserFound.innerHTML = "Usuario encontrado";
    Swal.fire({
      icon: "success",
      title: "Hola!",
      text: "Este usuario existe",
    });
  } else {
    let pUserFound = document.getElementById("puserfound");
    pUserFound.innerHTML = "Usuario no encontrado";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El usuario no existe!",
    });
  }
}

const searchSubmit = document.getElementById("btnsearch");
searchSubmit.addEventListener("click", searchUser);
