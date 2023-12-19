function firstNonRepeatedChar(str) {
 // Write your code here
	const nonRepeatedChar = new Map();
	for(const char of str){
		nonRepeatedChar.set(char, (nonRepeatedChar.get(char) || 0) + 1);
	}

	for (const char of str){
		if(nonRepeatedChar.get(char) === 1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)) 
