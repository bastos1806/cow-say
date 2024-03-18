const objet = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Je suis " + `${objet.name}` + " et je suis de " + `${objet.campus}` ,
    // e : "oO",
    // T : "U "
}));

