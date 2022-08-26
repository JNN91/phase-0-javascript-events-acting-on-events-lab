const dodger = document.getElementById("dodger");
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
        
  document.addEventListener("keydown", function(e) {
    if ( e.key === 37 ) {
      moveDodgerLeft();
    }
    if ( e.key === 39 ) {
      moveDodgerRight();
    }
  });