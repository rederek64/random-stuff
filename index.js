// Modules

const fs = require('fs');
const ms = require('ms');

// Variables

const code = '6969';

const beginning = new Date();

let codes = [];

this.lastcode = undefined;

// Functions

const genCode = function () {

    let lastcode = Math.floor ( Math.random () * '9'.repeat ( code.length ) );

    if ( codes.includes ( lastcode ) ) {

        return genCode();

    } else {

        codes.push ( lastcode );
        return lastcode;

    };

};

// Main code

while ( true ) {

    this.lastcode = genCode();

    if ( code == this.lastcode ) {

        console.log ( '✔ | Digit code found: ' + this.lastcode );

        const totaltime = new Date() - beginning;

        console.log ( `● Digit code cracking process took: ${ms(totaltime, { long: true })} ( ${totaltime}ms )`);

        fs.writeFileSync (__dirname + '/logs.txt', fs.readFileSync (__dirname + '/logs.txt') + `

            APP RUN LOG 
            DATE: ${new Date().getFullYear()+'/'+new Date().getMonth()+'/'+new Date().getDay()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()}
            CODE: ${code}
            TIME: ${ms(totaltime, { long: true })} ( ${totaltime}ms )

        `.replaceAll('            ', ''));

        process.exit();

    } else {

        if (this.lastcode !== undefined) console.log ( '✘ | Generated digit code: ' + this.lastcode );
        
    };

};