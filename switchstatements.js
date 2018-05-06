let ZIP = "60290";
let city; 
switch(ZIP) {
case "10001" :
  city = "New York";
  break;
case "60290" :
  city = "Chicago";
  break;
case "90001" :
  city = "Los Angeles";
  break;
}
console.log("The city is " + city + "."); 

let items = ["Monday", "Tuesday", "Wednesday", "Thurdsay", "Friday"]
let i = 0;

for (i = 0; i < items.length; i++) {  
	console.log(items[i]);
}

let j = 0;
let animals =["horse", "ox", "cow", "pig", "duck"];

while (j < animals.length) {
	if (animals[j] === "ox") {
    	console.log("Found it! at index of " + j + ".") 
   		break;
	}
	j++;
}













