const arr = ['JavaScript', '-', 'мультипарадигменный', 'язык', 'программирования', 'с', 'динамической', 'типизацией']; 

function TransformationIntoText (words) {
    return words.join(' ');
}

console.log(TransformationIntoText(arr));