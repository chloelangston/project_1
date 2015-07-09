$(function() {
  $('h1').removeClass('invisible');


var body = document.querySelector('body');
var rightCounter = 0;
var leftCounter = 0;

var score1 = document.querySelector('.score1');
var score2 = document.querySelector('.score2');


var frog_down = document.querySelector('.armsdown');
var frog_up = document.querySelector('.armsup');

frog_up.style.opacity = 0;



var sphere1 = document.querySelector('#sphere1');
var summit=330;
var radius1 = 10;
sphere1.setAttribute("r", radius1);
sphere1.setAttribute("cy", summit-radius1);


var sphere2 = document.querySelector('#sphere2');
var summit=330;
var radius2 = 10;
sphere2.setAttribute("r", radius2);
sphere2.setAttribute("cy", summit-radius2);



var mk1 = document.querySelector('#mk1');
var mk2 = document.querySelector('#mk2');
var high = 129;
var move = 20;
mk1.setAttribute("cy", high+move);
mk2.setAttribute("cy", high+move);



var xmax = 60;
var xmin = 30;
var key1 = document.querySelector('.key1');
var key2 = document.querySelector('.key2');
var randKey1 = Math.floor( Math.random() * (xmax + 1 - xmin) + xmin );
var randKey2 = Math.floor( Math.random() * (xmax + 1 - xmin) + xmin );
console.log(randKey1);
console.log(randKey2);



var ymax = 57;
var ymin = 48;
var randKeyCode1 = Math.floor( Math.random() * (ymax + 1 - ymin) + ymin );
var randKeyCode2 = Math.floor( Math.random() * (ymax + 1 - ymin) + ymin );

var hole1 = true;
var hole2 = true;



body.addEventListener('keydown', function(evt) {
  if (hole1) {
    if (rightCounter%2 === 0) {
      if (evt.keyCode === 222) {
        mk1.setAttribute("cy", high);
        mk2.setAttribute("cy", high);
        rightPlayer();
      }
    }
    else if (rightCounter % 2 === 1){
      if (evt.keyCode === 191) {
        mk1.setAttribute("cy", high+move);
        mk2.setAttribute("cy", high+move);
        rightPlayer();
      }

    }
  }
});


function rightPlayer() {
  rightCounter += 1;
  score2.innerText = rightCounter;
  radius2+=1;
  sphere2.setAttribute("r", radius2);
  sphere2.setAttribute("cy", summit-radius2);

  if (rightCounter === (randKey1)) {
    return balloonHole1();
    }
}


body.addEventListener('keydown', function(evt) {
  if (hole2) {
    if (leftCounter%2 === 0) {
      if (evt.keyCode === 65) {
        frog_up.style.opacity = 0;
        frog_down.style.opacity = 1;
        leftPlayer();

      }
    }
    else if (leftCounter % 2 === 1){
      if (evt.keyCode === 90) {
        frog_up.style.opacity = 1;
        frog_down.style.opacity = 0;
        leftPlayer();

      }
    }
  }
});


function leftPlayer() {
  leftCounter += 1;
  score1.innerText = leftCounter;
  radius1+=1;
  sphere1.setAttribute("r", radius1);
  sphere1.setAttribute("cy", summit-radius1);

  if (leftCounter === (randKey2)) {
    return balloonHole2();
  }
}


function balloonHole1() {
  var randCharCode = String.fromCharCode(randKeyCode1);
  key1.innerText = randCharCode;
  hole1 = false;
  console.log('enter key');
  body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === randKeyCode1) {
      $('.key1').addClass('invisible');
      hole1 = true;
    }
  });
}

function balloonHole2() {
  var randCharCode2 = String.fromCharCode(randKeyCode2);
  key2.innerText = randCharCode2;
  hole2 = false;
  console.log('enter key');

  body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === randKeyCode2) {
      $('.key2').addClass('invisible');
      hole2 = true;
    }
  });
}

});





// setTimeout(function(){ leftPlayerText.show(); }, 3000);
