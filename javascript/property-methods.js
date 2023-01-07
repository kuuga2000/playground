const person = {
    name: (name) => {
        return name;
    },

    additional: () => {
        return 'sdf';
    },

    for: () => {
        for (let i = 1; i <= 10; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    },

    while: () => {
        let x = 20;
        while (x < 30) {
            console.log(x);
            x++;
        }
    },

    doWhile: () => {
        let z = 100;
        do {
            console.log(z);
            z++;
        } while (z <= 10);
    }
}

console.log(person.doWhile());