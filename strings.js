// charAt()	Returns the character at the specified index (position)
// charCodeAt()	Returns the Unicode of the character at the specified index
// 
// endsWith()	Checks whether a string ends with specified string/characters
// startsWith()	Checks whether a string begins with specified characters
//
// includes()	Checks whether a string contains the specified string/characters
// indexOf()	Returns the position of the first found occurrence of a specified value in a string
// lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
//
// match()	Searches a string for a match against a regular expression, and returns the matches
// search()	Searches a string for a specified value, or regular expression, and returns the position of the match
//
// split()	Splits a string into an array of substrings
// slice()	Extracts a part of a string and returns a new string
// substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// substring()	Extracts the characters from a string, between two specified indices
// 
// concat()	Joins two or more strings, and returns a new joined strings
// 
// toString()	Returns the value of a String object
// toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
// toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
// toLowerCase()	Converts a string to lowercase letters
// toUpperCase()	Converts a string to uppercase letters
// 
// repeat()	Returns a new string with a specified number of copies of an existing string
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
// localeCompare()	Compares two strings in the current locale
//
// trim()	Removes whitespace from both ends of a string
// valueOf()	Returns the primitive value of a String object
// fromCharCode()	Converts Unicode values to characters



// sorting, searching, insert, delete, update

var str = "karthik"

//sorting a string

var sort = str.split('').sort().join('');
console.log(sort);

//searching a string for a character
var search = str.search("W3Schools"); // takes regular expression -> returns first position
var includes = str.includes("W3Schools", 0); // takes string and starting index -> returns true/false
var indexOf = str.indexOf("W3Schools", 0); // takes string and starting index of search -> returns first position


//insert a character into a string




//delete a character from a string




//updata a character in a string


//find all occurence of character in a string


//find count of character in a string


//find the counts of all characters in a string


//replace a character

//replace all characters in a string

//reverse a string
