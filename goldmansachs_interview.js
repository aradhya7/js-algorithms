var str = ' {"James","70"},{"Fernando","90"},{"Nick","60"}, {"James","10"}, {"Fernando","120"} ';
var arr = str.split('"');
var len = arr.length;
var Obj = {};
for (let i = 1; i < len; i+=4) {
	if(!Obj.hasOwnProperty(arr[i])){
      Obj[arr[i]] = arr[i + 2];	
	}else if(parseInt(Obj[arr[i]])<parseInt(arr[i+2])){
		Obj[arr[i]] = arr[i+2]
	}
}
for(key in Obj){
	if(Obj.hasOwnProperty(key)){
		console.log(key+': max value =>'+Obj[key]);
	}
}