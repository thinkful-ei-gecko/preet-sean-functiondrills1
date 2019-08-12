function getYearOfBirth(age){
    if (age < 0){
        throw new Error ("Age can not be negative");
    }
    return 2019 - age;
}

function createGreeting(name, age){
    if (name === undefined || age === undefined){
        throw new Error ('Arguments not valid')}


    if (typeof age !== 'number'){
        throw new Error('Age must be a number');}
        
        
    const yearOfBirth = getYearOfBirth(age);  
    return `Hi, my is ${name} and I'm ${age} years old and I was born in ${yearOfBirth}`;
}

try {
    const greeting1 = createGreeting('Preet', 31);
    console.log(greeting1);
}

catch (error){
    console.error(error);
}