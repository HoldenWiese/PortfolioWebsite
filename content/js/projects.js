function loadDoc(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadTicTacToe(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadBootCamp(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadCodeFirstForm(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadDatabaseFirst(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadCSharp21(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadPythonApp(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadSQL(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}