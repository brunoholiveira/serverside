import readline from 'readline-sync';

function percorrerArray() {

    for (let i = 0; i <= 1000; i++) {
        if (i / 11 === 5)
            console.log(i);
    }
}

export default percorrerArray;