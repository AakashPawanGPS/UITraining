function addPost(){
    var text = document.getElementById("title").value
    var title = document.createElement('h3')
    title.innerHTML=text
    document.getElementById("main-content").appendChild(title)

    var d = document.getElementById("description").value
    var des = document.createElement('p')
    des.innerHTML=d
    document.getElementById("main-content").appendChild(des)

    var p = document.getElementById("date")
    var date = document.createElement('p')
    date.setAttribute('id','date')
    var today = new Date();
    var dateTime = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+ " | " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    date.innerText=dateTime
    document.getElementById('main-content').appendChild(date)

    var line = document.createElement('hr')
    document.getElementById("main-content").appendChild(line)

    document.getElementById("title").value=""
    document.getElementById("description").value=""
}

