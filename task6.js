const namesArray = ["Alice", "Bob", "alice", "Eve", "BOB", "Charlie", "eve", "David", "charlie"];

function removeDuplicateNames(names) {
    let lowerCaseNames = names.map(item => item.toLowerCase()); // Преобразовал в нижний регистр

    let uniqueLowerCaseNames = lowerCaseNames.filter((item, index) => lowerCaseNames.indexOf(item, 0) == index); // Отфильтровал и записал первые встречающиеся имена в новый массив уникальных имен

    let originalIndexes = uniqueLowerCaseNames.map(item => lowerCaseNames.indexOf(item)); // Для каждого элемента в массиве уникальных имен находим индекс в массиве lowerCaseNames. Сохраняем эти индексы.

    let originalNames = originalIndexes.map(index => names[index]); // Беру сохраненные индексы уникальных имен и по этим индексам нахожу имена в изначальном массиве. Эти имена записываю в новый массив.

    return originalNames;
}

console.log(removeDuplicateNames(namesArray));
