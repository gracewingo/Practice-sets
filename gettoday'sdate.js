var number = 1.99888
console.log(number.toFixed(2));

console.log(Math.floor(Math.random()*60));

var today = new Date();

function todayDate(message) {
	var today = new Date();
	var months = ["Jan", "Feb", "March", "Apr", "May", "June", "July"]
	var date = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	var todayMonth= months[month];
	var message = "Today's date is: " + todayMonth + "/" + date + "/" + year;
	return message
}
console.log(todayDate("date"));