const digits : number[] = [1,2,3,4,5,6,7,8,9,10];
// alternate way of defining type:
// const digitsB : Array<number> = [1,2,3,4,5,6,7,8,9,10];

//using normal for loop
function multi1(){
	var html : string = "";
	for (let i = 0; i < digits.length; i++) {
		html+="<tr>"
		for (let j = 0; j < digits.length; j++) {
			html+=`<td>${digits[i]*digits[j]}</td>`;
		}
		html+="</tr>"
	}
	document.getElementById('demo').innerHTML = html;
}

//using for of (shorter)
function multi2(){
	var html : string = "";
	for(let i of digits){
		html+="<tr>";
		for(let j of digits) {
			html+=`<td>${i*j}</td>`;
		}
		html+="</tr>";
	}
	document.getElementById('demo').innerHTML = html;
}