function creaPerso() {
  axios
  .put('https://jsonplaceholder.typicode.com/1', {
    title:'new test',
    completed : false,
  })
  .then(res => showOutput(res)) 
  .catch(err => console.error(err));
};

document.getElementById('creaCharacter').addEventListener('click', );
