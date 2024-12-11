const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

async function getUser(user) {
  const res = await fetch(APIURL + user);
  const resData = await res.json();

  createUserData(resData);
}

function createUserData(user) {
  // const userCard = document.createElement("div");
  // userCard.classList.add("user-card");

  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div>
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers}<strong>Followers</strong></li>
          <li>${user.following}<strong>Following</strong></li>
          <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = search.value;

  if (userData) {
    getUser(userData);

    search.value = "";
  }
});
