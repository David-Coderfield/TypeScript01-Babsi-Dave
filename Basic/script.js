var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alternate way of defining type:
// const digitsB : Array<number> = [1,2,3,4,5,6,7,8,9,10];
//using normal for loop
function multi1() {
    var html = "";
    for (var i = 0; i < digits.length; i++) {
        html += "<tr>";
        for (var j = 0; j < digits.length; j++) {
            html += "<td>" + digits[i] * digits[j] + "</td>";
        }
        html += "</tr>";
    }
    document.getElementById('demo').innerHTML = html;
}
//using for of (shorter)
function multi2() {
    var html = "";
    for (var _i = 0, digits_1 = digits; _i < digits_1.length; _i++) {
        var i = digits_1[_i];
        debugger;
        html += "<tr>";
        for (var _a = 0, digits_2 = digits; _a < digits_2.length; _a++) {
            var j = digits_2[_a];
            html += "<td>" + i * j + "</td>";
            debugger;
        }
        html += "</tr>";
    }
    document.getElementById('demo').innerHTML = html;
}
