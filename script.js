const loadData = () => {
  fetch("https://api.TheDogAPI.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};
const displayDog = (dogList) => {
  const dogDetails = document.getElementById("dog-details");
  const firstTenDog = dogList.slice(0, 10);
  for (const dog of firstTenDog) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  <div onclick="loadMealDetail(${dog.id})" class="card mx-auto my-4" style=" width:22rem">
          <img src="${dog.image.url}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h4 class="card-title text-primary">${dog.name}</h4>
            <p>Temperament: ${dog.temperament}</p>
            <p>Bred for: ${dog.bred_for}</p>
            <p>Origin: ${dog.origin}</p>
            <p>Life span: ${dog.life_span}</p>
            <button class="btn btn-warning">Read More</button>
          </div>
  </div>
  `;
    dogDetails.appendChild(div);
  }
};
