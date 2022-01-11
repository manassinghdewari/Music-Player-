'use strict';
const music=document.querySelector('audio');
const img=document.querySelector('img');
const play=document.getElementById('play');
play.addEventListener('click',()=>{
    music.play();
    play.classList.replace("fa-play","fa-pause");  //for changing the play sign to pause b changing its class name
    img.classList.add("anime");  //for adding animation we are adding anime class bcz anime class contains animation 
})