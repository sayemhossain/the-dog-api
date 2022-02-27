const loadData = () => {
  fetch("https://api.TheDogAPI.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};
const displayDog = (dogList) => {
  const dogDetails = document.getElementById("dog-details");
  dogDetails.innerText = dogList[0].name;
};
