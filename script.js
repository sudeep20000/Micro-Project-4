'use strict';

const btns = document.querySelectorAll('.key');
const out = document.querySelector('.output');
const delBtn = document.querySelector('.del');
const resetBtn = document.querySelector('.reset');
const equalBtn = document.querySelector('.equal');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');
const multBtn = document.querySelector('.mult');
const divBtn = document.querySelector('.div');


let val = '';

function calResult(s) {
   let total = 0;
   s = s.match(/[*\/\+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

   while (s.length) {
      const nv = s.shift();
      if (nv.startsWith('/')) {
         total /= parseFloat(nv.substring(1));
      } else if (nv.startsWith('*')) {
         total *= parseFloat(nv.substring(1));
      } else {
         total += parseFloat(nv);
      }
   }
   return total;
}

const removeLast = function () {
   val = val.slice(0, val.length - 1);
   if (val.length == 0)
      out.textContent = 0;
   else
      out.textContent = val;
}
delBtn.addEventListener('click', removeLast);

const init = function () {
   val = '';
   out.textContent = 0;
}
resetBtn.addEventListener('click', init);

const result = function () {
   let res = calResult(val);
   val = String(res);
   out.textContent = res;
}
equalBtn.addEventListener('click', result);

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
      if (btns[i].textContent != 'DEL' && btns[i].textContent != 'RESET' && btns[i].textContent != '=') {
         if (!val.startsWith(0)) {
            val += btns[i].textContent;
            out.textContent = val;
         }
      }
   });
}
