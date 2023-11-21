function convert() {
    var input = parseFloat(document.getElementById("input").value);
    var temp = document.getElementById("Temp").value;
    let result;
    switch (temp) {
        case 'C':
            result = (input * 9 / 5) + 32;
            break;
        case 'K':
            result = input - 273.15;
            break;
        case 'F':
            result = (input - 32) / 1.8;
            break;
        default:
            alert("Enter the Temperature");
            break;
    }

    document.getElementById("result").value = result;
}