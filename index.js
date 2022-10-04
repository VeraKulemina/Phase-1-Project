//add query selectors for character data elements

//this should be the id of your menu items
const test = document.getElementById("test");


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
        .then(r => r.json())
        .then( characters => { 
            charDetails(characters[0]),
            characters.forEach(character => characterDetails(character))
        });
});

document.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.userInput.value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(r => r.json())
        .then( characters => { 
            characters.forEach(character => characterDetails(character))
        });
    // write code to remove all html content where characters are supposed to go

    //write code to add new character html
});

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "green";
  
    // reset the color after a short delay
    // setTimeout(() => {
    //   event.target.style.color = "";
    // }, 500);
});

function addCaracters(characterData){
    let spanCharacter = document.createElement("span")
    spanCharacter.textContent = characterData.name;
    //calls charDetails for clicked character profile to gather data about charcter
    //then changes textContent and src attributes to display character profile
    spanCharacter.addEventListener("click", (e) => charDetails(characterData));
    characterName.append(spanCharacter);
   
}

function charDetails(data){
    // example from code challenge
    // names.textContent = data.name;
    // vote.textContent = data.votes;
    // mainImg.src = data.image;
}

