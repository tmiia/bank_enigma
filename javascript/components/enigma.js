const enigma = {
  input: document.querySelector("#password_input"),
  answer: "novlangue",

  init(){
    //Appel de mes fonctions
    this.isCorrect();
    this.showHint();
  },

  isCorrect(){
    let btn_next = document.querySelector("#btn_enigma");
    btn_next.addEventListener("click", () => {
      if (enigma.input.value == enigma.answer) {
        console.log("Bravo");
      }
      else {
        console.log("Faux !")
      }
    })
  },

  showHint(){
    let btn_hint = document.querySelector("#btn_hint");
    let hint = document.querySelector(".hint");
    btn_hint.addEventListener("click", () => {
      hint.classList.add("active");
    })
  },
}
export default enigma
