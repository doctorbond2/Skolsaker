const fetchButton = document.querySelector('.fetchButton');
const nextButton = document.querySelector('.nextButton');
const NEXT_URL = 'NextURL'

fetchButton.addEventListener('click', async () => {

  const starWarsApi = await fetchStarWars('https://swapi.dev/api/people')
  .catch((error) => {
    console.log('error-check AGAIN');
  });

  if (starWarsApi !== undefined || starWarsApi !== null) {
   localStorage.removeItem(NEXT_URL);
   localStorage.setItem(NEXT_URL, starWarsApi.next);
  }
});

nextButton.addEventListener('click', async () => {
  const nextPage = await fetchStarWars(localStorage.getItem(NEXT_URL));
  localStorage.setItem(NEXT_URL, nextPage.next);
})

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

async function fetchNextPage(url) {

  if (url !== undefined || url !== null) {
    
    console.log(url);
    
  }
}

