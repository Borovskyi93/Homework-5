const firstUserNumber = +prompt('Enter first number:');

if (isNaN(firstUserNumber) !== true) {
    const secondUserNumber = +prompt('Enter second number:');
    if (isNaN(secondUserNumber) !== true) {
        const thirdUserNumber = +prompt('Enter third number:');
        if (isNaN(thirdUserNumber) !== true) {
            alert(`${(firstUserNumber + secondUserNumber + thirdUserNumber) / 3}`)
        } else {
            alert('INVALID THIRD INPUT!'); 
        }
    } else {
        alert('INVALID SECOND INPUT!');
    }
} else {
    alert('INVALID FIRST INPUT!');
}