function createElements(dataClient) {
  const clientRegistration = document.querySelector('.client-registration');
  const template = document.querySelector('.client-registration__template');
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.client-registration__block-card');
  card.id = `${dataClient.id}`;
  clone.querySelector('.client-registration__name').textContent = dataClient.name;
  clone.querySelector('.client-registration__email-client--top').textContent = dataClient.email;
  clone.querySelector('.client-registration__number-phone-client--top').textContent = dataClient.phone;
  clone.querySelector('.client-registration__email-client--extra').textContent = dataClient.email;
  clone.querySelector('.client-registration__number-phone-client--extra').textContent = dataClient.phone;
  clone.querySelector('.client-registration__status-text').textContent = dataClient.status;
  const statusRing = clone.querySelector('.client-registration__status-ring');

    let buttonEdit = clone.querySelector('.client-registration__button--edit')
    buttonEdit.addEventListener('click', () => {
      modal.style.display = "flex"
        document.getElementById('name').value = dataClient.name;
        document.getElementById('email').value = dataClient.email;
        document.getElementById('phone').value = dataClient.phone;
        document.getElementById('status').value = dataClient.status;
  
        let buttonSave = document.querySelector(".modal__button--save-form");
        buttonSave.innerHTML = "Editar usuario";
        buttonSave.onclick = function (){
          return editClient(dataClient.id);
    };
  })

function changeStatus(element, status){
  element.classList.remove('client-registration__ring--active','client-registration__ring--inactive','client-registration__ring--disabled');
  switch(status){
    case "Ativo": 
      element.classList.add('client-registration__ring--active');
    break;

    case "Inativo":
      element.classList.add('client-registration__ring--inactive');
    break;

    case "Desativado":
      element.classList.add('client-registration__ring--disabled');
    break;
  }
}

changeStatus(statusRing, dataClient.status)
  clientRegistration.appendChild(clone);
}

  function saveDataClient(){
    let clients = JSON.parse(localStorage.getItem("clients-movexa")) ? JSON.parse(localStorage.getItem("clients-movexa")) : [];
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let status = document.getElementById("status").value.trim();
       if (!name || !email || !phone || !status) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
}
        let userData = {
          id: clients.length + 1,
          name,
          email,
          phone,
          status,
  }
    clients.push(userData)
    localStorage.setItem("clients-movexa", JSON.stringify(clients))
     location.reload();
  }

  function showElements(){
   let clients = JSON.parse(localStorage.getItem("clients-movexa"))  || []
     for (const dataClient of clients){
      createElements(dataClient)
    }
  }

  showElements()

  function editClient(id){
   let userEdit = JSON.parse(localStorage.getItem("clients-movexa")) 
   let newDataClient = userEdit.find(user => user.id == id)
    if(newDataClient){
      newDataClient.id
      newDataClient.name = document.getElementById("name").value
      newDataClient.email = document.getElementById("email").value
      newDataClient.phone = document.getElementById("phone").value
      newDataClient.status = document.getElementById("status").value
  }
    localStorage.setItem("clients-movexa", JSON.stringify(userEdit))
    location.reload();
  }

  const  modal = document.querySelector(".modal")
  const openModal = document.querySelector(".client-management__button--new-client") 
  const closeModalBtn = document.querySelector(".modal__button--close")

  openModal.addEventListener('click',() => {
    modal.style.display = "flex";
     document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = ""
      document.getElementById('status').value = "";
        let buttonSave = document.querySelector('.modal__button--save-form')
         buttonSave.innerHTML = "Salvar"
  })

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
  
const searchInput = document.getElementById('search')
  searchInput.addEventListener('input', (event) =>{
    const value = formateString(event.target.value);
    const itens = document.querySelectorAll('.client-registration .client-registration__block-card')
    itens.forEach(item=> {
      if(formateString(item.textContent).indexOf(value) !== -1){
  item.style.display = 'flex';
} else {
    item.style.display = 'none';
  }
}) 
})

function formateString(value){
return value.toLowerCase().trim()
}

let btnMoreInfo = document.querySelectorAll('.client-registration__button--more-info');

btnMoreInfo.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.client-registration__block-card');
    const extraInfo = card.querySelector('.client-registration__extra-info');
    extraInfo.classList.toggle('active');
  });
});