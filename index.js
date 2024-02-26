function printNum(element) {
    var val = element.innerText;
    document.getElementById('result').value += val;

    //console.log(btnValue)
    return val
}

function clearBtn(){
    //console.log("button clicked")
    document.getElementById('result').value = '';
}