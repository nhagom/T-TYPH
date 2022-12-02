const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

function checkValue() {
    	var name = document.getElementById("name");
        if(name.value === "") {
          var att = document.createAttribute("required");
          name.setAttributeNode(att);
        }
    }
