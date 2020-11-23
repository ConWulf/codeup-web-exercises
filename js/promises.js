(function () {
   "use strict";




/*    Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.*/

  // const wait = ms => {
  //     return new Promise(resolve => {
  //             setTimeout(() => {
  //                 //if no param, undefined if attempt to get some data;
  //                 resolve(ms);
  //             }, ms)
  //             })
  //  }

  //   wait(1000).then(() => console.log('You\'ll see this after 1 second'));
  //   wait(1000).then((data) => console.log(`You'll see this after ${data/1000} second`));
  //   wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
  //   wait(4000).then(data => console.log(`You'll see this after ${data} milliseconds`));
  //   wait(2000).then(data => console.log(`You'll see this after ${data/1000} seconds`));
  //   wait(5000).then(data => console.log(`You'll see this after ${data/1000} seconds`));

})()