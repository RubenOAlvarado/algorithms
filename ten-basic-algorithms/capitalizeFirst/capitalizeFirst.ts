function capitalizeFirstLetter(str: string): string {
    // Split the string into words, capitalize the first letter of each word, and join them back together
    // using a space as the separator.
    const words = str.split(' ');
    // Use map to iterate over each word, capitalize the first letter, and join them back together
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

capitalizeFirstLetter('look, it is working!');