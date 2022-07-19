const token = "3356526174669074";
const url = `https://superheroapi.com/api.php/ ${token}`;

const newHeroBtn = document.getElementById("myButton");

const heroImageDiv = document.getElementById("heroImage");

const searchBtn = document.getElementById("searchButton");

const searchInput = document.getElementById("searchInput");

const heroNameDiv = document.getElementById("heroName");
const getSuperHero = (id, name) => {
  // name => base_url/search/name
  //json.results[0].image.url

  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const superHero = json;
      showHeroInfo(json);
    });
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" />`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`;
    })
    .join("");
  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

// const getSearchSuperHero = (name) => {
//   fetch(`${url}/search/${name}`)
//     .then((response) => response.json())
//     .then((json) => {
//       const hero = json.results[0];
//       // console.log(hero);
//       // showHeroInfo(json);
//       // heroNameDiv.textContent = `${hero.name}`;
//       heroImageDiv.innerHTML = `<img src="${hero.image.url}" alt="" />`;
//       searchInput.value = "";
//     });
// };

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
      searchInput.value = "";
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

newHeroBtn.onclick = () => getSuperHero(randomHero());
searchBtn.onclick = () => getSearchSuperHero(searchInput.value);

// const getSuperHero = (id, name) => {
//   // name => base_url/search/name
//   //json.results[0].image.url

//   // id => base_url/id
//   //json.image.url

//   fetch(`${url}/${id}`)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       heroImageDiv.innerHTML = `<img src="${json.image.url}" alt="" />`;
//     });
// };
