

function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/70zXkZhDO/model.Json",modelReady);
}

function modelReady()
{
    Classifier.classify(gotresult);
}

 function gotresults(error,result)
 {
    if(error)
    {
        console.log(error);
    }

    else
    {
        if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(result)
        var sound = result[0].label;
        var confidence = result[0].confidence.toFixed(3);
        document.getElementById("confidence").innerHTML = confidence;
        document.getElementById("result").innerHTML = sound;
        if(sound=="dog")
        {
            document.getElementById("dog").src="dog.webp";
        }

        else if(sound=="cat")
        {
            document.getElementById("cat").src="cat.webp";
            
        }

        else  if(sound=="cow")
        {
            document.getElementById("cow").src="cow.webp";
        }

        else if(sound=="duck")
        {
            document.getElementById("duck").src="duck.webp";
        }
    }
    }
 }