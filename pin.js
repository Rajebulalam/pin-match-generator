// Generate Pin Button

document.getElementById('generate-pin').addEventListener('click', function getPin(){

    const inputPin = document.getElementById('pin-input');
    const inputPinRound =Math.round(Math.random() * 10000);
    const inputPinString = inputPinRound + '';
    if(inputPinString.length == 4){
        inputPin.value = inputPinString;
    }else{
        return getPin();
    }

})


// Display Match pin

document.getElementById('key-pad').addEventListener('click', function(event){

    const numbers = event.target.innerText;
    const keyDisplay = document.getElementById('key-display');
    const previousInput = keyDisplay.value;
    const display = previousInput + numbers;
    if(isNaN(numbers)){
        if(numbers == 'C'){
            keyDisplay.value = '';
        }else if(numbers == '<'){
            keyDisplay.value = '';
        }
    }else{
        keyDisplay.value = display;
    }


})


// Submit Button

document.getElementById('submit-pin').addEventListener('click', function(){

    // Generate Input Value
    const generateInput = document.getElementById('key-display').value;
    const generateInputValue = generateInput;

    // Type pad Pin
    const typePin = document.getElementById('pin-input').value;
    const typePinValue = typePin;

    // Notify Success Message
    const notifySuccess = document.getElementById('notify-success');

    // Notify Fail Message
    const notifyFail = document.getElementById('notify-fail');

    if(generateInputValue == typePinValue){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }else{
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }

})
