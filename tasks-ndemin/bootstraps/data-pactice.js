const cardTemplate = document.querySelector("[data-user-template]");
console.log(cardTemplate);
const clonedContent = cardTemplate.cloneNode(true);
console.log(clonedContent);

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Response not ok");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error("error", error);
    throw new error();
  }
}
async function processData() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/users");
}
processData();
