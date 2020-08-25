function sendData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var _class = document.getElementById("class_id").value;
    var section = document.getElementById("section").value;

    var greeting = 'Hello, ' + name + ' <' + email + '> from ' + _class + '-' + section;
    alert(greeting);
}

function showOptions() {
    let result = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
    let class_number = document.getElementById("class_id").value;
    if (class_number == "IX" || class_number == "X") {
        result.push("L");
        result.push("M");
        result.push("N");
        result.push("O");
    }
    if (class_number == "XI" || class_number == "XII") {
        result.push("L");
        result.push("M");
        result.push("N");
        result.push("O");
        result.push("P");
        result.push("Q");
        result.push("R");
        result.push("S");
        result.push("T");
        result.push("U");
        result.push("V");
        result.push("W");
        result.push("X");
    }

    var options = document.getElementById('section');
    for (var i = 0; i < result.length; i++) {
        options.innerHTML += (`<option value=` + result[i] + `> ` + result[i] + `</option>`)
    }

}
console.log(document.getElementById("test_id"))
document.getElementById("test_id").innerHTML = `<option value='foo'>FOO</option>`;
console.log(cx)
showOptions("X");
var options = document.getElementById('section');
for (var i = 0; i < showOptions("X").length; i++) {
    options.innerHTML += `<option value = { showOptions("X")[i] } > { showOptions("X")[i] } </option>`
}