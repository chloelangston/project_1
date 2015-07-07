var body = document.querySelector('body');
var rightCounter = 0;
var leftCounter = 0;

var score1 = document.querySelector('.score1');
var score2 = document.querySelector('.score2');

var balloon1 = document.querySelector('#balloon1');
var balloon2 = document.querySelector('#balloon2');

var layer1 = document.querySelector('#Layer_1');
var layer2 = document.querySelector('#Layer_2');

var frog_down = document.querySelector('.armsdown');
var frog_up = document.querySelector('.armsup');

frog_up.style.opacity = 0;


body.addEventListener('keydown', function(evt) {
  if (rightCounter % 2 === 0){
    if (evt.keyCode === 222) {
      rightCounter += 1;
      // balloon2.setAttribute("rx", rightCounter);
      // balloon2.setAttribute("ry", rightCounter);
      layer2.style.width = rightCounter*3 + 100 + "px";
      console.log(rightCounter);
      score2.innerText = rightCounter;


    }
   }
  else if (rightCounter % 2 === 1){
    if (evt.keyCode === 191) {
      rightCounter += 1;
      // balloon2.setAttribute("rx", rightCounter);
      // balloon2.setAttribute("ry", rightCounter);
      layer2.style.width = rightCounter*3 + 100 + "px";
      console.log(rightCounter);
      score2.innerText = rightCounter;

    }
  }

  if (leftCounter % 2 === 0) {
    if (evt.keyCode === 65) {
      leftCounter += 1;
      // balloon1.setAttribute("rx", leftCounter);
      // balloon1.setAttribute("ry", leftCounter);
      layer1.style.width = leftCounter*3 + 100 + "px";
      console.log(leftCounter);
      score1.innerText = leftCounter;
      frog_up.style.opacity = 0;
      frog_down.style.opacity = 1;
    }
  }
  else if (leftCounter % 2 === 1) {
    if (evt.keyCode === 90) {
      leftCounter += 1;
      // balloon1.setAttribute("rx", leftCounter);
      // balloon1.setAttribute("ry", leftCounter);
      layer1.style.width = leftCounter*3 + 100 + "px";
      console.log(leftCounter);
      score1.innerText = leftCounter;
      frog_up.style.opacity = 1;
      frog_down.style.opacity = 0;
    }
  }
  balloon1.style.width = rightCounter;
  });
