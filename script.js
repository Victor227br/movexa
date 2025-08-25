 function createElements(dataCar) {
  const vehicleRegistration = document.querySelector('.vehicle-registration');
  const template = document.querySelector('.vehicle-registration__template');
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.vehicle-registration__block-card')
  card.id = `${dataCar.id}`;
  let id = card.id
  clone.querySelector('.vehicle-registration__name').textContent = dataCar.name;
  clone.querySelector('.vehicle-registration__img').src = dataCar.imgSrc;
  clone.querySelector('.vehicle-registration__price').textContent = dataCar.price;
  clone.querySelector('.vehicle-registration__condition').textContent = `Condition: ${dataCar.condition}`;
  clone.querySelector('.vehicle-registration__year').textContent = `Year: ${dataCar.year}`;
  clone.querySelector('.vehicle-registration__km').textContent = `Km: ${dataCar.km}`;
  const buttonDelete = clone.querySelector('.vehicle-registration__button--cancel')
  buttonDelete.id = id
  buttonDelete.addEventListener('onclick',function criaFuncao(id) {
    return `deleteCar(${id})`;
})

    vehicleRegistration.appendChild(clone);
    console.log(id, "id")
   console.log(buttonDelete, "buttonDeleteID")
    return id
}

function salvar() {
 let carros = JSON.parse(localStorage.getItem("carros")) ? JSON.parse(localStorage.getItem("carros")) : []
    let resposta = {
   id: carros.length + 1,
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

function showElements(){
  let carros = JSON.parse(localStorage.getItem("carros")) || []
  for (const dataCar of carros) {
  createElements(dataCar)
 }
}
showElements()

  function deleteCar(id) {
  let carroID = id
  let carros = JSON.parse(localStorage.getItem("carros")) || [];
  let novosCarros = carros.filter(id => id.id !== carroID);
  console.log(novosCarros, "novosCarros")  
  console.log(carroID, "carro")
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