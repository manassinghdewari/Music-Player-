'use strict';
const music=document.querySelector('audio');
const img=document.querySelector('img');
const play=document.getElementById('play');
let isPlaying=false;

//play function
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");  //for changing the play sign to pause b changing its class name
    img.classList.add("anime");  //for adding animation we are adding anime class bcz anime class contains animation 
}
//pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

//changing the music data
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

//we will use array of and object for changing the content
//it means each element of array contains an object
const songs=
[
    {
        name:"Madhuban",
        title:"Madhuban",
        artist:"Shaarib and Toshi",
    },
    {
        name:"Rahogi Meri",
        title:"Rahogi Meri",
        artist:"Arjit Singh",
    },
    {
        name:"Tumse Bhi Zyada",
        title:"Tumse Bhi Zyada",
        artist:"Arjit Singh",
    },
]

//function for changing data on click on next and prev

const loadSong=(songs)=>
{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="./music/"+songs.name+".mp3";
    img.src="./images/"+songs.name+".jpg";
}

 let songIndex=0;
//  const nextSong=()=>
//  {
//      if(songIndex===songs.length-1)
//      songIndex=0;
//      else
//      songIndex++;
//      loadSong(songs[songIndex]);
//  };
//we can do it by formula
const nextSong=()=>
{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong=()=>
 {
     songIndex=(songIndex-1+songs.length)%songs.length;
     loadSong(songs[songIndex]);
     playMusic();
 }
//  const prevSong=()=>
//  {
//      if(songIndex==0)
//      songIndex=songs.length-1;
//      else
//      songIndex--;
//      loadSong(songs[songIndex]);
//      playMusic();
//  }
 next.addEventListener("click",nextSong);
 prev.addEventListener("click",prevSong);