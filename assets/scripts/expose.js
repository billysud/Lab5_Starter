// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //TODO

  
  var pict = "";
  var loud = 50;
  let selectElement = document.getElementById("horn-select");
    selectElement.addEventListener('change', (event) => {
  let img = document.querySelector('img');
  pict = event.target.value;
  if(pict == "air-horn")
    img.src = "assets/images/air-horn.svg";
  else if(pict == "car-horn")
    img.src = "assets/images/car-horn.svg";
  else
    img.src = "assets/images/party-horn.svg";
});


document.getElementById("volume").oninput = function(){
  let img = document.getElementById("volume-controls").getElementsByTagName("img")[0];
  let val = parseInt(document.getElementById("volume").value);
  loud = val;
  if(val == 0){
    img.src = "assets/icons/volume-level-0.svg"
  }
  else if (val < 33){
    img.src = "assets/icons/volume-level-1.svg"
  }
  else if(val < 67){
    img.src = "assets/icons/volume-level-2.svg"
  }
  else{
    img.src = "assets/icons/volume-level-3.svg"
  }
}

let butt = document.querySelector("button")
  butt.addEventListener('click', (event) => {
      let ad = document.querySelector("audio");
      if(pict == "air-horn"){
        ad.src = "assets/audio/air-horn.mp3"
        ad.play()
        ad.volume = loud / 100;
      }
      else if(pict == "car-horn"){
        ad.src = "assets/audio/car-horn.mp3";
        ad.play();
        ad.volume = loud / 100;
      }
      else{
        ad.src = "assets/audio/party-horn.mp3";
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        ad.play();
        ad.volume = loud / 100;
      }
  });
}


