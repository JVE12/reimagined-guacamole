function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/672Mwpsz6/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
function gotResults(error, results){
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_b+","+random_number_g+")";
    if (results[0].label == "Cat")
    {
      document.getElementById("image").src = "https://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png"
    }
    else if (results[0].label == "Dog")
    {
      document.getElementById("image").src = "https://static.vecteezy.com/system/resources/thumbnails/009/886/106/small/cute-puppies-pomeranian-mixed-breed-pekingese-dog-sitting-png.png"
    }
    else if (results[0].label == "Moo")
    {
      document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEwpuRd1m1F-u7i2SF1FieXVAchZ98lnCbw&usqp=CAU"
    }
    else if (results[0].label == "Lion")
    {
      document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNUnvBGnj1DtQN1tuNmmx7a5yMXDiSqR57g&usqp=CAU"
    }
    else
    {
      document.getElementById("image").src = "https://th.bing.com/th/id/OIP.cNl27MNWVSVoLBFyLmWVuQHaK3?w=135&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  }
}