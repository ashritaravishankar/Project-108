function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/UmV-MkUfR/model.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);

}



 var cat = 0;
 var dog = 0;
 var cow = 0;
 var lion = 0;
 var elephant = 0;
 var wolf = 0;
 var cuckoo = 0;

 

function gotResults(error, results){
    if(error){
        console.error("error");
    }
   else{
       console.log("results");


    random_number_r = Math.floor (Math.random() * 255 ) + 1;
    random_number_g = Math.floor (Math.random() * 255 ) + 1;
    random_number_b = Math.floor (Math.random() * 255 ) + 1;

    
    document.getElementById("sound_name").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";



    document.getElementById("result_count").innerHTML = 'Detected count of cat - ' +cat+ '';
     
    document.getElementById("result_second_count").innerHTML = 'Detected count of dog - '+dog+'';
    
    
    
    document.getElementById("result_third_count").innerHTML = 'Detected count of cow - ' +cow+ '';
    document.getElementById("result_fourth_count").innerHTML = 'Detected count of elephant - '+elephant+'';
     
     
    document.getElementById("result_fifth_count").innerHTML = 'Detected count of lion - ' +lion+ '';
     
    document.getElementById("result_sixth_count").innerHTML = 'Detected count of cuckoo - '+cuckoo+'';
    document.getElementById("result_seventh_count").innerHTML = 'Detected count of wolf - '+wolf+'';


    document.getElementById("sound_name").innerHTML = 'Detected voice is of a - '+ results[0].label;
   
    




img = document.getElementById("gifs");
   

    if(results[0].label == "Cat"){
        img.src = 'cat.gif';
        cat = cat + 1;
    }
        

    else if(results[0].label == "Dog"){
        img.src = 'dog.gif';
        dog = dog + 1;


    }
    


    else if(results[0].label == "Cow"){
        img.src = 'cow.gif';
        cow = cow + 1;

        }
    



    else if(results[0].label == "Lion"){
        img.src = 'lion.gif';
        lion = lion + 1;

    }
    


   
    else if(results[0].label == "Elephant"){
        img.src = 'elephant.gif';
        elephant = elephant + 1;
    }
        
    

    else if(results[0].label == "Wolf"){
        img.src = 'wolf.gif';
        wolf = wolf + 1;
    }
        
    

    else if(results[0].label == "Cuckoo"){
        img.src = 'cuckoo.gif';
        cuckoo = cuckoo + 1;
    }


    else{
        img.src = "giphyEar.gif";
    }
   
    
}}