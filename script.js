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
    div.classList.add("col-lg-4");
    div.innerHTML = `
        <h2>${dog.name}</h2>
    `;
    dogDetails.appendChild(div);
  }
};
