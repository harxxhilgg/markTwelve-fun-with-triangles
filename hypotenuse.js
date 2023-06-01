const firstLength = document.querySelector('#firstLength');
const secondLenth = document.querySelector('#secondLength');
const HypotenuseBtn = document.querySelector('#find-hypotenuse-btn'); 

HypotenuseBtn.addEventListener('click', () => {
    calculateHypotenuse();
})

function calculateHypotenuse() {
    if ( firstLength.value.length === 0 || secondLenth.value.length === 0 ) {
        outputBoxForHypotenuse.innerText = "please input all of the fields! 😡"
    }
    else if ( firstLength.value >= 0 && secondLenth.value >= 0 ) {
        var hypotenuse = Math.sqrt(( firstLength.value * firstLength.value ) + ( secondLenth.value * secondLenth.value ));
        var h_hypotenuse = hypotenuse.toFixed(2);
    
        outputBoxForHypotenuse.innerText = 'Hypotenuse length is: ' + h_hypotenuse + ' 😉';
    }
    else {
        outputBoxForHypotenuse.innerText = "All input's should be positive integer and greater than zero(0)! 🥴"
    }
}
