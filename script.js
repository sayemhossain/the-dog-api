const loadData = () => {
  fetch("https://api.TheDogAPI.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
