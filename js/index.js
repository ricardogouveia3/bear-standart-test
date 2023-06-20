const progressBarElement = document.getElementById("loadingDiv");

function start() {
  let i = 0;
  if (i === 0) {
    i = 1;

    let width = 0;
    let id = setInterval(frame, 50);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        progressBarElement.style.display = "inline";
        width++;
        progressBarElement.style.width = width + "%";
      }
    }
  }
} 