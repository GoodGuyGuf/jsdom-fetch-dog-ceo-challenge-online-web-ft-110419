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
// move json into arrat to iterate over for challenge four.
function parseList (json) {
    let ul = document.getElementById("dog-breeds");
    
    for (let i = 0; i < 92; i++) { // we increment through the object keys of json.message at the index of i, as there are 92 breeds.
        let li = document.createElement('li');
        li.className = "breed";
        li.innerText = `${Object.keys(json.message)[i]}`,
        li.addEventListener('click', () => li.style.color = "#FF0000");
        ul.appendChild(li);
    }
    aFilter()
}

//-----------Challenge-End--------------------------------//

//-----------Challenge-Four-------------------------------//
function aFilter (){
    let dropdown = document.getElementById("breed-dropdown")
    let allLis = document.getElementsByTagName("li")

    dropdown.addEventListener("change", function(e) {
        for (i = 0; i < allLis.length; i++) {
            if (dropdown.value === "b" && allLis.item(i).innerText[0] === "b") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "a" && allLis.item(i).innerText[0] === "a") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "c" && allLis.item(i).innerText[0] === "c") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "d" && allLis.item(i).innerText[0] === "d") {
                allLis[i].style.display = 'list-item';
            } else if (dropdown.value === "default") {
                allLis[i].style.display = "list-item"
            } else {
                allLis[i].style.display = "none";
            }
        }
    })
}

//-----------Challenge-Four-End---------------------------//
