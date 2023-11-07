const gameArea = document.querySelector(".game-area");
const fetchData = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const data = await response.json();
  return data;
};
const renderData = async () => {
  const newActivity = await fetchData();
  console.log(newActivity);

  for (let x in newActivity) {
    gameArea.innerHTML += x;
  }
};
renderData();
