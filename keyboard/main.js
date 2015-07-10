$(function() {

  //
  // setTimeout(function(){
  //   $('.leftPlayer').removeClass('invisible');
  //   $(".leftPlayer").css("position", "absolute").animate({
  //     left: 80,
  //     top:  460 }, 'slow');
  // },1000);
  //
  // setTimeout(function(){
  //   $('.rightPlayer').removeClass('invisible');
  //   $(".rightPlayer").css("position", "absolute").animate({
  //     left: 680,
  //     top:  460 }, 'slow');
  // },2000);


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
var inflatorBar = document.querySelector('#inflator-bar');
var inflatorBarMiddle = document.querySelector('#inflator-bar-middle');
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
var winner = true;



body.addEventListener('keydown', function(evt) {
  if (winner){
  if(rightCounter !== 0 || leftCounter !== 0) {
    $('.hole-text-container').addClass('invisible');
  }
  if (hole1) {
    if (rightCounter%2 === 0) {
      if (evt.keyCode === 222) {
        mk1.setAttribute("cy", high);
        mk2.setAttribute("cy", high);
        inflatorBar.setAttribute('points', "70," + high + " 130," + high + " 130,140 70,140");
        inflatorBarMiddle.setAttribute('points', "95,139 105,139 105,200 95,200");
        rightPlayer();
      }
    }
    else if (rightCounter % 2 === 1){
      if (evt.keyCode === 191) {
        mk1.setAttribute("cy", high+move);
        mk2.setAttribute("cy", high+move);
        inflatorBar.setAttribute('points', "70," + (high+move) + " 130," + (high+move) + " 130,160 70,160");
        inflatorBarMiddle.setAttribute('points', "95,149 105,149 105,200 95,200");
        rightPlayer();
      }

    }
  }
}
});


function rightPlayer() {
  rightCounter += 1;
  // score2.innerText = rightCounter;
  radius2+=1;
  sphere2.setAttribute("r", radius2);
  sphere2.setAttribute("cy", summit-radius2);

  if (rightCounter === (randKey1)) {
    return balloonHole1();
    }

  if (rightCounter === 135) {
    $('.orange-container').addClass('invisible');
    $('.box2').removeClass('invisible');
    winner = false;
  }
}


body.addEventListener('keydown', function(evt) {
  if (winner){
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
}
});


function leftPlayer() {
  leftCounter += 1;
  // score1.innerText = leftCounter;
  radius1+=1;
  sphere1.setAttribute("r", radius1);
  sphere1.setAttribute("cy", summit-radius1);

  if (leftCounter === (randKey2)) {
    return balloonHole2();
  }
  if (leftCounter === 135) {
    $('.pink-container').addClass('invisible');
    $('.box1').removeClass('invisible');
    winner = false;
    explode();
  }
}


function balloonHole1() {
  var randCharCode = String.fromCharCode(randKeyCode1);
  $('.key1').removeClass('invisible');
  $('.bandaid1').removeClass('invisible');
  key1.innerText = randCharCode;
  hole1 = false;
  console.log('enter key');
  body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === randKeyCode1) {
      $('.key1').addClass('invisible');
      $('.bandaid1').addClass('invisible');
      hole1 = true;
    }
  });
}

function balloonHole2() {
  var randCharCode2 = String.fromCharCode(randKeyCode2);
  $('.key2').removeClass('invisible');
  $('.bandaid2').removeClass('invisible');

  key2.innerText = randCharCode2;
  hole2 = false;
  console.log('enter key');

  body.addEventListener('keydown', function(evt) {
    if (evt.keyCode === randKeyCode2) {
      $('.key2').addClass('invisible');
      $('.bandaid2').addClass('invisible');
      hole2 = true;
    }
  });
}

});
