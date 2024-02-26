function printNum(element) {
    var btnValue = element.innerText;
    document.getElementById('result').value = btnValue;

    console.log(btnValue)
}

function clearBtn(){
    //console.log("button clicked")
    document.getElementById('result').value = '';
}