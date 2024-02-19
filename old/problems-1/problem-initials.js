function initials(name) {
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const secondInitial = nameParts[1].charAt(0).toUpperCase();
    return `${firstInitial}.${secondInitial}`;
}
console.log(initials('Sam Harris'));    
console.log(initials('patrick feeney')); 