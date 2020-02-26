function arrayToList(arr) {
    if (arr.length === 1) {
    	return {value: arr[0], rest: null};
    }
  
  	return {value: arr[0], rest: arrayToList(arr.slice(1))};
}

function listToArray(list) {
 	const res = [];
  	for (let node = list; node; node = node.rest) {
    	res.push(node.value); 
    }
  
  	return res;
}

function prepend(value, rest) {
	return {value, rest};
}


function nth(list, n) {
	for (let node = list, i = 0; node; node=node.rest, i++) {
     	if (i === n) return node.value; 
    }
}

function recursiveNth(list, n) {
 	if (n === 0) {
    	return list.value; 
    }
  
  	return recursiveNth(list.rest, n-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]),1));
// → 20
console.log(recursiveNth(arrayToList([10, 20, 30]),2));
// → 30
