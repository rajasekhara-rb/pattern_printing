// start triangle pattern printing with stars

let print = "*";

for (i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == j) {
            console.log(`${print}`);
            print += " ";
            print += "*";
        }

    }
}







