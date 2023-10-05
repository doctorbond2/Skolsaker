

async function fetchAPI(url) {
  
  const response = await fetch(url);
  
  const json = await response.json();

  return json;
}

fetchAPI('jazon.json')
.then((response) => {
  const newsss = JSON.parse(response);
  console.log(newsss);
});