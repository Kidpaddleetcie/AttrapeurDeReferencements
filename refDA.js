// ==UserScript==
// @creator Glin Kidpaddleetcie
// @name Référencement DeviantArt
// @namespace MeddleMonkey Scripts
// @description Récupérer la référence sur DeviantArt
// @icon        https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89b8e4ba-2c52-44b5-b4c6-963c82fe1812/debmpmk-78e87802-47bf-475f-a1bf-e2e33699fdd5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODliOGU0YmEtMmM1Mi00NGI1LWI0YzYtOTYzYzgyZmUxODEyXC9kZWJtcG1rLTc4ZTg3ODAyLTQ3YmYtNDc1Zi1hMWJmLWUyZTMzNjk5ZmRkNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Z0WlwEk2eyaqP_Ls2GVvpVY6zBZtIWv0btUvKnJHq98
// @icon64      https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89b8e4ba-2c52-44b5-b4c6-963c82fe1812/debmpbk-0430e891-012c-48d8-a49a-8c4ef2fccef3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODliOGU0YmEtMmM1Mi00NGI1LWI0YzYtOTYzYzgyZmUxODEyXC9kZWJtcGJrLTA0MzBlODkxLTAxMmMtNDhkOC1hNDlhLThjNGVmMmZjY2VmMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QIVpCnPsG7Rju08NcDSLzyGIPL5kCIj_5HE-BfYmcW0
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
if(tspliteuh[2]==="www.deviantart.com"){
document.body.innerHTML += '<img id="ref_dea" style="position:fixed;top:200px;left:0;width:50px;cursor:pointer;transition:all 0.2s" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89b8e4ba-2c52-44b5-b4c6-963c82fe1812/debmpbk-0430e891-012c-48d8-a49a-8c4ef2fccef3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODliOGU0YmEtMmM1Mi00NGI1LWI0YzYtOTYzYzgyZmUxODEyXC9kZWJtcGJrLTA0MzBlODkxLTAxMmMtNDhkOC1hNDlhLThjNGVmMmZjY2VmMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QIVpCnPsG7Rju08NcDSLzyGIPL5kCIj_5HE-BfYmcW0" alt="Prise de la référence"/><style>#ref_dea:hover{transform:scale(0.8);}</style>';

document.getElementById('ref_dea').addEventListener("click", daref);
let ii = 0;

function daref() {
      if (ii === 0) {
        document.querySelector('._2XD_g').innerHTML += '<textbox id="ref_dea_modal" style="position:fixed;top:' + window.innerHeight / 2 + 'px;right:' + window.innerWidth / 2 + 'px;z-index:9999;background-color:white;display:box">" ' + oeuvreuh[0] + ' " de <a href="https://www.deviantart.com/' + tspliteuh[3] + '">' + tspliteuh[3] + '</a> : ' + lonk[0] + '</textbox>';
        ii++;
document.getElementById('ref_dea').addEventListener("click", daref);
    } else {
               document.getElementById("ref_dea_modal").style.display = "none";

        ii=0;

    }
}}
else{
  console.log("Référencement DeviantArt ne fonctionne que sur DeviantArt, évidemment ! Et là, on est sur "+tspliteuh[2]);
}
