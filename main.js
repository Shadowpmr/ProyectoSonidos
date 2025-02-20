function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/bgjmk5f-D/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById("alarm1") 
        img1 = document.getElementById("alarm2")
        img2 = document.getElementById("alarm3")
        img3 = document.getElementById("alarm4")
        img4 = document.getElementById("alarm5")
    
        if (results[0].label == "Ruido de fondo") {
          img.src = 'Fuego.png';
          img1.src = 'vidrio.png';
          img2.src = 'ambulancia.png';
          img3.src = 'tsunami.webp';
          img4.src = 'sismo.webp';
        } else if (results[0].label == "alarma incendios") {
          img.src = 'Fuego.gif';
          img1.src = 'vidrio.png';
          img2.src = 'ambulancia.png';
          img3.src = 'tsunami.webp';
          img4.src = 'sismo.webp';
        } else if (results[0].label == "alarma vidrios rotos") {
          img.src = 'Fuego.png';
          img1.src = 'vidrio.gif';
          img2.src = 'ambulancia.png';
          img3.src = 'tsunami.webp';
          img4.src = 'sismo.webp';
        } else if (results[0].label == "alarma ambulancia ") {
          img.src = 'Fuego.png';
          img1.src = 'vidrio.png';
          img2.src = 'ambulancia.gif';
          img3.src = 'tsunami.webp';
          img4.src = 'sismo.webp';
        } else if (results[0].label == "alarma tsunami") { 
          img.src = 'Fuego.png';
          img1.src = 'vidrio.png';
          img2.src = 'ambulancia.png';
          img3.src = 'tsunami.gif';
          img4.src = 'sismo.webp';
        } else if (results[0].label == "alarma sismo") { 
            img.src = 'Fuego.png';
            img1.src = 'vidrio.png';
            img2.src = 'ambulancia.png';
            img3.src = 'tsunami.webp';
            img4.src = 'sismo.gif';
        } else {
          img.src = 'Fuego.png';
          img1.src = 'vidrio.png';
          img2.src = 'ambulancia.png';
          img3.src = 'tsunami.webp';
          img4.src = 'sismo.webp';
        }
      }    
    }
