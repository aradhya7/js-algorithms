var str = "hello how do you do do you need hellohow much"
var a = str.split(' ');
var count = {};

for(let i=0;i<a.length;i++){
   count[a[i]] = 0;
   for(let j=0;j<a.length;j++){
   	  if(a[i]==a[j]){
   	  	  count[a[i]]++;
   	  }
   }
}
console.log(count);
console.log(Object.keys(count).sort(function(a,b){return count[a]-count[b]}));