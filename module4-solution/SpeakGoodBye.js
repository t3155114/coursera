
(function (window) {


 var byeSpeaker ={};
 byeSpeaker.name=name;

var speakWord = "Good Bye";

byeSpeaker.speak=function () {
  console.log(speakWord + " " + byeSpeaker.name);
}

 window.byeSpeaker = byeSpeaker;
})(window);