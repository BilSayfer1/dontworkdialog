const form = document.forms.namedItem('login')
let select = document.querySelector('#language');

form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false


    let user = {

    }

    fm.forEach((val, key) => {

        user[key] = val
        if (val.length === 0) {
            error = true
        }

    })

    if (select.value === "") {
        error = true
    }

    if (error) {
        alert('Заполни все данные')
        return
    }
    console.log(user);
}

let modal = document.querySelector('#brbr')
let dialog = document.querySelector('dialog')

modal.onclick = () => {
dialog.showModal()
}

function submitForm() {
    let name = document.forms["name"]
    let userInfo = document.querySelector("#Info");

    if (name  && language) {
        userInfo.textContent = "Имя: " + name.value + "Через 10 лет вы станете:"  + select.value;
        modal.showModal();
    } else {
        alert("Заполните все данные или же выберите язык программирования");
    }
}
