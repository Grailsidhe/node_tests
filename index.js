const me = require("./information");
const cowsay = require("cowsay");

 console.log(cowsay.say({
    text: "Hello I'm " + me.name + " from " + me.campus + " Campus!"
}));

