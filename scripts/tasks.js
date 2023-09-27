const button = document.getElementById('btn');

// 👇️ event handler function takes `event` parameter
button.addEventListener('click', event => {
  // ✅ Works as expected
  console.log(event);

  console.log('Button clicked');
});
