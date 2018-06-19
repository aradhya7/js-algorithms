function quicksort(arr, start, end){
	
   if(start<end){
      var pIndex = partition(arr, start, end);
      quicksort(arr, start, pIndex-1);
      quicksort(arr, pIndex+1, end);
   }

}


function partition(arr, start, end){
	pivot = arr[end];
	pIndex = start;
	for(let i=start; i<end; i++){
	   if(arr[i] <= pivot){
	      let temp = arr[i];
	      arr[i] = arr[pIndex];
	      arr[pIndex] = temp;
	      pIndex += 1;
	   }
	}
	let temp = arr[pIndex];
	arr[pIndex] = arr[end];
	arr[end] = temp;
	return pIndex;
}

var arr = [67,89,22,34,11,54,29,17,101,5,43];
end = arr.length-1;
quicksort(arr,0,end);
console.log(arr);