var myName = 'hugo';

function createChar() {
    var age = 33;
    console.log('1. my name is ' + myName);
    myName = 'zion';
    console.log('2. my name is ' + myName);

    function configureChar() {
        age = 31;
        var myName = 'cloud';
        console.log('4. my name is ' + myName);
    }
    configureChar();
    console.log('my age is ' + age);
    console.log('5. my name is ' + myName);
}

createChar();

console.log('3. my name is ' + myName);