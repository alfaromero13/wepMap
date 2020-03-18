/*different tipes de icones*/   

    var play_ico = L.icon({
        iconUrl: 'play48.png',
        iconSize: [30, 30]
        
    
    });
    var pause_ico = L.icon({
        iconUrl: 'pause48.png',
        iconSize: [30, 30]

    });
    var stop_ico = L.icon({
        iconUrl: 'stop48.png',
        iconSize: [30, 30]
                                    
    });
/*_____________________________________________________________________*/ 

    /*Map*/    
    var mymap = L.map('mapid').setView([48.795, 2.307], 6);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'MG&eacute;olocalisation',
        minZoom: 6,
        maxZoom: 18
    }).addTo(mymap);
                   
// marker----------------------------------------------------
    var paris = L.marker([48.8571, 2.351],{icon: play_ico}).addTo(mymap);
    var marsellai = L.marker([43.2955, 5.3696],{icon: pause_ico}).addTo(mymap);
    var bordeaux = L.marker([44.8414, -0.5809],{icon: stop_ico}).addTo(mymap);
                   
// are ciculaire----------------------------------------------------
    var circle = L.circle([48.8571, 2.351], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);

// are polygone----------------------------------------------------
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);
                   
                   
// are popup----------------------------------------------------
    paris.bindPopup("<b>Hello paris!</b><br>I am Play.").openPopup();
    marsellai.bindPopup("<b>Hello marsellie!</b><br>I am pause.").openPopup();
    bordeaux.bindPopup("<b>Hello bordeaux!</b><br>I am stop.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
        
// are polygone----------------------------------------------------


function ZoneCircle(){
    prompt();
    circle_v = prompt("insere latitude et longitude a zone : ","");
    var circle = L.circle([circle_v], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap)
}



// are popup----------------------------------------------------
//var popup = L.popup().setLatLng([48.8571, 2.351]).setContent("I am a standalone popup.").openOn(mymap);
                    
// serve para ver latitude e longitude----------------------------------------------------
/*function onMapClick(e) {
alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);
// serve para ver latitude e longitude----------------------------------------------------
 */

