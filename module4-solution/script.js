
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim */

(function (name) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i=0; i<names.length; i++) {
console.log (names[i]);
 var firstLetter = names[i].charAt(0);

  if (firstLetter.toLowerCase()=='j' ) {
       byeSpeaker.speak();
  } else {
    helloSpeaker.speak();
  }
}

})(name);