/*
  But :    Projet 307
   Auteur : Romain Jacquier
   Date :   05.06.2023 / V1.0 
*/
class paysMondeCtrl {
    constructor() {
      http.paysMonde((data) => {
        let info = "";

          for (const pays in data) {
            info += "<h2>" + data[pays].nom+"</h2>";
            info += "<table> <tr> <th>"+"Continent"+"</th>";
            info += "<td>" +data[pays].continent +" </tr> </td>";
            info += "<tr> <th>"+"Région"+"</th>";
            info += "<td>" +data[pays].region+"</td> </tr>";
            info += "<tr> <th>"+"Surface"+"</th>";
            info += "<td>" +data[pays].surface+"</td> </tr>";
            info += "<tr> <th>"+"Année d'indépendance"+"</th>";
            if(data[pays].anneeIndep == null){
              info += "<td>" +" - "+"</td> </tr>"
            }else{
              info += "<td>" +data[pays].anneeIndep+"</td> </tr>";
            }
            
            info += "<tr> <th>"+"Population"+"</th>";
            info += "<td>" +data[pays].population+"</td> </tr>";
            info += "<tr> <th>"+"Espérance de vie"+"</th>";
            if(data[pays].anneeIndep == null){
            info += "<td>" +data[pays].esperanceVie+"</td> </tr>";
            }else{
              info += "<td>" +" - "+"</td> </tr>"
            }
            info += "<tr> <th>"+"Abréviation"+"</th>";
            info += "<td>" +data[pays].pkpays+"</td> </tr> </table>";
          }
         
          $("#infoPaysMonde").append(info);
      });
      $("#entete").removeClass();
      $("#entete").addClass("paysMonde");
      $("#title").text("Pays Monde");
    }
  }