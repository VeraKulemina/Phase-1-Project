const characterBar = document.getElementById("character-bar");
const charactersImage = document.querySelector("#image");
const cuteNames = document.querySelector("#name");
const statusChar = document.querySelector("#vote-count");
const genderChar= document.querySelector("#gender");
const speciesChar = document.querySelector("#species");

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then(response => response.json())
      .then(characters => {
          characters.forEach(objCharacters => showCharacter(objCharacters));
          //console.log(characters[0])
          displayCharacters(characters[0]);
        
        })});

characterBar.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
});
characterBar.addEventListener("mouseout", (event) => {
        event.target.style.color = "white";
});
function showCharacter(objCharacter) {
    const img = document.createElement("span");
    img.textContent = objCharacter.name;
    img.addEventListener("click", (e) => displayCharacters(objCharacter));
    characterBar.append(img);
}
function displayCharacters(objCharacters) {
    cuteNames.setAttribute("data-id", objCharacters.id);
    cuteNames.textContent = objCharacters.name;
    statusChar.textContent = objCharacters.status;
    genderChar.textContent = objCharacters.gender;
   speciesChar.textContent = objCharacters.species;
   charactersImage.src = objCharacters.image
   charactersImage.addEventListener('click', alertFunction);

}
function alertFunction() {
    alert("Webba DUB DUb")
   }
document.querySelector("#votes-form").addEventListener("submit", (e) =>{
    e.preventDefault();
    let copyVotes = e.target.votes.value
    console.log(copyVotes);
    handleVotes(copyVotes);
})
function handleVotes(votesAdded, currentVotes = parseInt(document.querySelector("#vote").innerText)){
    currentVotes += parseInt(votesAdded);
    let voteDisplay = document.querySelector("#vote");
    voteDisplay.textContent = currentVotes;
    console.log(currentVotes);
}
document.querySelector("#reset-btn").addEventListener("click", (event) => {
    handleVotes(0, 0);
})

// console.log(idsIndex);
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const detailInfo = document.querySelector("#detailed-info");



next.addEventListener("click", (e) => {
    e.preventDefault();
    const currentId = parseInt(cuteNames.getAttribute("data-id"));
    if(currentId <= 800){ 
        console.log(currentId);
        let nextId = currentId + 1;
        fetch(`https://rickandmortyapi.com/api/character/${nextId}`)
        .then(response => response.json())
        .then(characters =>  {
            displayCharacters(characters);
        });
    }
});


previous.addEventListener("click", (e) => {
    e.preventDefault();
    const currentId = parseInt(cuteNames.getAttribute("data-id"));
    if(currentId > 1){
        console.log(currentId);
        let previousId = currentId - 1;
        fetch(`https://rickandmortyapi.com/api/character/${previousId}`)
        .then(response => response.json())
        .then(characters =>  {
            displayCharacters(characters);
        });
    }
});

const randomBtn = document.querySelector("#clickme");

randomBtn.addEventListener("click", randomEvent => {
    randomEvent.preventDefault();
    let currentrandomId = parseInt(cuteNames.getAttribute("data-id"));
    // for (var i = 0; i < 20; i++) {
    //     var count = 0;
    //     for (var j = 0; j < Math.floor(Math.random() * 20); j++) {
    //         count++;
    //     }
    //     console.log(count);

    if(currentrandomId <= 5){
        function getRandomArbitrary(min, max) {
            currentrandomId = Math.floor(Math.random() * (max - min) + min);
            return currentrandomId;
        }
          }
        getRandomArbitrary(1,5)
        fetch(`https://rickandmortyapi.com/api/character/${currentrandomId}`)
        .then(response => response.json())
        .then(characters =>  {
            displayCharacters(characters);
            getRandomArbitrary(1,5)
            console.log(getRandomArbitrary(1,5))
        });
    })
