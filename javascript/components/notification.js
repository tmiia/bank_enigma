const notification = {
  notifElt: document.querySelector(".notification"),

  init(){
    this.showNotification();
  },

  showNotification(){
    let btnNext = document.getElementById("btn_next");
    btnNext.addEventListener('click', () => {
      console.log("working")
      notification.notifElt.classList.add("active");
    })
  },

  // TODO: Add a sound when show notification
  // TODO: Add a slide animation when show notification

}
export default notification
