function merge(a,b){
	let lena = a.length,
	    lenb = b.length,
        i = 0,
        j = 0,
        k = 0,
        arr = [];
	    while(i<lena && j<lenb){
	      if(a[i]<=b[j]){
             arr[k] = a[i];
             i++;
	      }else{
	         arr[k] = b[j];
	         j++;
	      }
          k++;
	    }
	 if(i<lena){
	   arr = arr.concat(a.slice(i,lena))
	 }else if(j<lenb){
	   arr = arr.concat(b.slice(j,lenb))
	 }
	 return arr;
}

function mergeSort(arr){
	let len = arr.length;
	if(len < 2){ 
	 return arr; 
	}
	let half = Math.floor(len/2);
	let left = arr.slice(0,half);
	let right = arr.slice(half,len);
    return merge(mergeSort(left), mergeSort(right));
}

var arr = [5,2,4,3];
console.log(mergeSort(arr));


// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]