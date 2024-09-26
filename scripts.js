
const toggleOn = document.querySelector('.toggle-on')
const btnOff = document.querySelector('.btn-toggle-off')
const btnOn = document.querySelector('.btn-close')


function showToggle() {

    btnOff.style.display = 'none'
    toggleOn.style.display = 'flex'

}

function turnOffToggle() {

    btnOff.style.display = 'flex'
    toggleOn.style.display = 'none'

}

const formBasic = document.querySelector('#formBasic')
const form = document.getElementById('fale-conosco')
const formCaseiro = document.getElementById('form-caseiro')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')
const btnToggle = document.getElementById('btn-toggle')
const makeOrder = document.querySelector('#fazer-pedido')
const headerLinks = document.querySelector('.links')


function clickButtonCaseiro(nomeBolo, valorBolo) {
    headerLinks.style.opacity = '0'
    headerLinks.style.visibility = 'hidden'
    formCaseiro.style.left = "50%"
    formCaseiro.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    mascara.style.zIndex = '1'
    formCaseiro.style.transition = "0.4s ease-in"
 

    document.querySelector('#inputBoloCaseiro').value = nomeBolo
    document.getElementById('boloCaseiroEscolhido').innerText = nomeBolo
    document.getElementById('inputValorCaseiro').value = valorBolo
    document.getElementById('valorCaseiro').innerText = valorBolo
}

function clickButton(nomeBolo) {


    headerLinks.style.opacity = '0'
    headerLinks.style.visibility = 'hidden'
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    mascara.style.zIndex = '1'
    form.style.transition = "0.4s ease-in"

    document.querySelector('#inputBolo').value = nomeBolo
    document.getElementById('boloEscolhido').innerText = nomeBolo


}



function clickButtonBasic() {

    headerLinks.style.opacity = '0'
    headerLinks.style.visibility = 'hidden'
    formBasic.style.left = "50%"
    formBasic.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    mascara.style.zIndex = '1'
    formBasic.style.transition = "0.4s ease-in"

    document.querySelector('#inputBolo').value = nomeBolo
    document.getElementById('boloEscolhido').innerText = nomeBolo


}


function desligarMascara() {
    headerLinks.style.opacity = '1'
    headerLinks.style.visibility = 'visible'
    form.style.left = '-340px'
    formCaseiro.style.left = '-500px'
    formBasic.style.left = '-500px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    formCaseiro.style.transform = 'translateX(0%)'
    formBasic.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'

    if (window.innerWidth < 1000) {
        ulToggleBox.style.visibility = 'hidden'
    } else {
        ulToggleBox.style.visibility = 'visible'
    }


}




//Formatar número

function handlePhone(event) {

    let input = event.target
    input.value = formatarCelular(input.value)


}

function formatarCelular(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value



}

function enviarFormBasic() {

    const bossNumber = "+558588556541"
    const name = document.getElementById('inputNameBasic').value
    const number = document.querySelector('#inputNumberBasic').value
    const nameCake = document.querySelector('#cakeThemeBasicForm').value
    const massa = document.querySelector('#select-massaBasic').value
    const recheio = document.querySelector('#select-recheioBasic').value
    const special = document.querySelector('#select-especialBasic').value
    const valor = document.querySelector('#select-fatiasBasic').value
    const yourOrder = "Seu Pedido: "
    const msgDefault = `Olá ${name}. Bem vindo a Confeitaria Ale Bolos e Doces. Sua mensagem será respondida o mais rápido possível.`
    const msgInsta = "Aproveite e siga nosso perfil no Instagram: https://www.instagram.com/ale_bolosedoces2/"
    const msgDelivery = "Após a confirmação do pedido será calculado a taxa de entrega de acordo com sua região."
    const adress = document.querySelector('#adressBasic').value
    const enviar = "Clique no botão de enviar para enviar sua ficha de Pedido."

    const url = "https://api.whatsapp.com/send?phone=" + bossNumber + "&text="
        + msgDefault + "%0A%0A"
        + yourOrder + "%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + number + "." + "%0a"
        + "Tema Personalizado: " + nameCake + "." + "%0a"
        + "Massa Escolhida: " + massa + "." + "%0a"
        + "Recheio Escolhido: " + recheio + "." + "%0a"
        + "Recheio Especial: " + special + "." + "%0a"
        + "Valor: " + valor + "." + "%0a"
        + "Endereço de Entrega: " + adress + "." + "%0a%0a"
        + msgDelivery + "%0a%0a"
        + msgInsta + "%0a%0a"
        + enviar + "%0a"
    window.open(url, '_blank').focus()

}

