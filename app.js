let img = document.querySelector('.cookie');
let outputClick = document.querySelector('.input');
let plus = document.querySelector('.plus');
let click = document.querySelector('.level');
let click2 = document.querySelector('.level4');
let click3 = document.querySelector('.level5');
let click4 = document.querySelector('.level6');
let click5 = document.querySelector('.level7');

let count = 0;

let audio = new Audio('desk.mp3');
let audioLevel = new Audio('cookie.mp3');
let audioLevel2 = new Audio('cookie2.mp3');
let audioLevel3 = new Audio('cookie3.mp3');
let audioLevel4 = new Audio('cookie4.mp3');
let audioLevel5 = new Audio('cookie5.mp3');

function cookieClick(){
  count ++;
  plus.style.display = "block";
  setTimeout(
    function() {
      plus.style.display = "none";
    }, 200);
    
    audio.play();
  
  updateDisplay();
  
}

function updateDisplay(){
  outputClick.innerHTML = count;
  
    if(count === 10){
      audioLevel.play();
      alert('Level 1 Complete! Cookies!!!!!');
      click.style.color = 'rgb(0, 255, 0)';
    }
    if(count === 50){
      audioLevel2.play();
      alert('You\'ve made it to 50! Level 2 Complete');
      click2.style.color = 'rgb(0, 255, 0)';
    }
    if(count === 100){
      audioLevel3.play();
      alert('You\'ve made it to 100! Level 3 Complete');
      click3.style.color = 'rgb(0, 255, 0)';
    }
    if(count === 200){
      audioLevel4.play();
      alert('You\'ve made it to 200! Level 4 Complete');
      click4.style.color = 'rgb(0, 255, 0)';
    }
    if(count === 500){
      audioLevel5.play();
      alert('You\'ve made it to 500! Level 5 Complete, SANDBOX ACTIVATED');
      click5.style.color = 'rgb(0, 255, 0)';
      
    }
    
}

