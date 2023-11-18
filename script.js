function toCase(text) {
  // write your code here
	let low = text.toLowerCase();
	let upper = text.toUpperCase();
	return low+"-"+upper;
}

// DO not change the code below

const text = prompt("Enter text:");   
alert(toCase(text)); 
