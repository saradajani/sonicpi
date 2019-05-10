var mySound = document.getElementById('kathy');
var mySoundd = document.getElementById('mysoundd');
var mySounddd = document.getElementById('mysounddd');

function checkButton(){
	var audio = document.getElementById("kathy");
       audio.play();
	 for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
