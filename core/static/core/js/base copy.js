
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

function paralax() {

    console.log('*** PARALAX FUNCTION LOAD OK! ***')

    document.addEventListener("mousemove", paralax);
        
    function paralax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed')

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = 'translateX(${x}px) translateY(${y}px)'
            });
        }
}