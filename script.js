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
  buttonDelete.addEventListener('click',function criaFuncao(id) {
    return deleteCar(dataCar.id);
})

  const buttonEdit = clone.querySelector('.vehicle-registration__button--edit')
  buttonEdit.addEventListener('click',function criaFuncao(id) {
  modal.style.display = "flex";
  document.getElementById('name').value = dataCar.name,
  document.getElementById("price").value = dataCar.price,
  document.getElementById("year").value = `${dataCar.year}`
  document.getElementById("km").value = `${dataCar.km}`;
  document.getElementById("condition").value = `${dataCar.condition}`;
  document.getElementById("img").value = dataCar.imgSrc

  let buttonSave = document.querySelector(".vehicle-registration__modal-submit")
  buttonSave.innerHTML = "Edit"
  buttonSave.onclick = function (){
    return editCar(dataCar.id)
}
})
  vehicleRegistration.appendChild(clone);
}

function save() {
 let cars = JSON.parse(localStorage.getItem("cars")) ? JSON.parse(localStorage.getItem("cars")) : []

  let name = document.getElementById("name").value.trim();
  let price = document.getElementById("price").value.trim();
  let year = document.getElementById("year").value.trim();
  let km = document.getElementById("km").value.trim();
  let condition = document.getElementById("condition").value.trim();
  let imgValue = document.getElementById("img").value.trim();
    if (!name || !price || !year || !km || !condition) {
    alert("Por favor, preencha todos os campos obrigatórios.");
   return;
}

  let answer = {
   id: cars.length + 1,
   name: document.getElementById("name").value,
   price: document.getElementById("price").value,
   year: document.getElementById("year").value,
   km: document.getElementById("km").value,
   condition: document.getElementById("condition").value,
   imgSrc: imgValue !== "" ? imgValue : "/folder img/movexa.png"
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

 function editCar(id){               
  let carsEdit = JSON.parse(localStorage.getItem("cars")) || []   
  let novosCarros = carsEdit.find(car => car.id == id) 
    if (novosCarros) {
    novosCarros.id,
    novosCarros.name = document.getElementById("name").value
    novosCarros.price = document.getElementById("price").value
    novosCarros.year = document.getElementById("year").value
    novosCarros.km = document.getElementById("km").value
    novosCarros.condition = document.getElementById("condition").value
    novosCarros.img = document.getElementById("img").value;
}   

localStorage.setItem("cars", JSON.stringify(carsEdit));
}

function deleteCar(id) {
  let cars = JSON.parse(localStorage.getItem("cars")) || []
  let newCars = cars.filter(car => car.id !== id)
  localStorage.setItem("cars", JSON.stringify(newCars))
   window.location.reload()
}
  const modal = document.getElementById("modal");
  const openBtn = document.querySelector(".vehicle-registration__new-vehicle");  
  const openBtnPhone = document.querySelector(".user-controller__button--new-car")
  const closeBtn = document.getElementById("closeModalBtn");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  let buttonSave = document.querySelector(".modal__submit")
    buttonSave.onclick = function (){
      save()
}
   buttonSave.innerHTML = "Save"
    document.getElementById('name').value = ""
    document.getElementById("price").value = "" 
    document.getElementById("year").value = ""
    document.getElementById("km").value = ""
    document.getElementById("condition").value = ""
    document.getElementById("img").value = ""
});

openBtnPhone.addEventListener("click", () => {
  modal.style.display = "flex";
  let buttonSave = document.querySelector(".modal__submit")
    buttonSave.onclick = function (){
      save()
}
   buttonSave.innerHTML = "Save"
    document.getElementById('name').value = ""
    document.getElementById("price").value = "" 
    document.getElementById("year").value = ""
    document.getElementById("km").value = ""
    document.getElementById("condition").value = ""
    document.getElementById("img").value = ""
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const searchInput = document.getElementById('search')
searchInput.addEventListener('input', (event) =>{
    const value = formateString(event.target.value);
    const itens = document.querySelectorAll('.vehicle-registration .vehicle-registration__vehicle-card')
    itens.forEach(item=> {
if(formateString(item.textContent).indexOf(value) !== -1  ){

item.style.display = 'flex';
} else {
    item.style.display = 'none';
  }
}) 
})

function formateString(value){
return value.toLowerCase().trim()
}
