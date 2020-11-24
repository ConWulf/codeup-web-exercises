(function () {
    "use strict";

    /*   Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.*/


   //  const lastCommit = (username, repo) => {
   // return fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {headers: {'Authorization': githubKey}})
   //          .then(result => result.json())
   //          .then(data => {
   //              console.log(new Date(data[0].commit.author.date).getTime())
   //          })
   //          .catch(console.log)
   //  }
   //
   //  lastCommit('ConWulf', "codeup-web-exercises")

    const lastPush = (username) =>
        fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': githubKey}})
            .then(result => result.json())
            .then(data => data.filter(event => event.type === "PushEvent"))
            // .then(data => console.log(data.reduce((timeAcc, {created_at}) =>
            //         new Date(created_at).getTime() > timeAcc ? new Date(created_at)
            //         .toLocaleString(): new Date(timeAcc).toLocaleString()
            // , 0)))
            .then(data => fetch(`${data[0].repo.url}/commits`))
            .then(result => result.json())
            .then(data => data.reduce((timeAcc, {commit: {author: {date}}}) =>
                new Date(date).getTime() > timeAcc ? new Date(date).toLocaleString(): new Date(timeAcc).toLocaleString(), 0))

    lastPush("ConWulf")
        .then(console.log)


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