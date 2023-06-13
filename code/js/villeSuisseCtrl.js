/*
  But :    Projet 307
   Auteur : Romain Jacquier
   Date :   05.06.2023 / V1.0 
*/
class villeSuisseCtrl {
  constructor() {
    http.villeSuisse((data) => {
      let info = "";
      let nombre = 0;
      for (const ville in data) {
        info +=
          "<div class='tableaualigner'> <h2>" + data[ville].nom + "</h2>";
        info += "<table> <tr> <th>" + "District" + "</th>";
        info += "<td>" + data[ville].district + " </tr> </td>";
        info += "<tr> <th>" + "Population" + "</th>";
        info += "<td>" + data[ville].population + "</td> </tr>";
        info += "<tr> <th>" + "Numero Ville" + "</th>";
        info += "<td>" + data[ville].pkville + "</td> </tr> </table> </div>";
      }

      $("#infoVilleSuisse").append(info);
    });
    $("#entete").removeClass();
    $("#entete").addClass("villeSuisse");
    $("#title").text("Ville Suisse");
  }
}
