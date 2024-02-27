function printNum(element) {
    var val = element.innerText;
    document.getElementById('result').value += val;

    //console.log(btnValue)
    return val
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearBtn(){
    //console.log("button clicked")
    document.getElementById('result').value = '';
}