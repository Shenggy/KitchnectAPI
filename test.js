/*const fetch = require("node-fetch");
const UserAction = async () => {
    const response = await fetch('http://localhost:3000/api/ingredient/3');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
};
UserAction().then();*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText));
    }
};
xmlhttp.open('PUT', 'http://localhost:3000/api/elementConnecte/1');
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.send(JSON.stringify({etat : 1}));