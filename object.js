const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan){
        let str = '';

        for (let key of plan['skills']['languages']){
            str += `${[key]} `
        }

        console.log(str);
        return `Мне ${plan.age} и я владею языками: ${str.toUpperCase()}`
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let str = '';

   if (Object.keys(plan['skills']['programmingLangs']).length != 0){
        for (let key in plan['skills']['programmingLangs']){
            str += `Язык ${[key]} изучен на ${plan['skills']['programmingLangs'][key]} \n`
        }
            return str;
   } else return str;
}
