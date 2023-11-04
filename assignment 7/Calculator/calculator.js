$(document).ready(function () {
    
    function displayUsername() {
        const params = new URLSearchParams(window.location.search);
        $('#username-display').text(params.get('username'));
    }

    // Validation for number input fields
    function validateInput(input) {
        const value = $(input).val();
        const errorElement = $(`#error-${$(input).attr('id')}`);
        errorElement.text('');

        if (!value) {
            errorElement.text('Field cannot be empty');
            return false;
        } else if (isNaN(value)) {
            errorElement.text('Input must be a number');
            return false;
        } else if (!isFinite(value)) {
            errorElement.text('Value must not be infinite');
            return false;
        }
        return true;
    }

    // Validate both number input fields
    $('#number1, #number2').on('input', function () {
        validateInput(this);
    });

    // Perform calculation
    $('.operation-button').click(function () {
        const operation = $(this).data('operation');
        const num1 = parseFloat($('#number1').val());
        const num2 = parseFloat($('#number2').val());
        
        // Validate before calculation
        const isValidNum1 = validateInput($('#number1'));
        const isValidNum2 = validateInput($('#number2'));

        if (!isValidNum1 || !isValidNum2) {
            return; // Stop calculation if validation fails
        }
        
        const result = calculate(num1, num2, operation);
        $('#result').val(result);
    });

    // Single Arrow Function for calculations
    const calculate = (num1, num2, operation) => {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    };

    // Initialize
    displayUsername();
});