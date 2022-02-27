const loadData = () => {
  fetch("https://api.TheDogAPI.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};
const displayDog = (dogList) => {
  const dogDetails = document.getElementById("dog-details");
  const firstTenDog = dogList.slice(0, 50);
  for (const dog of firstTenDog) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  <div onclick="loadMealDetail(${dog.id})" class="card mx-auto my-4" style="height:35rem; width:22rem">
          <img src="${dog.image.url}" class="card-img-top img-fluid" alt="..." style="height:200px">
          <div class="card-body">
            <h4 class="card-title text-primary text-uppercase">${dog.name}</h4>
            <p><span class="fw-bold">Temperament:</span> ${dog.temperament}</p>
            <span>Bred for: ${dog.bred_for}</span>
            <span>Origin: ${dog.origin}</span>
            <p>Life span: ${dog.life_span}</p>
            <span>Weight: ${dog.weight.metric}</span>
            <p>Height: ${dog.height.metric}</p>
            

            <button class="btn btn-warning">Read More</button>
          </div>
  </div>
  `;
    dogDetails.appendChild(div);
  }
};
