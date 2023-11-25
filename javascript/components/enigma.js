const enigma = {
  input: document.querySelector("#password_input"),
  answer: "novlangue",

  init(){
    //Appel de mes fonctions
    this.isCorrect();
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
}
export default enigma
