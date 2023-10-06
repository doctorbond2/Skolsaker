

async function fetchAPI(url) {
  try {
    const response = await fetch(url);
  
    const json = await response.json();
    
    console.log(json);
    return json;
  }
  catch(error) {
    console.error(error,'error');
  }
 
}



function produce() {
  fetchAPI('jazon.json');
  

}