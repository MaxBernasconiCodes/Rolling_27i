let userAvatar = document.getElementById('userAvatar');
let userName = document.getElementById('userName');
const mockApiURL = "https://6269dd0e53916a0fbdf1f957.mockapi.io/usuarios";


async function getUserById(id) {
    const response = await fetch(mockApiURL + "/" + id);
    let data = await response.json();
    return data;
  }


  let user = getUserById(1);

  user.then(
  (response)=>{
      console.log(response);
      userAvatar.setAttribute('src', response.avatar);
      userName.innerHTML = response.name;
    }
  );