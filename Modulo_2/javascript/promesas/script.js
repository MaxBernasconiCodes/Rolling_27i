const mockApiURL = "https://6269dd0e53916a0fbdf1f957.mockapi.io/usuarios";

let newUsername = document.getElementById("newUserName");
let newUserURL = document.getElementById("newUserURL");
let newUserForm = document.getElementById("newUserForm");
let content = document.getElementById("content");
newUserForm.addEventListener("click", (e) => {
  e.preventDefault();
});

async function getUsers() {
  const response = await fetch(mockApiURL);
  let data = await response.json();
  return data;
}

function clearForm() {
  newUserForm.reset();
}
function clearGrid() {
  content.innerHTML = "";
}

function createObjectUser() {
  let newUser = {
    name: newUsername.value,
    avatar: newUserURL.value,
  };
  return newUser;
}

async function postUser(user) {
  const response = await fetch(mockApiURL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return response;
}

// UPDATE USER
async function updateUser(user, id) {
  const response = await fetch(mockApiURL + "/" + id, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return response;
}

function editUser(id) {
  let edicion = createObjectUser();
  updateUser(edicion, id).then(() => {
    clearForm();
    clearGrid();
    loadUsers();
  });
}

// DELETE USER
async function deleteUser(id) {
  const response = await fetch(mockApiURL + "/" + id, {
    method: "DELETE",
  });
  return response;
}


// BUTTON FUNCTIONS

function btnCreate() {
  let newUser = createObjectUser();
  postUser(newUser).then(() => {
    clearForm();
    clearGrid();
    loadUsers();
  });
}

function btnDelete(id) {
  deleteUser(id).then(() => {
    clearForm();
    clearGrid();
    loadUsers();
  });
}

function createCard(name, avatar, id) {
  //creacion de los elementos
  let newCard = document.createElement("div");
  let img = document.createElement("img");
  let cardBody = document.createElement("div");
  let title = document.createElement("h5");
  let button = document.createElement("button");
  let buttonEdit = document.createElement("button");
  let buttonDelete = document.createElement("button");

  // asignacion de clases a los elementos
  newCard.className = "card";
  img.className = "card-img-top";
  cardBody.className = "card-body";
  title.className = "card-title";
  button.className = "btn btn-primary";
  buttonEdit.className = "btn btn-success";
  buttonDelete.className = "btn btn-danger";

  //Asignacion de los datos de los elementos
  img.setAttribute("src", avatar);
  button.innerHTML = "Ver Mas";
  button.addEventListener("click", () => {
    let singleUser = getUserById(id);
    singleUser.then((usuario) => {
      createCard(usuario.name, usuario.avatar, usuario.id);
    });
  });

  buttonEdit.innerHTML = "Editar";
  buttonEdit.addEventListener("click", () => {
    editUser(id);
  });
  img.setAttribute("src", avatar);

  buttonDelete.innerHTML = "Eliminiar";
  buttonDelete.addEventListener("click", () => {
    btnDelete(id);
  });

  //append de los elementos a sus padres
  title.append(name);
  cardBody.append(title);
  cardBody.append(button);
  cardBody.append(buttonEdit);
  cardBody.append(buttonDelete);
  newCard.append(img);
  newCard.append(cardBody);
  document.getElementById("content").append(newCard);

  //devolucion del resultado final
  return newCard;
}

function loadUsers() {
  let usuarios = getUsers();
  usuarios.then((response) => {
   response.map((usuario) => {
      createCard(usuario.name, usuario.avatar, usuario.id);
    });
  });
}

//carga inicial
loadUsers();