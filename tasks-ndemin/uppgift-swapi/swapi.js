

displayElement = document.querySelector('.js-character-display');

document.getElementById('fetchCharacter').addEventListener('click', () => {
  fetchAPI('https://swapi.dev/api/planets/?page=1');
});

async function fetchAPI(api) {

 
    const fetchResults = await fetch(api);
    const data = await fetchResults.json();
  
    console.log(data);
  
   
   let {count, next, previous, results} = data;
  
   const planetList = data.results;
   let planetInfo = '';
  
   planetList.forEach((value, index) => {
    
    const {name, rotation_period, orbital_period, diameter, climate} = value;
  
    const planetPage = document.createElement('div');
    planetInfo += `
    <h2>${name}</h2>
    <h4>Climate:${climate}</h4>
    <h4>Diameter:${diameter}</h4>
    `;
    planetPage.className = 'planet-page';
    console.log(value);
   });
  
   displayElement.innerHTML = planetInfo;
  

}



