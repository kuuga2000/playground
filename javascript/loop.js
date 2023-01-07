for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let x = 20;
while (x < 30) {
    console.log(x);
    x++;
}

let z = 1;
do {
    console.log(z);
    z++;
}
while (z < 10);

console.log('==============foreach=============');
const cars = ['Toyota', 'Honda', 'Hyundai', 'Suzuki'];
cars.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

console.log('==============map=============');
const persons = [
    {
        id: 1,
        name: 'Undertaker'
    },
    {
        id: 2,
        name: 'Kane'
    }
];

const ids = persons.map((person)=>{
    return person.name;
});

console.log(ids);

for(let x in persons) {
    console.log(x);
    console.log(persons[x].name);
}
