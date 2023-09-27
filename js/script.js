const firstUserNumber = +prompt('Enter first number:');

if (firstUserNumber) {
    const secondUserNumber = +prompt('Enter second number:');
    if (secondUserNumber) {
        const thirdUserNumber = +prompt('Enter third number:');
        if (thirdUserNumber) {
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