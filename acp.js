window.onscroll = function() {myFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topBtn").style.opacity = 1;
    document.getElementById("topBtn").style.cursor = 'pointer';

    document.querySelector(".social-wrapper").style.opacity = 1;
  } else {
    document.getElementById("topBtn").style.opacity = 0;
    document.getElementById("topBtn").style.cursor = 'default';
  } 

  if (document.body.scrollTop > 100) {
    document.querySelector('.main-nav').classList.add('shrink');
  } else {
    document.querySelector('.main-nav').classList.remove('shrink');
  }
}

var init = false;
var secondOffset = 0;
var minuteOffset = 0;
var hourOffset = 0;

function setDate() {

	var secondHand = document.querySelector('.second-hand');
	var minsHand = document.querySelector('.min-hand');
	var hourHand = document.querySelector('.hour-hand');

	var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondsDegrees == 90) {
  	secondOffset += 360;
  }
  secondsDegrees += secondOffset;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  var mins = now.getMinutes();
  var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  if (minsDegrees == 90) {
  	minuteOffset += 360;
  }
  minsDegrees += minuteOffset;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  var hour = now.getHours();
  var hourDegrees = (((hour <= 12 ? hour : hour - 12) / 12) * 360) + ((mins/60)*30) + 90;
  if (hourDegrees == 90) {
  	hourOffset += 360;
  }
  hourDegrees += hourOffset;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  var secs = (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds());
  var mins = (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
  var hours = (hour <= 12 ? hour : hour - 12);
  var m = (hour <= 12 ? " AM" : " PM")
	var time;
	if (secs % 2 == 0) {
		time = hours + ":" + mins + ":" + secs + m;
	} else {
		time = hours + " " + mins + " " + secs + m;
	}
	
	document.querySelector('.time').innerHTML = time;
}

setInterval(setDate, 1000);

$(document).ready(function() {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('open');
  });
});

$(window).resize(function() {
  console.log('scaling');
  if($(window).width() <= 767) {
    $('.non-initials').addClass("scale-out-horizontal");
  } else {
    $('.non-initials').removeClass("scale-out-horizontal");
  }
});

