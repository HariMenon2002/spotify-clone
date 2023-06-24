console.log('Welcome to spotify')

//initialize the variables
let songindex=0;
let audioElement =new Audio("bulleya.mp3");
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Bulleya",filePath:"songs/bulleya1.mp3",coverPath:"covers/bulleya1.jpg"},
    {songName:"Counting stars",filePath:"songs/counting stars.mp3",coverPath:"covers/counting stars.jpg"},
    {songName:"Dheera dheera",filePath:"songs/dheera dheera.mp3",coverPath:"covers/dheera dheera.jpg"},
    {songName:"Gallan goodiyan",filePath:"songs/gallan goodiyan.mp3",coverPath:"covers/gallan goodiyan.jpg"},
    {songName:"Lailakame",filePath:"songs/lailakame.mp3",coverPath:"covers/lailakame.jpg"},
    {songName:"Nenjakame",filePath:"songs/nenjakame.mp3",coverPath:"covers/nenjakame.jpg"},
    {songName:"Talking to the moon",filePath:"songs/talking to the moon.mp3",coverPath:"covers/talking to the moon.jpg"},
    {songName:"The nights",filePath:"songs/the nights.mp3",coverPath:"covers/the nights.jpg"},
    {songName:"Unstoppable",filePath:"songs/unstoppable.mp3",coverPath:"covers/unstoppable.jpg"}
]

songitems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})

//audioElement.play(); will make it play

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        //now i want to change pause button to play button
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else
    {
          audioElement.pause();
          masterplay.classList.remove('fa-circle-pause');
          masterplay.classList.add('fa-circle-play');
          gif.style.opacity=0;
    }


})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100); //how much perceint it has covered
    //console.log(progress); 
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value* audioElement.duration/100;

})

const makeplay =()=>{
    //this is needed to make sure that when one songs play button is pressed ,others go back to paus
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
            element.classList.remove("fa-circle-pause");
            element.classList.add("fa-circle-play");
    })
};
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    //to change pause to play
    element.addEventListener('click',(e)=>{
            //console.log(e);
            console.log(e.target);
             makeplay();
             index=parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            audioElement.src=`songs/${index}.mp3`;
            mastersongname.innerText=songs[index].songName;
            audioElement.currentTime=0;
            audioElement.play();
 
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity=1;

    })
})

document.getElementById('next').addEventListener('click',()=>{
     if(index>=8) {index=0;}
     else{index+=1;}
     audioElement.src=`songs/${index}.mp3`;
     mastersongname.innerText=songs[index].songName;
     audioElement.currentTime=0;
     audioElement.play();
 
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
     if(index<=0) {index=0;}
     else{index-=1;}
     audioElement.src=`songs/${index}.mp3`;
     mastersongname.innerText=songs[index].songName;
     audioElement.currentTime=0;
     audioElement.play();
 
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
})