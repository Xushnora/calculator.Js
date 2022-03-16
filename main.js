let output = document.querySelector('#output');
let elRemove = document.querySelector('#remove');
let elOne = document.querySelector('#one');
let elTwo = document.querySelector('#two');
let elThree = document.querySelector('#three');
let elFour = document.querySelector('#four');
let elFive = document.querySelector('#five');
let elSix = document.querySelector('#six');
let elSeven = document.querySelector('#seven');
let elEight = document.querySelector('#eit');
let elNine = document.querySelector('#nine');
let elNol = document.querySelector('#nol');
let elDot = document.querySelector('#dot');
let elKop = document.querySelector('#kop');
let elBol = document.querySelector('#divide');
let elMinus = document.querySelector('#minus');
let elPlus = document.querySelector('#plus');
let elEqu = document.querySelector('#equ');
let elDelete = document.querySelector('#deleteBtn');
// qo'shimcha componentlar
let elSin = document.querySelector('#sin');
let elCos = document.querySelector('#cos');
let elTan = document.querySelector('#tan');
let elFac = document.querySelector('#fac');
let elPi = document.querySelector('#pi');
let elLog = document.querySelector('#log');
let elQavs1 = document.querySelector('#qavs1');
let elQavs2 = document.querySelector('#qavs2');
let elRoot = document.querySelector('#root');
let eleNum = document.querySelector('#eee');
let elFoiz = document.querySelector('#foiz');
let elPow = document.querySelector('#pow');


// modals 
let elArrows = document.querySelector('#arrows');
let elDelModal = document.querySelector('#openModalBtn');
let elModal = document.querySelector('#modalBox');

elDelModal.addEventListener('click', function(){
    elModal.classList.toggle('test');
})

// bosilganda chiqishi

elOne.addEventListener('click', subNumber);
elTwo.addEventListener('click', subNumber);
elThree.addEventListener('click', subNumber);
elFour.addEventListener('click', subNumber);
elFive.addEventListener('click', subNumber);
elSix.addEventListener('click', subNumber);
elSeven.addEventListener('click', subNumber);
elEight.addEventListener('click', subNumber);
elNine.addEventListener('click', subNumber);
elDot.addEventListener('click', subNumber);
elNol.addEventListener('click', subNumber);
elKop.addEventListener('click', subNumber);
elBol.addEventListener('click', subNumber);
elMinus.addEventListener('click', subNumber);
elPlus.addEventListener('click', subNumber);
elFac.addEventListener('click', subNumber);
elPi.addEventListener('click', subNumber);
elLog.addEventListener('click', subNumber);
elQavs1.addEventListener('click', subNumber);
elQavs2.addEventListener('click', subNumber);
eleNum.addEventListener('click', subNumber);
elFoiz.addEventListener('click', subNumber);


elDelete.addEventListener('click', () => {
    let sum = output.innerHTML.split('').pop()

  if (sum == '-' || sum == '+' || sum == '/' || sum == '*' || sum == '%' || sum == '(' || sum == ')') {
    output.innerHTML = " "; 
  } else if (output.innerHTML < 1) {
    output.innerHTML = " ";
  } else if (output.innerHTML > 1) {
    output.innerHTML = (output.innerHTML - sum) / 10;
  } else {
    output.innerHTML = " "; 
  }
});

// remove uchun

elRemove.addEventListener('click', () => {
    output.innerHTML = " ";
});

// ekranga chiqaruvchi funksiya

function subNumber (e) {
    output.innerHTML += e.target.value;
}

elRoot.addEventListener('click', () => {
    output.textContent = Math.sqrt(output.innerHTML);
});

elSin.addEventListener('click', () => {
    output.textContent = Math.sin(output.innerHTML);
});

elCos.addEventListener('click', () => {
    output.textContent = Math.cos(output.innerHTML);
});

elTan.addEventListener('click', () => {
    output.textContent = Math.tan(output.innerHTML);
});

elLog.addEventListener('click', () => {
    output.textContent = Math.log(output.innerHTML);
});

elPow.addEventListener('click', () => {
    output.textContent = Math.pow(output.innerHTML, 2);
});

elFac.addEventListener('click', () => {
    let result = 1;
    for(let i = 1; i <= output.innerHTML; i++){
      result *= i;
    }
    output.innerHTML = result;
});

elEqu.addEventListener('click', natija);

function natija() {
    let result = (eval(output.textContent));
    output.textContent = result;
}


// elFoiz.addEventListener('click', prosent);

// function prosent() {
//     let sum = output.innerHTML;
//     let result = sum % 
// }


