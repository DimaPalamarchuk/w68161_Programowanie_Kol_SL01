var lights = ['red', 'yellow', 'green'];
  var currentIndex = 0;
  
  function changeColor(element) {
    var previousIndex = currentIndex;
    currentIndex = lights.indexOf(element.id);
    
    if (currentIndex !== previousIndex) {
      document.getElementById(lights[previousIndex]).classList.remove(lights[previousIndex]);
      element.classList.add(lights[currentIndex]);
    }
  }
  
  function changeLights() {
    var currentLight = document.getElementById(lights[currentIndex]);
    currentLight.classList.remove(lights[currentIndex]);
    
    currentIndex = (currentIndex + 1) % lights.length;
    
    var nextLight = document.getElementById(lights[currentIndex]);
    nextLight.classList.add(lights[currentIndex]);
    
    setTimeout(function() {
      changeLights();
    }, getDelay(currentIndex));
  }
  
  function getDelay(index) {
    if (index === 0) {
      return 5000;
    } else if (index === 1) {
      return 2000;
    } else if (index === 2) {
      return 1000;
    }
  }
  
  window.onload = function() {
    var lights = document.getElementsByClassName('light');
    for (var i = 0; i < lights.length; i++) {
      lights[i].addEventListener('click', function() {
        changeColor(this);
      });
    }
    
    changeLights();
  };