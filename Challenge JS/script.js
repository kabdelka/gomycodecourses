// Convert Minutes to secondes 10pt 

function minuteConvert (minutes) {
	let secondes = minutes*60;
	return secondes;
}

console.log(minuteConvert(1))   /// 60s
console.log(minuteConvert(3))  ///180s



// football points 10PTS

function footballPts (wins,draws, defeats,) {
	let result = wins * 3 + draws * 1 + defeats* 0;
	return result
}

console.log(footballPts(1,2,1))   /// 5pts

console.log(footballPts(0,0,4))  ///0 pts

// hours and minutes to secondes  15pt

function convertHourMin (hours, minutes) {
	let result = minutes * 60 + hours *3600
	return result;
}

console.log(convertHourMin(1,30))   /// 5400s

console.log(convertHourMin(0,6))  ///360s

// Equality check 15pt

function equalityCheck (a,b) {
	if (a === b && a.typeOf === b.typeOf) {
		return true;
	}
	else return false;
}

console.log(equalityCheck(6,6));
console.log(equalityCheck(4,5));
console.log(equalityCheck("f", 6));

// Compare Strings by count of characters 10PTS

function compareStrings(a,b) {
	if (a.length > b.length) {
		return "The first string is taller"
	}
	else 
		return "The seconde string is taller"
}


console.log(compareStrings("this is a test", "test"));
console.log(compareStrings("test", "this is a"));

// Concatenate first and last name 15pts 

function fullName (firstName,lastName) {
	return `${firstName} ${lastName}`;
}

console.log(fullName("Mr", "Robot"));

// Convert a number to a month:   10PTS

function monthName (n) {
	switch (n) {
		case 1: 
		return "Janvier";
		break;
		case 2:
		return "Fevrier";
		break;
		case 3:
		return "Mars";
		break;
		case 4:
		return "Avril";
		break;
		case 5: 
		return "Mai";
		break;
		case 6:
		return "Juin";
		break;
		case 7:
		return "Juillet";
		break;
		case 8:
		return "Aout";
		break;
		case 9:
		return "Septembre";
		break;
		case 10:
		return "Octobre";
		break;
		case 11:
		return "Novembre";
		break;
		case 12:
		return "Decembre";
		break;

	}
}

console.log(monthName(1));
console.log(monthName(2));
console.log(monthName(3));
console.log(monthName(4));
console.log(monthName(5));
console.log(monthName(6));
console.log(monthName(7));
console.log(monthName(8));
console.log(monthName(9));
console.log(monthName(10));
console.log(monthName(11));
console.log(monthName(12));

// Equality of three values:   5PTS

function equal (a,b,c) {
	if (a === b && b === c) {
		return true;
	}
	else 
		return false;
}


console.log(equal(1,2,0));
console.log(equal(1,1,1));



// Return the Area of a rectangle:   5PTS

function area (height, width) {
	return height * width;
}

console.log(area(5,2));
console.log(area(7,5));

 // The next number:   5PTS

 function nextInt (a) {
 	return a + 1;
 }

 console.log(nextInt(3));

 // Between 100 AND 200:   5PTS 

 function between (a) {
 	if (100<a && 200>a) {
 		return true;
 	}
 	else 
 		return false;
 }

 console.log(between(140));
 console.log(between(230));


// // Unique Chars count:   15PTS

// function uniqueCharsCount (str) {
// 	let array = str.split("");
// 	let nchar = 0;
// 	for (i = 0; i < array.length; i++) {
// 		if (array[i] != array[i+1]) {
// 			nchar++
// 		}
// 		return nchar;
// 	}
	
// }

// console.log(uniqueCharsCount("aaas"));
// console.log(uniqueCharsCount("aaa"));


// test filter 

const arrayTest = [10,11,9,5,8,12,15,7,20];
const reslutTest = arrayTest.filter(num => num > 10);
console.log(reslutTest);


// Is in range : isInRange(4,{min:2,max,10}):   15PTS

function isInRange(a,object) {
	if (a>object.min && a< object.max) {
		return true;
	} 
	else 
		return false;
}

console.log(isInRange(10, {min:3,max:20}))   /// true

console.log(isInRange(5, {min:12,max:20}))   /// false

// Find the index of an item in an array 

// function index(array, value) {
// 	let legnth = array.length;
// 	let i = 0;

// }

// test sort 

const persons = [
{
	name: "Mohamed",
	age:24
},
{
	name: "khaled",
	age:20
},
{
	name: "Younes",
	age:40
},
{
	name: "Lotfi",
	age:30
},

]

persons.sort(function (a,b) {
	return a.age - b.age;
})

console.log(persons);




// The karaaca's encryption algorithm: 25PTS

function encrypt (str) {
	 const reversed = str.split("").reverse().join("");
	 var replaced1 = reversed.replace(/a/g,"0");
	 var replaced2 = replaced1.replace(/e/g,"1");
	 var replaced3 = replaced2.replace(/i/g,"2");
	 var replaced4 = replaced3.replace(/o/g,"2");
	 var replacedFinal = replaced4.replace("u","3");
	 console.log(`${replacedFinal}aca`);

}


console.log(encrypt("banana")); //0n0n0baca"
console.log(encrypt("apple")); //  "1lpp0aca"


// Rearrange the sentence: 30PTS

function rearrange (str) {
	const arrayStr = str.split(" ");
	// console.log(arrayStr);
	var n = str.match(/\d/g);
	// console.log(n);
	noNStr = str.replace(/\d/g, "");
	// console.log(noNStr);
	const arrayNoStr = noNStr.split(" ");
	// console.log(arrayNoStr);
	let arrangedArray = [];
	let length = arrayNoStr.length;
	// console.log(length);
	// let newN = n.sort();
	console.log(n);
	for (var ind = 0; ind <= arrayNoStr.length-1; ind++){
	//arrangedArray.splice(ind,0,`${arrayNoStr[`${n[(ind)]-1}`]}`);
	// console.log(n[ind])
	// console.log(arrayNoStr[ind])
	arrangedArray[parseInt(n[ind]) -1]= arrayNoStr[ind];
	// arrangedArray[2]= 4;

	// console.log(arrangedArray);
	const arrangedStr = arrangedArray.join(" ");
	console.log(arrangedStr);

}


}

console.log(rearrange("i2s thi1s tes4t a3"))
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"))


// Positive count negative sum  

function posCountNegSum (arrayc) {
	let count = 0;
	for (let int = 0; int < arrayc.length -1; int++) {
		if (arrayc[int] > 0) {
			count++
		}
		 else if (arrayc[int] < 0)
		{
			return arrayc[int] + arrayc[int +1];
		}
	}
	return count;
}
console.log(posCountNegSum([2,-2,4,-1]))  // {positiveCount : 2 , negativeSum : -3}

