const button = document.querySelector(".button")
const inputEmail = document.querySelector("#emailInput")
const mainForm = document.querySelector(".main-form")
const regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isEmailValid = (email) => {
  return regex.test(email)
}

const addSuccessPopup = () => {
  const alertElHTML = `
        <section class="alert-success">
          <img
            src="public/assets/images/icon-success.svg"
            alt="Success Icon"
            class="success-icon"
          />
          <h1 class="alert-title">Thanks for subscribing !</h1>
          <p class="text-description-success">
            A confirmation email has been sent to
            <span class="email-user"> ${inputEmail.value}</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
          <button type="submit" class="button-dismiss">Dismiss message</button>
        </section>
      `

  mainForm.classList.add("hidden")
  document.body.insertAdjacentHTML("afterbegin", alertElHTML)
}

const addDismissPopup = () => {
  const btnDismiss = document.querySelector(".button-dismiss")

  btnDismiss.addEventListener("click", () => {
    window.location.reload()
  })
}

const addErrorState = () => {
  inputEmail.classList.add("error")
}

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault()

    if (isEmailValid(inputEmail.value)) {
      addSuccessPopup()
      addDismissPopup()
    } else {
      addErrorState()
    }
  })
}
