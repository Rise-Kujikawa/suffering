const calculateButton = document.querySelector('button');
    calculateButton.addEventListener('click', calculateSum);
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
        const total = num1 + num2;
        document.querySelector('.total').textContent = `Total: ${total}`;
}