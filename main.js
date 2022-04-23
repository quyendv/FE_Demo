const loginModal = document.querySelector('.js-login')
const registerModal = document.querySelector('.js-register')
const loginBtns = document.querySelectorAll('.js-login-btn')
const registerBtn = document.querySelector('.js-register-btn')

const modalCloseBtns = document.querySelectorAll('.js-modal__close-btn')
const modals = document.querySelectorAll('.js-modal')
const modalContainers = document.querySelectorAll('.js-modal__container')

function showLoginModal() {
    loginModal.classList.add('open')
    registerModal.classList.remove('open')
}

function showRegisterModal() {
    loginModal.classList.remove('open')
    registerModal.classList.add('open')
}

function hideModal() {
    loginModal.classList.remove('open')
    registerModal.classList.remove('open')
}


for (const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showLoginModal)
}

registerBtn.addEventListener('click', showRegisterModal)

for (const closeBtn of modalCloseBtns) {
    closeBtn.addEventListener('click', hideModal)
}

for (const modal of modals) {
    modal.addEventListener('click', hideModal)
}

for (const modalContainer of modalContainers) {
    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}