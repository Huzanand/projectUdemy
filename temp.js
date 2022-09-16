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
    showAgeAndLangs: function(plan) {
        let { age } = plan;
        const result = plan.skills.languages.join(' ');
        const newResult = result.trim();
        return `Мне ${age} и я владею языками: ${newResult.toUpperCase()} `
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const keys = Object.keys(plan.skills.programmingLangs);
    const values =  Object.values(plan.skills.programmingLangs);
    let result = '';
    if (keys.length === 0) {
        return '';
    } else {
        for (let i = 0; i < keys.length; i++) {
            result += `Язык ${keys[i]} изучен на ${values[i]}\n`;
        }
    }
    return result;
}