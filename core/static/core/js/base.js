
window.sessionStorage.clear();

function loadPage(pg_load, id_replaced) {
    var pg_load = pg_load
    var id_replaced = id_replaced
    var url = ''+ pg_load +''

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {

        if (xml.readyState == 4 && xml.status == 200) {

            document.getElementById(id_replaced).innerHTML = xml.responseText
        
        }

    }

    xml.open("GET", url, true)

    xml.send()

}

function unloadPage(pg_unload) {

    var element = document.getElementById(pg_unload);

    element.style.display = "none";

}
