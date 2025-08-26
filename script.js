 function createElements(dataCar) {
  const vehicleRegistration = document.querySelector('.vehicle-registration');
  const template = document.querySelector('.vehicle-registration__template');
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.vehicle-registration__block-card')
  card.id = `${dataCar.id}`;
  let id = card.id
  console.log(card)
  clone.querySelector('.vehicle-registration__name').textContent = dataCar.name;
  clone.querySelector('.vehicle-registration__img').src = dataCar.imgSrc;
  clone.querySelector('.vehicle-registration__price').textContent = dataCar.price;
  clone.querySelector('.vehicle-registration__condition').textContent = `Condition: ${dataCar.condition}`;
  clone.querySelector('.vehicle-registration__year').textContent = `Year: ${dataCar.year}`;
  clone.querySelector('.vehicle-registration__km').textContent = `Km: ${dataCar.km}`;
  const buttonDelete = clone.querySelector('.vehicle-registration__button--cancel')
  buttonDelete.id = id
  buttonDelete.addEventListener('click',function criaFuncao(id) {
    return deleteCar(dataCar.id);
})
  vehicleRegistration.appendChild(clone);
    return id
}

function save() {
 let cars = JSON.parse(localStorage.getItem("cars")) ? JSON.parse(localStorage.getItem("cars")) : []
  let answer = {
   id: cars.length + 1,
   name: document.getElementById("name").value,
   price: document.getElementById("price").value,
   year: document.getElementById("year").value,
   km: document.getElementById("km").value,
   condition: document.getElementById("condition").value,
   imgSrc: document.getElementById("img").value
 }
 cars.push(answer);
 localStorage.setItem("cars", JSON.stringify(cars));
}

function showElements(){
  let cars = JSON.parse(localStorage.getItem("cars")) || []
  for (const dataCar of cars) {
  createElements(dataCar)
 }
}
showElements()

function deleteCar(id) {
  let carID = id
  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  let newCars = cars.filter(car => car.id !== carID)
  localStorage.setItem("cars", JSON.stringify(newCars))
   window.location.reload()
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