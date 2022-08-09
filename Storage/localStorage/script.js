var a = document.getElementById("key").value
var b = document.getElementById("value").value
var c = document.getElementById("getVal").value
var d = document.getElementById("remIt").value

// function storeData(){
//     let key = document.getElementById("key").value;
//     var value = document.getElementById("value").value;
//     document.getElementById("output").innerText = localStorage.getItem(key);
// }

function setIt(){
    document.getElementById("output").innerHTML = JSON.stringify(localStorage.setItem(a,b));
}

function getVal(){
    document.getElementById("output").innerHTML = localStorage.getItem(c);
}

function removeIt(){
    document.getElementById("output").innerHTML = localStorage.removeItem(d);
}

function clearStorage(){
    document.getElementById("output").innerHTML = localStorage.clear();
}