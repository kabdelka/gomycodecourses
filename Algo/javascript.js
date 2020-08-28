function quantStr(str) {
	let char = 0;
	let word = 0;
	let voyel = 0;
	let i = 0;
	if (str != "") {
		word = 1;
	}
		while (str[i] != ".") {
			i++;
			if (str[i] === " ") {
				word++;
			}

			if (str[i] != " " && str[i] != ".") {
				char++;
			}
			if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i]=== "u" || str[i] === "y")
			{
				voyel++;
			}
	}
let object = {
	NbrChar: char,
	NbrWord: word,
	NbrVoyel: voyel
}
return object;

}



console.log(quantStr("Cette phrase contient 11 mots , 17 voyelle et 47 caractere."));


function permuteN(n) {
	let nstring = n.toString();
	return nstring[2] + nstring[0] + nstring[1];
}

console.log(permuteN(654));


function rental(day,km) {
	let pricePKm = 0;
	let pricePDay = day * 100 + day *0.3 + day *0.18;
	if (km < 100) {
		pricePKm = km * 0.7 + day *0.3 + day *0.18;
		// return pricePKm;
	}
	if (km >= 100 && km < 1000) {
		pricePKm = km * 0.4 + day *0.3 + day* 0.18;
		// return pricePKm;
	}
	if (km >= 1000) {
		pricePKm = km * 0.2 + day * 0.3 + day* 0.18;
		// return pricePKm;
	}

	console.log(pricePKm);
	console.log(pricePDay);
	if (pricePDay > pricePKm) {
		return "The km option is better for you"
	}
	else {
		return "The Day option is better for you"
	}
	console.log(pricePKm);
}



console.log(rental(10,100));

function sum(set1, set2) {
	for(let i = 0; i< set1.length; i++) {
		let found = false;
		for (let k = 0 ; k < set2.length; k++) {
			if (set1[i] != set2[k] && set2[k] != set1[i] ) {
				found = true;
			}
		}
	}
}


console.log(sum([2,4,1,9,3],[3,1,7,9]));