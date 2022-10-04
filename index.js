document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then(response => response.json())
      .then(characters => {
          characters.forEach(objCharacters => showCharacter(objCharacters))
          displayCharacters(characters[0])
        })})

const characterBar = document.getElementById("character-bar");
const charactersImage = document.querySelector("#image");
const cuteNames = document.querySelector("#name");
const statusChar = document.querySelector("#vote-count")
characterBar.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "red";
});
characterBar.addEventListener("mouseout", (event) => {
    // highlight the mouseover target
    event.target.style.color = "#78BE21";
});
function showCharacter(objCharacter) {
    const img = document.createElement("span");
    img.textContent = objCharacter.name;
    img.addEventListener("click", (e) => displayCharacters(objCharacter))
    characterBar.append(img);
}
function displayCharacters(objCharacters) {
    //console.log(characters)
    cuteNames.textContent = objCharacters.name
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
