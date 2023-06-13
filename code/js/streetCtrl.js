/*
 * Contrôleur de la vue "street.html".
 * @author P-A Mettraux
 * @version 1.0 / 01.05.2020
 *
 */
mapid="";
class streetCtrl{

  constructor(){
    this.initialiserCarte();
  }

  initialiserCarte() {
    // Icône de marqueurr rouge.
    const RedMarkerIcon = L.icon({
      iconUrl: "images/ville_318-108709.webp",
      iconSize: [36, 60],
      iconAnchor: [9, 30],
      popupAnchor: [0, -20],
    });
    // Icône de marqueur vert.
    const GreenMarkerIcon = L.icon({
      iconUrl: "images/greenmarkericon.png",
      iconSize: [18, 30],
      iconAnchor: [9, 30],
      popupAnchor: [0, -20],
    });
  
    // Changer la position et positionner votre carte sur Paris.
    var lat = 46.8155135;
    var lon = 8.224471999999992;
    var latBern = 46.946531;
    var lonBern = 7.444523;
    var latZurich = 47.375540;
    var lonZurich = 8.539369;
    var latGeneve = 46.204364;
    var lonGeneve = 6.143303;
    var latBasel = 47.559229;
    var lonBasel = 7.588446;
    var latLausanne = 46.519382;
    var lonLausanne = 6.632384;
    mapid = L.map("mapid").setView([lat, lon], 8);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapid);

    var berne = L.marker([latBern, lonBern], { icon: RedMarkerIcon }).addTo(mapid);
  berne.bindPopup("Bern");

  var zurich = L.marker([latZurich, lonZurich], { icon: RedMarkerIcon }).addTo(mapid);
  zurich.bindPopup("Zürich");

  var geneve = L.marker([latGeneve, lonGeneve], { icon: RedMarkerIcon }).addTo(mapid);
  geneve.bindPopup("Genève");

  var basel = L.marker([latBasel, lonBasel], { icon: RedMarkerIcon }).addTo(mapid);
  basel.bindPopup("Basel");

  var lausanne = L.marker([latLausanne, lonLausanne], { icon: RedMarkerIcon }).addTo(mapid);
  lausanne.bindPopup("Lausanne");
  
    
  }
  
}