var i = 0; 
do {
	console.log(i); 
	i++;
} 
while (i < 4);

var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;

do {
	if (animals[i] === "pig") {
		console.log("Found it! at " + i);
		break;
	} else {
  		i++
	} 
} while (i < animals.length);

var animals = ["horse", "ox", "cow", "pig", "duck", "animal" ,"bird", "cat", "tiger", "mammoth", "elephant",
"deer", "turtle", "goat"];

for (i = 0; i < animals.length; i++) {
	if (animals[i] === "deer") {
		console.log("Found it at list item: " + i);
		break;
	}
}






