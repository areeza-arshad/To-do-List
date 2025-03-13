const addContent = document.getElementById('addContent');
const ulList = document.getElementById('list-container');
let dynamicSpan = null;
function addTask() {
    if (addContent.value === '') {
        alert("you must write something")
    } else {
        let li = document.createElement('li');
        li.innerHTML = addContent.value;
        ulList.appendChild(li);
        let dynamicSpan = document.createElement('span');
        dynamicSpan.innerHTML = "\u00d7" 
        li.appendChild(dynamicSpan);
       }
    addContent.value = '';
    saveData();
}
ulList.addEventListener("click", function(e) { 
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData() {
    localStorage.setItem("data", ulList.innerHTML)
}

function showData() {
    ulList.innerHTML = localStorage.getItem("data");
}
showData();