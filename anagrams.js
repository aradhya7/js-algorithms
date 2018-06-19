var x = "litsten";
var y = "siltent";

if(x.length !== y.length){
	console.log('not anagram');
}else{
var a = x.split('').sort().join('');
var b = y.split('').sort().join('');
if (a === b) { console.log('angram') } else { console.log('not anagram') };
}