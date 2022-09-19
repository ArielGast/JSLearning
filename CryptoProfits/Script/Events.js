// funcion constructora Users
function User (nombreUs, apellidoUs, dni ) {
    this.nombreUs = nombreUs;
    this.apellidoUs = apellidoUs;
    this.dni = dni;
} 

// Login
function logIn () {
    const login = document.getElementById("login");
    login.innerHTML = "";
    login.innerHTML = `<h2>Ingreso de Usuarios</h2>
                       <form id = "form_login">
                       <label for = "name">Nombre</label>
                       <input type = "text" id = "name" name = "userName" required>
                       <label for = "userDni">DNI</label>
                       <input type ="number" id ="dni" userDni = "dni" required>
                       <input type = "button" id = "enviar_form" value="Login">
                       </form>
                       <span class="texto">No sos usuario?</span>
                       <button type = "submit" id = "new-user">Registrate</button>
                      `
    const clickNewUser = document.getElementById('new-user');
    clickNewUser.onclick = () => { 
        newUser()
    }; 
    const clickLogin = document.getElementById('enviar_form');
    clickLogin.onclick = () => {
        ingresar();
    }

}
// Cargar nuevo usuario y gardarlo en localStorage
function newUser () {
    const contenido = document.querySelector("#login");
    contenido.innerHTML = "";
    contenido.innerHTML = `<h3>Ingresa tus datos en el siguiente formulario</h3>
                           <form id = "form_usuario">
                           <label for = "name">Nombre</label>
                           <input type = "text" id = "name" name = "userName" required>
                           <label for = "surName">Apellido</label>
                           <input type = "text" id = "surName" surName = "userSurame" required>
                           <label for = "userDni">DNI</label>
                           <input type ="number" id ="dni" userDni = "dni" required>
                           <input type = "button" id="enviar_form" value ="Enviar">
                           </form>`
    const userName = document.getElementById("name");
    const userSurname = document.getElementById("surName");
    const userDni = document.getElementById("dni");
    const enviar = document.getElementById('enviar_form');
    enviar.onclick = () => { 
        users.push(new User(userName.value, userSurname.value, userDni.value));
        localStorage.setItem('listaUsuarios', JSON.stringify(users)); 
        contenido.innerHTML="";
        const parrafo = document.createElement('p');
        parrafo.innerText = `Usuario cargado correctamente`;
        contenido.append(parrafo);
        console.log(users);
    }
}


// Contenido del Home - Editar
function home() {
    const home = document.getElementById('login');
    home.innerHTML = "";
}

// Ingreso de Usuario por validación de nombre y Dni
function ingresar() {
    const login = document.getElementById("login");
    const userName = document.getElementById("name");
    const userDni = document.getElementById('dni');
    const existeDni = users.some(usuario => usuario.dni === userDni.value);
    if (existeDni == true) {
        home();
    } else {
        const parrafo = document.createElement('p');
        parrafo.innerText = `DNI no existe . Hace click en registrarte`
        login.append(parrafo);
    }
}
