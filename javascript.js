var myUniq = function(array) {
  var uniques = [];
        
  for (var i = 0; i < array.length; i++) {
    if (uniques.indexOf(array[i]) == -1) {
      uniques.push(array[i]);
          console.log(array[i]);
    }
  }

  return uniques;
}

console.log(myUniq([1,2,3,4,1,1,2,1]));


var twoSum = function(array) {
  var pairs = [];
  var first = 0;
  var last = 0;
  
  for (var i = 0; i < array.length; i++) {
    var first = array[i];
    
    for (var j = i + 1; j < array.length; j++) {
      var last = array[j];
      
      if (first + last === 0)
        pairs.push([i, j]);
    }
  }
  
  return pairs;
}

console.log(twoSum([-1, 0, 2, -2, 1]))