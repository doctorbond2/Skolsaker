const fetchButton = document.querySelector('.fetchButton');
const STARWARS_API = 'https://swapi.dev/api/people';
const charDisplay = document.querySelector('.js-character-display');
const fetchy = document.querySelector('.fetchy');
console.log(fetchy);



fetchButton.addEventListener('click', async () => {

  fetchy.innerHTML = 'Fetching...';

  await fetchStarWars(STARWARS_API)
  .then((data) => {
    fetchy.style.display = 'none';
    console.log(data);
    renderCharacterData(data);
  })
  .catch((error) => {
    console.log('error?')
  });
});

async function fetchStarWars(url) {

  const response = await fetch(url)
  if(!response.ok) {
    if(response.status === 404) {
      console.error('error 404');
    } else {
      console.error('error unknown');
    }

  }
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;

}

function renderCharacterData(data) {

  const characterList = data.results;

  characterList.forEach((v,i) => {
    const charBox = document.createElement('div');
    charBox.className = 'char-box';
    charDisplay.appendChild(charBox);
  });
  

}