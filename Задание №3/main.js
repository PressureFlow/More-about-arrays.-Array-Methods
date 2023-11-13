let programmers = [
    {name: `Иван`, experience: 4 },
    {name: `Дмитрий`, experience: 2 },
    {name: `Екатерина`, experience: 3 },
    {name: `Станислав`, experience: 1 },
    {name: `Никита`, experience: 5 },
    {name: `Артем`, experience: 2 },
    {name: `Виктор`, experience: 2 },
];


let newProgrammers = programmers.filter(checkExperience);

function checkExperience(programmer){
    if (programmer.experience >=3){
        return programmer;
    }
}

console.log(newProgrammers);




