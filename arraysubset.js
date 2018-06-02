var letters = [5,2,6];
var combi = [];
var temp= "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen ; i++){
    temp= "";
    for (var j=0;j<letters.length;j++) {
        let k = Math.pow(2,j);

        if (i & k){ 
        console.log(i+','+k+' true '+letters[j]);
            temp = letters[j] + ',' + temp
        }else{
         console.log(i+','+j+' false');
        }
    }
    if (temp !== "") {
        temp = temp.substring(0,temp.length-1);
        console.log('{'+temp+'}');
        combi.push('{'+temp+'}');
    }
}

//console.log(combi.join("\n"));  