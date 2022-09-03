const myMusicList = [
"Comfy- Beyonce",
"Kiss it Better- Rihanna",
"Sweet Escape- Mizzle",
"Echoes of Silence- The WEEKEND",
"KU LO SA - OXLADE",
"Good Comfort- Shensea",
"Rebel - Shensea",
"Karma- Summer Walker",
"No Interviews- Lil Durk",
"Virgos Groove -Beyonce",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

//create the remove/hide functionality when clicking the button

button.addEventListener("click", function() { 
mySongs(myMusicList);
   mixList.classList.remove("hide") 
   button.classList.add("hide")
})

total.innerText=`My current top ${myMusicList.length} songs 🎧`;

//function that turns the array into html list elements

const mySongs = function (songs) {
//function that turns the array into html list elements
songs.forEach(function (song,index){
let li = document.createElement("li")
li.classList.add("song")
li.innerHTML = `<span class="song-number">#${index + 1} </span> ${song}`
mixList.append(li)
});
};