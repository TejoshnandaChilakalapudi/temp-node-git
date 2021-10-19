const { writeFileSync } = require('fs');

for( i = 0; i < 100000; i++){
    writeFileSync('./content/big.txt', `Hello world ${i}\n`, {flag: 'a'})
}
