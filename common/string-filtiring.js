// const string = "Привет! Кака дела?";

// const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и",]; //массив из данных

// const getVowels = stringToFilter => {
//     let extractedVowels = ""; //переменная для хранения отфильтрованных символов

//     for (let i = 0; i < stringToFilter.length; i++) {
//         const currentLetter = stringToFilter[i].toLowerCase();

//         if (vowels.includes(currentLetter)) {
//             extractedVowels += currentLetter;
//         }
//     }
//     return extractedVowels;
// }
// console.log(getVowels(string));

//////// ВЫВОД ОПРЕДЕЛЕННЫХ БУКВ==============

// const string = "Привет! Кака дела?";

// let extractedWowels = "";

// for (let i = 0; i < string.length; i++) {

//     if (string[i].toLowerCase() == "е") {
//         extractedWowels = extractedWowels + string[i];
//     }
// }

// console.log(extractedWowels);

//////// ВЫВОД ОПРЕДЕЛЕННЫХ БУКВ===============

//////// ВЫВОД МАССИВА==============

// const string = "Привет! Кака дела?";

// let extractedWowels = "";

// for (let i = 0; i < string.length; i++) {

//     const mas = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и",];

//     if (mas.includes(string[i].toLowerCase())) {
//         extractedWowels = extractedWowels + string[i];
//     }
// }

// console.log(extractedWowels);

//////// ВЫВОД МАССИВА===============


const string = "Привет! Кака дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и",];

const getVowels = stringToFilter => {

    let extractedWowels = "";

    for (let i = 0; i < string.length; i++) {
       
        if (vowels.includes(string[i].toLowerCase())) {
            extractedWowels = extractedWowels + string[i].toLowerCase();
        }
    }
    return extractedWowels;
}

console.log(getVowels(string));