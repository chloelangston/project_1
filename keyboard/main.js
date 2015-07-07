var body = document.querySelector('body');
var rightCounter = 0;
var leftCounter = 0;

var score1 = document.querySelector('.score1');
var score2 = document.querySelector('.score2');

var balloon1 = document.querySelector('#balloon1');

body.addEventListener('keydown', function(evt) {
  if (rightCounter % 2 === 0){
    if (evt.keyCode === 222) {
      rightCounter += 1;
      balloon2.setAttribute("rx", rightCounter);
      balloon2.setAttribute("ry", rightCounter);
      console.log(rightCounter);
      score2.innerText = rightCounter;

    }
   }
  else if (rightCounter % 2 === 1){
    if (evt.keyCode === 191) {
      rightCounter += 1;
      balloon2.setAttribute("rx", rightCounter);
      balloon2.setAttribute("ry", rightCounter);
      console.log(rightCounter);
      score2.innerText = rightCounter;
    }
  }

  if (leftCounter % 2 === 0) {
    if (evt.keyCode === 65) {
      leftCounter += 1;
      balloon1.setAttribute("rx", leftCounter);
      balloon1.setAttribute("ry", leftCounter);
      console.log(leftCounter);
      score1.innerText = leftCounter;
    }
  }
  else if (leftCounter % 2 === 1) {
    if (evt.keyCode === 90) {
      leftCounter += 1;
      balloon1.setAttribute("rx", leftCounter);
      balloon1.setAttribute("ry", leftCounter);
      console.log(leftCounter);
      score1.innerText = leftCounter;
    }
  }
  balloon1.style.width = rightCounter;
  });
