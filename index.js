const inputA = document.querySelector('.numberA');
const inputB = document.querySelector('.numberB');
const operation = document.querySelector('.operation');
const result = document.querySelector('.result');
const output = document.querySelector('.output');

operation.addEventListener('change', function() {
    if (operation.value === 'sqrt') {
        inputB.disabled = true;
    } else {
        inputB.disabled = false;
    }
});

result.addEventListener('click', function()
{
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const selected = operation.value;

    const result = calculate(a, b, selected);

    console.log(result);
});