const url = "https://jsonplaceholder.typicode.com/users"
const $listUsers = document.querySelector('.list-users')
fetch(url)
      .then(response => response.json())
      .then((data) => {
        data.forEach((usuario) => {
          const li = document.createElement("li")
          li.textContent = usuario.name + "${$}"
          $listUsers.appendChild(li)
        });
      })

