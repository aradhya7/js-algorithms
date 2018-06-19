function permute(a, choosen){
	if(a.length === 0){
	  console.log(choosen);
	}else{
	   for(let i=0;i<a.length;i++){
	      let c = a[i];
	      choosen += c;
	      a = a.replace(a[i],'');

	      permute(a, choosen);
          
	      a = a.substr(0,i)+c+a.substr(i,a.length);
	      choosen = choosen.slice(0,choosen.length-1);
	   }
	}
}

var a = 'kar';
permute(a,'');