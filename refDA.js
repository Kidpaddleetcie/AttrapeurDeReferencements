// ==UserScript==
// @name Référencement DeviantArt
// @namespace MeddleMonkey Scripts
// @grant none
// ==/UserScript==
// 
// 
/* Nom de l'auteur */
let tspliteuh = document.URL.split('/');

console.log(tspliteuh[3]); // Le nom de l'auteur


/* Nom de l'oeuvre' */
let oeuvreuh = document.title.split(' by');


/* Resultat */
let lonk = document.URL.split('?comment=');

document.body.innerHTML += '<img id="ref_dea" style="position:fixed;top:200px;left:0;width:50px;cursor:pointer;transition:all 0.2s" src="https://pbs.twimg.com/profile_images/653654780166934531/VfWhxysf_400x400.png" alt="Prise de la référence"/><style>#ref_dea:hover{transform:scale(0.8);}</style>';

document.getElementById('ref_dea').addEventListener("click", daref);
let ii = 0;

function daref() {
      if (ii === 0) {
        document.body.innerHTML += '<textbox id="ref_dea_modal" style="position:fixed;top:' + window.innerHeight / 2 + 'px;right:' + window.innerWidth / 2 + 'px;z-index:9999;background-color:white;display:box">" ' + oeuvreuh[0] + ' " de <a href="https://www.deviantart.com/' + tspliteuh[3] + '">' + tspliteuh[3] + '</a> : ' + lonk[0] + '</textbox>';
        ii++;
document.getElementById('ref_dea').addEventListener("click", daref);
    } else {
               document.getElementById("ref_dea_modal").style.display = "none";

        ii=0;

    }
}
