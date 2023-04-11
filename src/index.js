let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//Fetch Andy's Toys
function fetchToys(){
fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => data.forEach(toy => toyInfo(toy)))
  }  
fetchToys()
      
//toy info     
const container = document.getElementById('toy-collection'); 
function toyInfo(toy){
  const div = document.createElement('div');
  div.className = 'card';
  
  const toyName = document.createElement('h2');
  toyName.textContent = toy.name;

  const img = document.createElement('img');
  img.src = toy.image;
  img.className = 'toy-avatar';
      
  const p = document.createElement('p');
  p.textContent = `${toy.likes}likes`;

  const btn = document.createElement('button');
  btn.className = 'like-btn';
  btn.id = toy.id;
  btn.textContent = "Like ❤️"

  container.appendChild(div);

  div.appendChild(toyName, img, p, btn);
  }

  //Add a new toy
function newToy(){
const toyForm = document.getElementsByClassName('add-toy-form');
toyForm.addEventListener('submit', e => {
  fetch('http://localhost:3000/toys'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      'name': e.target.name.value,
      'image': e.target.image.value,
      'likes': 0
    })
  }
  .then(res => res.json())
  .then(data => data)
})

}

//increase a toy's likes//
function increaseLikes(){
  btn.addEventListener('click', () => {
    fetch('http://localhost:3000/toys/${toy.id}'), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  })
}