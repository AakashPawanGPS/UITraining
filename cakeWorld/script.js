/*Fill your code */
// var prices = [
//     {flavour:"chocolate",price:300},
//     {flavour:"strawberry",price:100},
//     {flavour:"butterscotch",price:200},
//     {flavour:"vannila",price:250},
//     {flavour:"redvelvet",price:350}
// ]

function createDiv(flavour){
    var a = document.createElement('div')
    a.setAttribute('id','cakeBlock')
    a.innerHTML=""
    switch(flavour){
        case "chocolate":
            a.style.backgroundColor = "brown"
            a.style.width="200px"
            a.style.height="20px"
            break
        case "strawberry":
            a.style.backgroundColor = "pink"
            a.style.width="170px"
            a.style.height="20px"
            break
        case "butterscotch":
            a.style.backgroundColor = "yellow"
            a.style.width="140px"
            a.style.height="20px"
            break
        case "vannila":
            a.style.backgroundColor = "aliceblue"
            a.style.width="115px"
            a.style.height="20px"
            break
        case "redvelvet":
            a.style.backgroundColor = "red"
            a.style.width="95px"
            a.style.height="20px"
            break
    }
    return a;
}

// var choco = document.createElement('div')
// choco.innerHTML=""
// choco.style.backgroundColor = "brown"
// choco.style.width="100px"
// choco.style.height="15px"

// var straw = document.createElement('div')
// straw.innerHTML=""
// straw.style.backgroundColor = "pink"
// straw.style.width="80px"
// straw.style.height="15px"

// var butter = document.createElement('div')
// butter.innerHTML=""
// butter.style.backgroundColor = "yellow"
// butter.style.width="60px"
// butter.style.height="15px"

// var vanni = document.createElement('div')
// vanni.innerHTML=""
// vanni.style.backgroundColor = "aliceblue"
// vanni.style.width="40px"
// vanni.style.height="15px"

// var redvelvet = document.createElement('div')
// redvelvet.innerHTML=""
// redvelvet.style.backgroundColor = "red"
// redvelvet.style.width="20px"
// redvelvet.style.height="15px"

var total = 0;

const target = document.getElementById("tar")


function addFlavour(flavour){
    var b = document.createElement('p')
    switch(flavour){
        case "chocolate":
            total+=300
            b.innerHTML="Chocolate-----300"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "strawberry":
            total+=100
            b.innerHTML="Strawberry----100"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "butterscotch":
            total+=200
            b.innerHTML="ButterScotch---200"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "vannila":
            total+=250
            b.innerHTML="Vannila-----250"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "redvelvet":
            total+=350
            b.innerHTML="RedVelvet-----350"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
    }
}

// function addChoco(){
//     total+=300
//     var cho = document.createElement('p')
//     cho.innerHTML = "Chocolate-----300"
//     document.getElementById("rightSide").appendChild(cho)
//     // target.parentNode.insertBefore(choco,target)
//     target.appendChild(choco)
// }

// function addStr(){
//     total+=100
//     var cho = document.createElement('p')
//     cho.innerHTML = "Strawberry----100"
//     document.getElementById("rightSide").appendChild(cho)
//     // target.parentNode.insertBefore(straw,target)
//     target.appendChild(straw)
// }
// function addBut(){
//     total+=200
//     var cho = document.createElement('p')
//     cho.innerHTML = "Butterscotch--200"
//     document.getElementById("rightSide").appendChild(cho)
//     // target.parentNode.insertBefore(butter,target)
//     target.appendChild(butter)
// }
// function addVan(){
//     total+=250
//     var cho = document.createElement('p')
//     cho.innerHTML = "Vannila--------250"
//     document.getElementById("rightSide").appendChild(cho)
//     // target.parentNode.insertBefore(vanni,target)
//     target.appendChild(vanni)
// }
// function addRed(){
//     total+=350
//     var cho = document.createElement('p')
//     cho.innerHTML = "RedVelvet-----350"
//     document.getElementById("rightSide").appendChild(cho)
//     // target.parentNode.insertBefore(redvelvet,target)
//     target.appendChild(redvelvet)
// }


  
//   image.setAttribute('alt', 'nature');
  
//   image.setAttribute('height', 350); // 👈️ height in px
//   image.setAttribute('width', 550); // 👈️ width in px

function calTotal(){
    var cho = document.createElement('p')
    cho.innerHTML = "Total : " + total
    cho.style.color="green"
    document.getElementById("rightSide").appendChild(cho)
    var candle = document.createElement('img')
    candle.setAttribute('src','assets/candle.png')
    candle.setAttribute('id','candle')
    target.appendChild(candle)
}

function reset(){
    const first = document.getElementById("rightSide").firstElementChild
    document.getElementById("rightSide").innerHTML = ""
    // document.getElementById("middle").innerHTML=""
    var div = document.getElementById('tar');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    total = 0
    document.getElementById("rightSide").appendChild(first)   
}
