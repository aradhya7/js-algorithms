var a = [1,2,3];
var len = a.length;
var end = Math.pow(2,len);
var final = {};
for(let i=0;i<end;i++){
    var temp = [];
	let _a = i.toString(2).split('').reverse();
	//console.log(_a);
	for(j=0;j<_a.length;j++){
	   if(_a[j]==="1"){
	      temp.push(a[j]);
	   }
	}
    //final[i] = temp;
    console.log(temp.toString());
}

//console.log(final);