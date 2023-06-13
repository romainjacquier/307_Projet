/*
  But :    Projet 307
   Auteur : Romain Jacquier
   Date :   05.06.2023 / V1.0 
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new HttpService();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadHome();
  }

 

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadHome(){
    this.vue.chargerVue("home", () => new homeCtrl());
  }

  loadVilleSuisse(){
    this.vue.chargerVue("villeSuisse", function () {
      new villeSuisseCtrl(); 
      new streetCtrl()});
  }

  loadPaysMonde(){
    this.vue.chargerVue("paysMonde", () => new paysMondeCtrl());
  }

  loadSources(){
    this.vue.chargerVue("sources", () => new sourcesCtrl());
  }
}

