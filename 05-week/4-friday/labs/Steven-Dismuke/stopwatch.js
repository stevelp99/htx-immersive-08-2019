/*Stopwatch
Create a simple stopwatch app that starts the timer and shows the stopped time.

Start the stopwatch with a promise
End the stopwatch on a random time between 1-10 seconds
When the stopwatch stops, display the time it took
*/

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve(Math.floor(Math.random() * 10));
    },3000);
  });
  function startTimer(){
    promise1.then(result => console.log(result,"seconds"));
  }
