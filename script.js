var button1 = document.getElementById("course1")
button1.addEventListener("click", showDetails1)

var total = 0

function showDetails1() {
    var num1 = document.getElementById("name1").innerHTML
    var num2 = document.getElementById("rup1").innerHTML
    var cou1 = document.createElement("div").innerHTML =
        document.getElementById("cour1").innerText = num1 + "-----";
    document.getElementById("rupee1").innerText = num2;
    total = parseInt(total) + parseInt(num2)
    document.getElementById("count").innerHTML = total
    console.log(total)
    cartAdd.appendChild(cou1)
    cartAdd.appendChild(cou2)

}

var button2 = document.getElementById("course2")
button2.addEventListener("click", showDetails2)

function showDetails2() {
    var num1 = document.getElementById("name2").innerHTML
    var num2 = document.getElementById("rup2").innerHTML
    var cou1 = document.createElement("div").innerHTML =
        document.getElementById("cour2").innerText = num1 + "-----"
    document.getElementById("rupee2").innerText = num2
    total = parseInt(total) + parseInt(num2)
    document.getElementById("count").innerHTML = total
    console.log(total)
    cartAdd.appendChild(cou1)
}

var button3 = document.getElementById("course3")
button3.addEventListener("click", showDetails3)

function showDetails3() {
    var num1 = document.getElementById("name3").innerHTML
    var num2 = document.getElementById("rup3").innerHTML
    var cou2 = document.createElement("div").innerHTML =
        document.getElementById("cour3").innerText = num1 + "-----"
    document.getElementById("rupee3").innerText = num2
    total = parseInt(total) + parseInt(num2)
    document.getElementById("count").innerHTML = total
    console.log(total)
    cartAdd.appendChild(cou2)
}

var button4 = document.getElementById("course4")
button4.addEventListener("click", showDetails4)

function showDetails4() {
    var num1 = document.getElementById("name4").innerHTML
    var num2 = document.getElementById("rup4").innerHTML
    var cou = document.createElement("div").innerHTML =
        document.getElementById("cour4").innerText = num1 + "-----"
    document.getElementById("rupee4").innerText = num2
    total = parseInt(total) + parseInt(num2);
    document.getElementById("count").innerHTML = total;
    cartAdd.appendChild(cou)
}

var button5 = document.getElementById("course5")
button5.addEventListener("click", showDetails5)

function showDetails5() {
    var num1 = document.getElementById("name5").innerHTML
    var num2 = document.getElementById("rup5").innerHTML
    var cou = document.createElement("div").innerHTML =
        document.getElementById("cour5").innerText = num1 + "-----"
    document.getElementById("rupee5").innerText = num2
    total = parseInt(total) + parseInt(num2)
    document.getElementById("count").innerHTML = num2
    cartAdd.appendChild(cou)
}

var button6 = document.getElementById("course7")
button6.addEventListener("click", showDetails6)

function showDetails6() {
    var num1 = document.getElementById("name7").innerHTML
    var num2 = document.getElementById("rup7").innerHTML
    var cou = document.createElement("div").innerHTML =
        document.getElementById("cour7").innerText = num1 + "-----"
    document.getElementById("rupee7").innerText = num2
    total = parseInt(total) + parseInt(num2);
    document.getElementById("count").innerHTML = total;
    cartAdd.appendChild(cou)
}
