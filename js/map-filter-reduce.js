(function () {
    "use strict";
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let languages = users.filter((user) => user.languages.length >= 3);
    // console.log(languages);

    let emails = users.map(user => user.email);
    // console.log(emails);

    let totalYearsExp = users.reduce((totalYears, currentYear) => (totalYears + currentYear.yearsOfExperience), 0)/users.length
    // console.log(totalYearsExp);


    // let longestEmail = emails.reduce((longest, currentEmailLength) =>  longest.length > currentEmailLength.length ? longest: currentEmailLength)

    // let longestEmail2 = users.reduce((longest, currentEmailLength) => longest.length > currentEmailLength.email.length ? longest: currentEmailLength.email, "");
    // console.log(longestEmail2);

    // console.log(longestEmail);

    // let mapNames = `Your instructors are: ${users.map(user => user.name)}.`
    //
    // console.log(mapNames);

    let names = `${users.reduce((names, currentName) => `${names}, ${currentName.name}`, "Your instructors are:")}.`.replace(",", "")

    console.log(names);

let languagesSet = new Set();
let uniqueLanguages = users.reduce((lang, currentLanguage) => {
   currentLanguage.languages.forEach(language => languagesSet.add(language))
    console.log(lang);
    return Array.from(languagesSet)
}, []);


    console.log(uniqueLanguages);


})();