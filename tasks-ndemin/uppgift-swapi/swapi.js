

displayElement = document.querySelector('.js-character-display');

document.getElementById('fetchCharacter').addEventListener('click', () => {
  fetchAPI();
});

async function fetchAPI() {
  const results = await fetch('https://swapi.dev/api/planets/?page=1');
const data = await results.json();

 console.log(data);
 
 let {count, next, previous} = data;
}

