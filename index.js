function printNum(element) {
    var btnValue = element.innerText;
    document.getElementById('result').value = btnValue;

    console.log(btnValue)
}

function clearBtn(){
    document.getElementById('result').value = "";
}