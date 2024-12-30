// constants
const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');
const clear = document.getElementById('AC');
const equal = document.getElementById('Equal');


// keyboard
document.addEventListener('keydown', event => {
    const key = event.key;


    if (!isNaN(key)) {
        display.value += key;
    }

    else if (['+', '-', '*', '/'].includes(key)) {
        addToDisplay(key);
    }

    // backspace
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }

    // enter
    else if (key === 'Enter') {
        performCalculations();
    }


    // escape
    else if (key === 'Escape') {
        display.value = ''
    }

});


// clicked
buttons.forEach(button => {
    button.addEventListener('click', () =>
        addToDisplay(button.textContent.trim()));
});

// if escape, clear it
clear.addEventListener('click', () => {
    display.value = '';
});

// if equal sign, evaluate operation
equal.addEventListener('click', () => {
    performCalculations();
});



// Helper functions
function addToDisplay(value) {

    if (['+', '-', '*', '/'].includes(value)) {
        display.value += ` ${value} `;
    }

    else {
        display.value += value;
    }
}

function performCalculations() {
    let expression = display.value;

    try {
        expression = expression.replace(/=/, '');

        const result = eval(expression);

        display.value = result;
    }

    catch {
        display.value = "Wrong Dumbass"
    }
}


console.log(Equal);
console.log('test');
