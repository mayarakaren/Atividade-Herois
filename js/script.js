function buscarHeroi(){
    let universo = document.querySelector("input[name=universo]:checked").value;
    let heroi = document.getElementById("heroi").value.toUpperCase();
    let img = heroi.toLowerCase().replace(/ /g, "-");
  
    let heroisMarvel = ["VIUVA NEGRA","THOR","HOMEM ARANHA","HOMEM DE FERRO","CAPITAO AMERICA"];
    let heroisDc = ["BATMAN","SUPERMAN","MULHER MARAVILHA","LANTERNA VERDE","AQUAMAN"];
  
    
    if(universo == "Marvel"){
      heroisMarvel.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>O herói selecionado foi: <br><img src='imgs/marvel/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
      "</span></p>" : document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Desculpe, esse herói não foi encontrado.</p>";
    }

    else if(universo == "DC"){
      heroisDc.indexOf(heroi) > -1 ? document.getElementById("mostrarHeroi").innerHTML = 
      "<p>O herói selecionado foi: <br><img src='imgs/dc/" + img + ".png'><br><span id='nomeHeroi'>" + heroi + 
      "</span></p>" : document.getElementById("mostrarHeroi").innerHTML = 
      "<p>Desculpe, esse herói não foi encontrado.</p>";
    }

    else{
      document.getElementById("mostrarHeroi").innerHTML =
      "<p>Ué, parece que você não selecionou um universo. Tente novamente!</p>";
    }
  }