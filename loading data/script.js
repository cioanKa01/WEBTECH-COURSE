var getDataBtn = document.getElementById("json-button");
var dataContainer = document.getElementById("json-data");

var userData;

var clickCount = -1;

var xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    userData = JSON.parse(xhttp.responseText);

    console.log(userData[0]);

}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums");
xhttp.send();

getDataBtn.addEventListener("click", loadData);

function loadData() {
    clickCount++;
    renderHTML();
}

function renderHTML() {
    for (let i = clickCount * 10; i < clickCount * 10 + 10; i++) {
        const htmlString = "<tr> " + " <td>" + userData[i].userId + "</td>" +
            " <td>" + userData[i].id + "</td>" + " <td>" + userData[i].title + "</td>" + "</tr>";

        dataContainer.innerHTML += htmlString;
    }
}


const fewSeconds = 5;

document.querySelector('#json-button').addEventListener('click', (e) => {
    var btn = document.getElementById("json-button");

    e.target.disabled = true;

    setTimeout(() => {
        e.target.disabled = false;
        btn.classList.toggle("inactiveBtn");

        btn.innerHTML = "Load more data...";
        var counter = 5;
        setInterval(function() {
            counter--;
            if (counter >= 0) {

                btn.innerHTML = counter + "seconds remaining";
            }
            if (counter === 0) {

                clearInterval(counter);
            }
        }, 1000);

    }, fewSeconds * 1000)
    btn.classList.toggle("inactiveBtn");
    //btn.innerHTML = "Load more data...";
})