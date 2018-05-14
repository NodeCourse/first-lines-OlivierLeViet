const fs = require('fs');
const file = fs.createWriteStream('./blankfile.txt');
// const d = Date.now();

setInterval(() => {
     // console.log(Date.now());
    file.write(Date.now()+'\n');

}, 1000);