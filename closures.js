//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var callJake = callFriend();

callJake('415-215-9248');



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  function makeCounter() {
    var counter = 0;
    return function() {
      return counter += 1;
    }
  }

  var count = makeCounter();

  /*
  var count = function() {
    return counter +=1;
  }
  */
  
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named 
  codeFriend that accepts the first function as it's first parameter. The second function should return 
  a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes 
  the first, original function that was passed in, but will only ever do so once (returns null after 
  first invocation).
*/

function codeLove() {
  return 'I love code';
}


function codeFriend(func) {
  
  var alreadyRan = false;

  return function() {
    if (alreadyRan) {
      return null;
    } else {
      alreadyRan = true;
      return func();
    }
  }
}


var codeEcho = codeFriend(codeLove);
/*
---ASSIGNS RETURNED ANON FUNCTION TO codeEcho VAR--
var codeEcho = function() {
  if (alreadyRan) {
    return null;
  } else {
    alreadyRan = false;
    return func();
  }
}
*/


//Next Problem

/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's 
  been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(anonFunc, N) {
  var invokeCount = 0;

  return function() {
    if (invokeCount < N) {
      invokeCount += 1;
      return anonFunc();
    } else {
      return 'STOP';
    }
  }
}

var runCounter = fnCounter(function() {
  console.log("anon ran");
}, 5);


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function 
  (without running the code) then below write what you expect to 
  happen when the funciton is invoked. *Hint: setTimeout calls a 
  function or evaluates an expression after a specified number of 
  milliseconds.

    I expect the the code to log i every second for five seconds then stop running. 
    e.g. 1 (wait one second), 2 (wait one second), etc.


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

  Wrong


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

var counter = function() {
  
  for (var i = 1; i <= 5; i++) {
    (function(){
      var j=i; //this is the important part: without reassigning i, referencing scope of for loop, 
      setTimeout(function timer(){
        console.log(j);
      }, j*1000);
    })()
  }
}

counter();

//Next Problem

/*
  Make the following code work
  
  var funcArray = [function() {return: 0}, function]
  
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  var funcArray = [function zero() {return 0}, function one() {return 1}, function two() {return 2}, 
  function three() {return 3}, function four() {return 4}, function five() {return 5}];

  *Hint: Don't let this fool you. Break down what's really happening here.
*/

/*
var funcArray = [function() {return 0}, function() {return 1}, function() {return 2}, 
function() {return 3}, function() {return 4}, function() {return 5}];
*/

var runArray = function() {
  var arr = [];
  // var index = 0;
  for (var i = 0; i <=5; i++) {
    (function() {
      var j = i; // important part. need to reassign to snapshot value of i at each iteration of for loop & add to array functions
      arr.push(function() {return j});
    })();
  };
  return arr;
}

var funcArray = runArray();



