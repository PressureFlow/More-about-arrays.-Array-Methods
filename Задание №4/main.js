let programmers = [
    {name: `Никита`, money: 5300, position: "Главный разработчик" },
    {name: `Артем`, money: 2100, position: "Старший разработчик" },
    {name: `Виктор`, money: 3500, position: "Старший разработчик" },
    {name: `Екатерина`, money: 1300, position: "Младший разработчик" },
    {name: `Дмитрий`, money: 700, position: "Стажер" },
    {name: `Алексей`, money: 2200, position: "Старший разработчик" },
    {name: `Игорь`, money: 1100, position: "Младший разработчик" },
    {name: `Валерий`, money: 1400, position: "Младший разработчик" },
];

let newProgrammers = programmers.map(checkMoney);

function checkMoney (programmer){
    if (programmer.position ==  "Главный разработчик") {
        programmer.money *=2;
        return programmer;
    }
    else if (programmer.position == "Старший разработчик"){
        programmer.money *= 1.7;
        return programmer;
    }
    else if (programmer.position == "Младший разработчик"){
        programmer.money *= 1.5;
        return programmer;
    }
    else if (programmer.position == "Стажер"){
        programmer.money *= 1.3;
        return programmer;
    }
}
console.log(newProgrammers);