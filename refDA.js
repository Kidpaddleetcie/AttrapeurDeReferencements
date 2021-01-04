// ==UserScript==
// @creator Glin Kidpaddleetcie
// @name Référencement DeviantArt
// @namespace MeddleMonkey Scripts
// @description Récupérer la référence sur DeviantArt
// @icon        https://github.com/Kidpaddleetcie/Referencement-DeviantArt/blob/master/REF%20REC%20DeviantArt%20Logo%2016.png?raw=true
// @icon64      https://github.com/Kidpaddleetcie/Referencement-DeviantArt/blob/master/REF%20REC%20DeviantArt%20Logo.png?raw=true
// @grant none
// ==/UserScript==
// 
// 
// 
/* Nom de l'auteur */
let tspliteuh = document.URL.split('/');

console.log(tspliteuh[3]); // Le nom de l'auteur


/* Nom de l'oeuvre' */
let oeuvreuh = document.title.split(' by');


/* Resultat */
let lonk = document.URL.split('?comment=');
if(tspliteuh[2]==="www.deviantart.com"){
document.querySelector('._1MRwK').insertAdjacentHTML('beforebegin', '<img id="ref_dea" style="width:50px;cursor:pointer;transition:all 0.2s" src="https://github.com/Kidpaddleetcie/Referencement-DeviantArt/blob/master/REF%20REC%20DeviantArt%20Logo.png?raw=true" alt="Prise de la référence"/><style>#ref_dea:hover{transform:scale(0.8);}</style>');  

document.getElementById('ref_dea').addEventListener("click", daref);
let ii = false;

function daref() {
      if (ii === false) {
        document.querySelector('._1X1XZ').insertAdjacentHTML('beforebegin', '<textbox id="ref_dea_modal" style="background-color:#ffffff52;display:inline-block;width:100%;color:#475c4d">" ' + oeuvreuh[0] + ' " de <a href="https://www.deviantart.com/' + tspliteuh[3] + '">' + tspliteuh[3] + '</a> : ' + lonk[0] + '</textbox>');  
        ii=true;
document.getElementById('ref_dea').addEventListener("click", daref);
    }
}}
else{
  console.log("Référencement DeviantArt ne fonctionne que sur DeviantArt, évidemment ! et là, on est sur "+tspliteuh[2]);
}
