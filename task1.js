let input = 'это предложение из заглавных букв каждого слова';
let newInput = input.split(' ');
let transformation = newInput.map(item => item.charAt(0).toLocaleUpperCase() + item.slice(1));
let output = transformation.join(' ')

console.log(output);
