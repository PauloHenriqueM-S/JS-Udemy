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

function clearError(input) {
  let errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.tagName === 'SPAN') {
    errorSpan.remove();
  }
  input.style.border = '1px solid #ccc';
}


export class Contato {
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
    const nomeInput = el.querySelector('input[name="nome"]')
    const emailInput = el.querySelector('input[name="email"]')
    const telefoneInput = el.querySelector('input[name="telefone"]')
    let error = false

    clearError(nomeInput)
    clearError(emailInput)
    clearError(telefoneInput)

    if (!nomeInput.value.trim()) {
      showError(nomeInput, 'Nome é um campo obrigatório')
      error = true
    } else {
      clearError(nomeInput)
    }

    const emailVazio = !emailInput.value.trim()
    const telefoneVazio = !telefoneInput.value.trim()

    if (emailVazio && telefoneVazio) {
      showError(emailInput, 'Pelo menos um contato precisa ser enviado: E-mail ou telefone.')
      showError(telefoneInput, 'Pelo menos um contato precisa ser enviado: E-mail ou telefone.')
      error = true
    } else {
      if (!emailVazio && !validator.isEmail(emailInput.value)) {
        showError(emailInput, 'E-mail inválido')
        error = true
      }

      if (!telefoneVazio && !validator.isMobilePhone(telefoneInput.value, 'pt-BR')) {
        showError(telefoneInput, 'Telefone inválido')
        error = true
      }
    }

    if (!error) el.submit()
  }

}
