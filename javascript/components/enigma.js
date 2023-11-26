const enigma = {
  input: document.querySelector("#password_input"),
  answer: "novlangue",

  init(){
    this.isCorrect();
    this.showHint();
  },

  isCorrect(){
    let btn_next = document.querySelector("#btn_enigma");
    btn_next.addEventListener("click", () => {
      if (enigma.input.value == enigma.answer) {
        enigma.showNextStep();
      }
      else {
        enigma.showAlert();
      }
    })
  },

  showHint(){
    let btn_hint = document.querySelector("#btn_hint");
    let hint = document.querySelector(".hint");
    btn_hint.addEventListener("click", () => {
      hint.classList.add("active");
      btn_hint.classList.add("active");
    })
  },

  showAlert(){
    let alert = document.querySelector(".alert");
    alert.classList.add("active");
    enigma.input.classList.add("alert_indicator");
  },

  showNextStep(){
    let nextStep = document.querySelector(".bravo");
    let currentStep = document.querySelector(".sign_in");
    nextStep.classList.toggle("change");
    currentStep.classList.toggle("change");
  }
}
export default enigma
