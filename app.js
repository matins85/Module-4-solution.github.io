let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

names.forEach(e => {
    if(e.charAt('0').toLowerCase() === 'j') {
        console.log(`Goodbye ${e}`)
    } else if(e.charAt('0').toLowerCase() !== 'j') {
        console.log(`Hello ${e}`)
    }
});

