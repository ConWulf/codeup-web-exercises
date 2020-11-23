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

    // const languages = users.filter((user) => user.languages.length >= 3);
    // console.log(languages);

    // const emails = users.map(user => user.email);
    // const emails = users.map(({email}) => email);
    // console.log(emails);

    const totalYearsExp = users.reduce((totalYears, currentYear) => (totalYears + currentYear.yearsOfExperience), 0)/users.length
    // console.log(totalYearsExp);


    // const longestEmail = emails.reduce((longest, currentEmailLength) =>  (longest.length > currentEmailLength.length) ? longest: currentEmailLength)

    // const longestEmail2 = users.reduce((longest, currentEmailLength) => (longest.length > currentEmailLength.email.length) ? longest: currentEmailLength.email, "");
    // console.log(longestEmail2);

    // const longestEmail2 = users.reduce((longest, {email}) => {
    //     if (longest.length > email.length) {
    //         return longest;
    //     } else {
    //         return email
    //     }
    // }, "");
    // console.log(longestEmail2);

    // console.log(longestEmail);

    // const mapNames = `Your instructors are: ${users.map(user => user.name)}.`
    //
    // console.log(mapNames);

    const names = users.reduce((names, {name}) => `${names}, ${name}`, "Your instructors are:")
        .replace(",", "")
        .concat('.')
    // const names2 = users.reduce((names, {name}) => `${names} ${name},`, "Your instructors are:").slice(0, -1).concat(".")

    console.log(names);
    // console.log(names2);

const languagesSet = new Set();
const uniqueLanguages = users.reduce((lang, currentLanguage) => {
   currentLanguage.languages.forEach(language => languagesSet.add(language))
    return Array.from(languagesSet)
}, []);

    const uniqueLanguages2 = users.reduce((langSet, currentLanguage) => {
        currentLanguage.languages.forEach(language => langSet.add(language))
        return langSet;
    }, new Set);

    console.log(uniqueLanguages);
    console.log(Array.from(uniqueLanguages2));


})();