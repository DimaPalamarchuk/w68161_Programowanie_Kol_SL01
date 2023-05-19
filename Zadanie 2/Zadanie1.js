function changeColor(button) {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
     if (buttons[i] == button) {
      if (button.style.backgroundColor == "gray") {
       button.style.backgroundColor = "#3e8e41";
      } else {
       button.style.backgroundColor = "gray";
      }
     } else {
      buttons[i].style.backgroundColor = "gray";
     }
    }
   }