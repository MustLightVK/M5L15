let myStr = 'Я так сильно люблю программировать';
let myStrToArray = myStr.split(' ');
let length = myStrToArray.map(item => item.length);

console.log(length);