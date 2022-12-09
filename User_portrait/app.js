const year = +prompt('Enter your year of birth:');
const city = prompt('Enter your city (Kyiv, Washington or London):');
const sport = prompt('Enter your favorite sport (running, swimming, tennis...):');
let result;
let resultSport;

let resultYear = year <= 0 ? 'It is a pity that you did not want to enter your date of birth'
    : 'You are ' + (2022 - year) + ' years old';

if (city === '') {
    result = 'It is a pity that you did not want to enter your  city'
} else if (city === 'Kyiv') {
    result = 'You live in the capital of Ukraine'
} else if (city === 'Washington') {
    result = 'You live in the capital of the USA'
} else if (city === 'London') {
    result = 'You live in the capital of Great Britain'
} else {
    result = 'You live in the city ' + city
}

switch (sport) {
    case '': {
        resultSport = 'It is a pity that you did not want to enter your favorite sport';
    }
        break;
    case 'running': {
        resultSport = 'Cool! Want to become Usain Bolt?';
    }
        break;
    case 'swimming': {
        resultSport = 'Cool! Want to become Michael Phelps?';
    }
        break;
    case 'tennis': {
        resultSport = 'Cool! Want to become Carlos Alcaraz?';
    }
        break;
    default:
        resultSport = 'Cool! Do you want to become a champion?';
        break;
}


alert(`${resultYear}
 ${result}
 ${resultSport}`);

