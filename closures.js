
function andISayHello(Hello) {
		console.log(Hello);
}

function youSayGoodbye(Bye) {
	console.log(Bye);

	function andISayHello(Hello) {
		console.log(Hello);
	}
	return andISayHello;
}

youSayGoodbye("Hey there!")

