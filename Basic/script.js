var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const digitsB : Array<number> = [1,2,3,4,5,6,7,8,9,10];
(function () {
    var html = "";
    for (var i = 0; i < digits.length; i++) {
        html += "<tr>";
        for (var j = 0; j < digits.length; j++) {
            html += "<td>" + digits[i] * digits[j] + "</td>";
        }
        html += "</tr>";
    }
    document.getElementById('demo').innerHTML = html;
})();
