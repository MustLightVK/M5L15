function getLeapYears(start, end) {
    const leapYears = [];

    for (let count = start; count <= end; count++) {
        if ((count % 4 == 0 && count % 100 !== 0) || (count % 400 == 0)) {
            leapYears.push(count);
        }
    }

    return leapYears;
}

console.log(getLeapYears(1900, 2023)); 
