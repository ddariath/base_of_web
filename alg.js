function verify() {
    elementA = document.getElementById("a");
    let a = parseInt(elementA.value);
    var result;

    if (a < 10) {
        result = Math.pow(a, 4);
    } else if (a > 61) {
        result = a;
    } else {
        result = a - Math.sin(Math.pow(a, 2));
    }

    console.log(result)
    document.getElementsByName('result')[0].value = result;
    return result;
}

function send() {
    let textCondition = document.getElementsByTagName('p')[0].innerText
    document.getElementsByName('formulation')[0].value = textCondition;
    document.getElementById("UserEnter").submit();
    }

//const elementA = document.getElementById("a");
//elementA.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
