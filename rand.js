/*Сделайте генератор 10 случайных чисел (по нажатию на кнопку)
 в диапазоне от -10 до 10 и найдите среди них минимальное,
 максимальное и среднее арифметическое, а также сумму и 
 произведение всех этих чисел. 
В этой задаче вам понадобятся массивы и циклы.*/
let button = document.getElementById('button');
button.onclick=ranDomf2;
    let numbs = document.getElementById('numbers');
    let minnumb = document.getElementById('min');
    let maxnumb  = document.getElementById('max');
    let midnumb  = document.getElementById('mid');
    let sum  = document.getElementById('sum');
    let mult  = document.getElementById('mult');
    let arr = [];
    
    
    function ranDomf2 () {
        function ranDomf(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                    } 
for (let i=0; i<10; i++) {
arr.push(ranDomf(-10, 10));}
console.log(arr);
numbs.value=arr;
numbs.innerHTML+=numbs.value;
let summ = arr.reduce((sum, i) => sum + i);
sum.value=summ;
sum.innerHTML+=sum.value;
let multt = arr.reduce((mult, i) => mult * i);   
mult.value=multt;
mult.innerHTML+=mult.value;
let minnumb2=Math.min.apply(null,arr);
minnumb.value=minnumb2;
minnumb.innerHTML+=minnumb.value; 
let maxnumb2=Math.max.apply(null,arr);
maxnumb.value=maxnumb2;
maxnumb.innerHTML+=maxnumb.value;   
let midnumb2 = sum.value / arr.length;
midnumb.value=midnumb2;
midnumb.innerHTML+=midnumb.value;
} 