function enviarForm() {

    const bossNumber = "+558588556541"
    const name = document.getElementById('inputName').value
    const number = document.querySelector('#inputNumber').value
    const nameCake = document.querySelector('#inputBolo').value
    const massa = document.querySelector('#select-massa').value
    const recheio = document.querySelector('#select-recheio').value
    const special = document.querySelector('#select-especial').value
    const valor = document.querySelector('#select-fatias').value
    const adress = document.querySelector('#adress').value
    const yourOrder = "Seu Pedido: "
    const msgDefault = `Olá ${name}. Bem vindo a Confeitaria Ale Bolos e Doces. Sua mensagem será respondida o mais rápido possível.`
    const msgDelivery = "Após a confirmação do pedido será calculado a taxa de entrega de acordo com sua região."
    const msgInsta = "Aproveite e siga nosso perfil no Instagram: https://www.instagram.com/ale_bolosedoces2/"
    const enviar = "Clique no botão de enviar para enviar sua ficha de Pedido."


    // if (name.length || number.length === 0) {
    //     alert('Preencha as informações')
    // } else {
    const url = "https://api.whatsapp.com/send?phone=" + bossNumber + "&text="
        + msgDefault + "%0A%0A"
        + yourOrder + "%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + number + "." + "%0a"
        + "Tema Escolhido: " + nameCake + "." + "%0a"
        + "Massa Escolhida: " + massa + "." + "%0a"
        + "Recheio Escolhido: " + recheio + "." + "%0a"
        + "Recheio Especial: " + special + "." + "%0a"
        + "Valor: " + valor + "." + "%0a"
        + "Endereço de Entrega: " + adress + "." + "%0a%0a"
        + msgDelivery + "%0a%0a"
        + msgInsta + "%0A%0A"
        + enviar + "%0a"
    window.open(url, '_blank').focus()


}




function enviarFormCaseiro() {

    const bossNumber = "+558588556541"
    const name = document.getElementById('inputName2').value
    const number = document.querySelector('#inputNumber2').value
    const nameCake = document.querySelector('#inputBoloCaseiro').value
    const valor = document.querySelector('#inputValorCaseiro').value
    const adress = document.querySelector('#adress2').value
    const yourOrder = "Seu Pedido: "
    const msgDefault = `Olá ${name}. Bem vindo a Confeitaria Ale Bolos e Doces. Sua mensagem será respondida o mais rápido possível.`
    const msgDelivery = "Após a confirmação do pedido será calculado a taxa de entrega de acordo com sua região."
    const msgInsta = "Aproveite e siga nosso perfil no Instagram: https://www.instagram.com/ale_bolosedoces2/"
    const enviar = "Clique no botão de enviar para enviar sua ficha de Pedido."



    const url = "https://api.whatsapp.com/send?phone=" + bossNumber + "&text="
        + msgDefault + "%0A%0A"
        + yourOrder + "%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + number + "." + "%0a"
        + "Bolo Escolhido: " + nameCake + "." + "%0a"
        + "Valor: " + valor + "." + "%0a"
        + "Endereço de Entrega: " + adress + "." + "%0a%0a"
        + msgDelivery + "%0a%0a"
        + msgInsta + "%0A%0A"
        + enviar + "%0a"
    window.open(url, '_blank').focus()


}



//Scrolls

const btnHome = document.getElementById('btn-home')
const btnPersonalized = document.querySelector('#btn-personalized')
const btnHouseMade = document.querySelector('#btn-house-made')
const btnSpace = document.getElementById('btn-space')
const btnInformation = document.getElementById('btn-informations')

const toggleHome = document.getElementById('toggle-home')
const togglePersonalized = document.getElementById('toggle-personalized')
const toggleHouseMade = document.getElementById('toggle-house-made')
const toggleInformation = document.getElementById('toggle-informations')
const toggleSpace = document.getElementById('toggle-space')

function scrollIntoElement(elementSelect, instace = 0) {

    const element = document.querySelectorAll(elementSelect)

    if (element.length > instace) {

        element[instace].scrollIntoView({ behavior: 'smooth' })
    } else {
        return
    }

}

btnHome.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('html')
    mascara.style.visibility = "hidden"

})

toggleHome.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('html')
    turnOffToggle()
})

btnPersonalized.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.personalized-section')
    mascara.style.visibility = "hidden"

})

togglePersonalized.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.personalized-section')
    turnOffToggle()
})

btnHouseMade.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.house-made-section')
    mascara.style.visibility = "hidden"

})

toggleHouseMade.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.house-made-section')
    turnOffToggle()
})

btnSpace.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.local-section')
    mascara.style.visibility = "hidden"

})

toggleSpace.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.local-section')
    turnOffToggle()
})

btnInformation.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.info-section')
    mascara.style.visibility = "hidden"

})

toggleInformation.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.info-section')
    turnOffToggle()
})



