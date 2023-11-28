const notification = {
  notifElt: document.querySelector(".notification"),

  init(){
    this.showNotification();
  },

  showNotification(){
    let btnNext = document.getElementById("btn_next");
    btnNext.addEventListener('click', () => {
      notification.notifElt.classList.add("active");
      this.playAudio();
    })
  },

  playAudio(){
    let audio = document.getElementById("audioNotif");
    audio.play();
  }

  // TODO: Add a sound when show notification
  // TODO: Add a slide animation when show notification

}
export default notification
