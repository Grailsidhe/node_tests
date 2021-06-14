const me = {
    name: "Lorianne",
    campus: "Online EN"
};

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hello I'm " + me.name + " from " + me.campus + " Campus!"
}));

module.exports = me;