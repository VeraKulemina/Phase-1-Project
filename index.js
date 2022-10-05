const characterBar = document.getElementById("character-bar");
const charactersImage = document.querySelector("#image");
const cuteNames = document.querySelector("#name");
const statusChar = document.querySelector("#vote-count");

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then(response => response.json())
      .then(characters => {
          characters.forEach(objCharacters => showCharacter(objCharacters));
          //console.log(characters[0])
          displayCharacters(characters[0]);
          characters.forEach(objCharacters => info(objCharacters))
          console.log(info((idsIndex)));
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
    img.addEventListener("click", (e) => displayCharacters(objCharacter))
    characterBar.append(img);
}
function displayCharacters(objCharacters) {
    cuteNames.textContent = objCharacters.name;
    statusChar.textContent = objCharacters.status;
   charactersImage.src = objCharacters.image
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
const detailInfo = document.querySelector("#detailed-info");
// next.addEventListener("click", (eve) => {})

function info(infoData) {
    let ids = infoData.id;
    console.log(ids)
    return parseInt(ids);
}
const idsIndex = [];
    idsIndex.push(info);
    console.log(idsIndex);