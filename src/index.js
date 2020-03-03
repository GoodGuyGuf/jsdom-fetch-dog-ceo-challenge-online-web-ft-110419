console.log('%c HI', 'color: firebrick')

//-----------Challenge-One--------------------------------//
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchList()
})

function fetchImages () {
    return fetch(imgUrl)
    .then(function(response) {
    return response.json();
    }).then(function(json) {
    parseObj(json)
    });
}

function parseObj (json) {
    let img = document.createElement('img');
    let div = document.getElementById("dog-image-container")

    json.message.forEach(image => 
    img.src = `${image}`,
    img.width = "300",
    div.appendChild(img));
}
//-----------Challenge-One-End----------------------------//



//-----------Challenge-Two-three--------------------------//
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchList () {
    return fetch(breedUrl)
    .then(function(response) {
    return response.json();
    }).then(function(json) {
    parseList(json)
    });
}

function parseList (json) {
    let ul = document.getElementById("dog-breeds");
    
    for (let i = 0; i < 92; i++) { 
        let li = document.createElement('li');
        li.className = "breed";
        li.innerText = `${Object.keys(json.message)[i]}`,
        li.addEventListener('click', () => li.style.color = "#FF0000"); // when the li is created, that is when we add an event listener to
        ul.appendChild(li); // that specific li. Then we append it to the ul.
    }
    letterFilter()
}
//-----------Challenge-two-three-End----------------------//



//-----------Challenge-Four-------------------------------//
function letterFilter (){
    let dropdown = document.getElementById("breed-dropdown")
    let allLis = document.getElementsByTagName("li")

    dropdown.addEventListener("change", function(e) {
        for (i = 0; i < allLis.length; i++) {
            if (dropdown.value === "b" && allLis.item(i).innerText[0] === "b") { // if the dropdown value is equal to a letter, 
                allLis[i].style.display = 'list-item'; // and the htmlCollection item at (i) first letter[0] is === "letter"
            } else if (dropdown.value === "a" && allLis.item(i).innerText[0] === "a") { // set the style.display to list-item
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "c" && allLis.item(i).innerText[0] === "c") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "d" && allLis.item(i).innerText[0] === "d") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "default") {
                allLis[i].style.display = "list-item"
            } else {
                allLis[i].style.display = "none"; // else do not show the dogs starting with the other letters
            }
        }
    })
}

//-----------Challenge-Four-End---------------------------//
