// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))  
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {  
  return new bootstrap.Popover(popoverTriggerEl)  
});

document.addEventListener("turbo:load", () => {
  setTimeout(() => {
    document.querySelectorAll(".auto-dismiss").forEach((alert) => {
      let bsAlert = new bootstrap.Alert(alert);
      bsAlert.close();
    });
  }, 3000); // 3 seconds
});