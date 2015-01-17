if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {

    var coutOfItem = function(arr, item){
        var counter = 0;
        for (var i = 0; i <=arr.length - 1; i++) {
            if(arr[i] === item)
                counter++;
        };
        return counter;
    }

  return {
    indexOf : function(arr, item) {
    	return arr.indexOf(item);
    },

    sum : function(arr) {
    	var sum = 0;
    	for (var i = 0; i < arr.length; i++) {
    		sum+=arr[i];
    	};
    	return sum;
    },

    remove : function(arr, item) {
    	var newArr = [];
    	var j = 0;
    	for (var i = 0; i < arr.length; i++) {    		
    		if(arr[i] !== item){
    			newArr[j] = arr[i];
    			j++;
    		}    		
    	};
    	return newArr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = arr.length - 1; i >= 0; i--) {
             if(arr[i] === item) 
                arr.splice(i, 1);
        }    
        return arr;
    },

    append : function(arr, item) {
    	arr.push(item);
    	return arr;
    },

    truncate : function(arr) {
    	arr.pop();
    	return arr;
    },

    prepend : function(arr, item) {
    	arr.unshift(item);
    	return arr;
    },

    curtail : function(arr) {
    	arr.shift();
    	return arr;
    },

    concat : function(arr1, arr2) {       
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
    	arr.splice(index, 0, item);
    	return arr;
    },

    count : function(arr, item) {    	
    	return coutOfItem(arr, item);
    },

    duplicates : function(arr) {
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            if(coutOfItem(arr, arr[i]) >= 2 && result.indexOf(arr[i]) === -1)
                result.push(arr[i]);
        }
        return result;
    },

    square : function(arr) {
    	return arr.map(function(x){return x*x;})
    },

    findAllOccurrences : function(arr, target) {
        var result = [], index = -1;
        while(true) {
            index = arr.indexOf(target, ++index);
            if(index === -1) break;
            result.push(index);
        }
        return result;        
    }
  };
});
