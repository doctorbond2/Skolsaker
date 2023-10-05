const fetchButton = document.querySelector('.fetchButton');

fetchButton.addEventListener('click', async () => {
  const starWarsApi = await fetchStarWars('https://swapi.dev/api/people')
  .catch((error) => {
    console.log('error-check AGAIN');
  });


  console.log(starWarsApi.next);

  if (starWarsApi.next !== undefined || starWarsApi.next !== null) {
    
    const newButton = document.createElement('button');
    newButton.innerText = 'next page';
    newButton.addEventListener('click', async () => {
      await fetchStarWars(starWarsApi.next);
    })
    document.body.appendChild(newButton);
  }


});

async function fetchStarWars(api) {
  const response = await fetch(api);

  if (!response.ok) {
    console.log('error');
    if(response.status === 404) {
      console.log('404');
    }
  } 

  const responseJson = await response.json();

  console.log(responseJson);
  return responseJson;
}



