if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
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
        
    },

    insert : function(arr, item, index) {
    	arr.splice(index, 0, item);
    	return arr;
    },

    count : function(arr, item) {
    	var counter = 0;
    	for (var i = 0; i <=arr.length - 1; i++) {
    		if(arr[i] === item)
    			counter++;
    	};
    	return counter;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
    	return arr.map(function(x){return x*x;})
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
