const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const myArray = [];
function addTask(){
    if(inputBox.value === '') {
        alert("Please fill in the empty field first");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let fav = document.createElement("img")
        fav.src = 'images/favourite.png';
        fav.id = "Fav";
        fav.width = 20;
        fav.height = 20;
        li.appendChild(fav);
        listContainer.insertBefore(li, listContainer.firstChild);
        setColor();
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.id === "Fav"){
        e.target.classList.toggle("favorite");
        if (e.target.classList.contains("favorite")) {
            e.target.src = 'images/star.png';
        } else {
            e.target.src = 'images/favourite.png';
        }
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// function capitalizedText() {
//     const tasks = Array.from(listContainer.children);
//     tasks.forEach(task => {
//         task.textContent = capitalizeFirstLetter(task.textContent);
//     });
// }
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
function setColor() {
    const tasks = Array.from(listContainer.children);
    tasks.map(task => {
        task.style.color = '#34495E';
    });
}
function clearLocalStorage() {
    localStorage.removeItem("data");
    alert("Local Storage Cleared");
}

showTask();



