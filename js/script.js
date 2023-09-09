const containerDiv = document.getElementById("container");
const searchForm = document.getElementById("searchForm");

async function fetchCatApi() {
  const apiURL = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_Fz11k2UhIMH6X9InkxP65wsMyYSDH5LUlR8PwPGOg6SJc33BTHatF5EZVXKqlptq`;
  const response = await fetch(apiURL);
  const jsonResponse = await response.json();

  return jsonResponse;
}

function showListOfBreeds(breeds) {
  containerDiv.innerHTML = "";
  breeds.forEach(({ url, breeds }) => {
    const {
      name,
      description,
      origin,
      life_span,
      adaptability,
      affection_level,
      energy_level,
      social_needs,
      child_friendly,
      dog_friendly,
    } = breeds[0];

    containerDiv.innerHTML += `
      <div class="col">
        <div class="card">
          <img src="${url}" class="card-img-top object-fit-cover" height="400" alt="${name}">
          <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <h6 class="card-subtitle">${origin}</h6>
            <p class="card-text mt-3">${description}</p>
          </div>
          <ul class="list-group list-group-flush" id="list">
            <li class="list-group-item"><strong>Life span:</strong> ${life_span} years</li>
            <li class="list-group-item"><strong>Adaptability:</strong> ${adaptability}</li>
            <li class="list-group-item"><strong>Energy level:</strong> ${energy_level}</li>
            <li class="list-group-item"><strong>Social needs:</strong> ${social_needs}</li>
            <li class="list-group-item"><strong>Affection level:</strong> ${affection_level}</li>
            <li class="list-group-item"><strong>Child friendly:</strong> ${child_friendly}</li>
            <li class="list-group-item"><strong>Dog friendly:</strong> ${dog_friendly}</li>
          </ul>
        </div>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const breedResponse = await fetchCatApi();
  showListOfBreeds(breedResponse);
});
