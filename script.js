function createElements(dataCar) {
  const vehicleRegistration = document.querySelector('.vehicle-registration')
  const template = document.querySelector('.vehicle-registration__block-card');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.vehicle-card__name').textContent = `${dataCar.name}`;
  clone.querySelector('.vehicle-card__img').src = dataCar.imgSrc;
  clone.querySelector('.vehicle-card__price').textContent = dataCar.price;
  clone.querySelector('.vehicle-card__condition').textContent = `Condition: ${dataCar.condition}`;
  clone.querySelector('.vehicle-card__year').textContent = `Year: ${dataCar.year}`;
  clone.querySelector('.vehicle-card__km').textContent = `Km: ${dataCar.km}`;
  vehicleRegistration.appendChild(clone);
}

function showElements(){
  let carros = JSON.parse(localStorage.getItem("carros"))
  for (const dataCar of carros) {
    createElements(dataCar)
 }
}

showElements()

function salvar() {
let carros = JSON.parse(localStorage.getItem("carros")) ? JSON.parse(localStorage.getItem("carros")) : []
console.log(carros)

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