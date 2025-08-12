function createElements() {
  const template = document.getElementById('vehicle-card-template');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.vehicle-card__name').textContent = dataCar.name;
  clone.querySelector('.vehicle-card__img').src = dataCar.imgSrc;
  clone.querySelector('.vehicle-card__img').alt = dataCar.name;
  clone.querySelector('.vehicle-card__price').textContent = dataCar.price;
  clone.querySelector('.vehicle-card__condition').textContent = `Condition: ${dataCar.condition}`;
  clone.querySelector('.vehicle-card__year').textContent = `Year: ${dataCar.year}`;
  clone.querySelector('.vehicle-card__km').textContent = `Km: ${dataCar.km}`;
  document.querySelector('.vehicle-registration-container').appendChild(clone);
}



function salvar() {
    
let carros = JSON.parse(localStorage.getItem("carros"));

let resposta = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    year: document.getElementById("year").value,
    km: document.getElementById("km").value,
    condition: document.getElementById("condition").value,
    imgSrc: document.getElementById("img").value
  }

  carros.push(resposta);
  localStorage.setItem("carros", JSON.stringify(carros));
   localStorage.getItem(carros)
}


  const modal = document.getElementById("modal");
    const openBtn = document.querySelector(".vehicle-registration__button--new-car");  
    const closeBtn = document.getElementById("closeModalBtn");


openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});