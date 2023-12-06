let textInput = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit erat eu dolor mattis vehicula. Quisque tempor vulputate nunc, vel euismod mi rutrum ac. Morbi eget viverra turpis, ut ullamcorper velit. Curabitur rhoncus eu eros quis vulputate. In lobortis, nibh quis aliquet rhoncus, lectus mi auctor libero, nec interdum augue nibh vitae urna. Vestibulum vel sollicitudin nibh. Maecenas venenatis malesuada scelerisque. Cras dapibus leo ut quam aliquam congue.';

function countingCharacters (text) {
    if (text.length > 47) {
        return text.slice(0,47) + '...';
    } else {
        return text;
    }
}

console.log (countingCharacters(textInput));