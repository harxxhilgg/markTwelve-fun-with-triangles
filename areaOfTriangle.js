const baseLength = document.querySelector('#baseLength');
const heightLength = document.querySelector('#heightLength');
const areaOfTriangleBtn = document.querySelector('#areaOfTriangle-btn'); 

areaOfTriangleBtn.addEventListener('click', () => {
    findArea();
})

function findArea() {
    if ( baseLength.value.length === 0 || heightLength.value.length === 0 ) {
        outputBoxForAreaOfTriangle.innerText = 'please input all of the fields! 😡';
    }
    else if ( baseLength.value >= 0 && heightLength.value >= 0 ) {
        var area = 0.5 * (baseLength.value * heightLength.value);
        var a_area = area.toFixed(2);
        outputBoxForAreaOfTriangle.innerText = 'Area of Triangle is: ' + a_area + ' 😉';
    }
    else {
        outputBoxForAreaOfTriangle.innerText = "All input's should be positive integer and greater than zero(0)! 🥴";
    }
}