import validator from 'validator'

function showError(input, message) {
  let errorSpan = input.nextElementSibling

  if (!errorSpan || errorSpan.tagName !== 'SPAN') {
    errorSpan = document.createElement('span')
    errorSpan.classList.add('alert', 'alert-danger', 'mt2')
    errorSpan.style.display = 'block'
    input.parentNode.insertBefore(errorSpan, input.nextSibling)
  }

  errorSpan.innerText = message
}

export class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
    this.init()
  }
  init() {
    this.events()
  }

  events() {
    if (!this.form) return
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      this.validate(e)
    })
  }

  validate(e) {
    const el = e.target
    const emailInput = el.querySelector('input[name="email"]')
    const passwordInput = el.querySelector('input[name="senha"]')
    let error = false

    if (!validator.isEmail(emailInput.value)) {
      showError(emailInput, 'E-mail inválido')
      error = true
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      showError(passwordInput, 'Senha invalida')
      error = true
    }

    if (!error) el.submit()


  }
}
export class Cadastro {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
    this.init()
  }
  init() {
    this.events()
  }

  events() {
    if (!this.form) return
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      this.validate(e)
    })
  }

  validate(e) {
    const el = e.target
    const emailInput = el.querySelector('input[name="email"]')
    const passwordInput = el.querySelector('input[name="senha"]')
    let error = false

    if (!validator.isEmail(emailInput.value)) {
      showError(emailInput, 'E-mail inválido')
      error = true
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      showError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres')
      error = true
    }

    if (!error) el.submit()


  }
}