let text = "Hello, World!"

for (let i = 0; i < text.length; i++) {
	if (text.charAt(i) === "!") {
		console.log("Exclamation point found at character location: "); 
		console.log(text.indexOf("!"))
		console.log(text.charAt(13))
		break;
	}
}

let shakespeare = "\nTo be or not to be";
shakespeare= shakespeare.replace(/be/g, "party");
console.log(shakespeare)
