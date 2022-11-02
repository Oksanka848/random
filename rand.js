/*Сделайте генератор 10 случайных чисел (по нажатию на кнопку)
 в диапазоне от -10 до 10 и найдите среди них минимальное,
 максимальное и среднее арифметическое, а также сумму и 
 произведение всех этих чисел. 
В этой задаче вам понадобятся массивы и циклы.*/
let button = document.getElementById('button');
    button.onclick = ranDom;
    let numbs = document.getElementById('numbers');
    let minnumb = document.getElementById('min');
    let maxnumb  = document.getElementById('max');
    let midnumb  = document.getElementById('mid');
    let sum  = document.getElementById('sum');
    let mult  = document.getElementById('mult');
    let numbers = [];
    
    function ranDom () {
        let numberOfRandoms = 10;
let max = 10;
let min = -10;
let arr = []
for (let i=0; i<numberOfRandoms; i++) {
    
        let numbers=Math.floor(Math.random() * (max - min + 1)) + min;
        arr.value= numbers.push(numbers);

        document.getElementById('numbers').innerHTML=arr.value;
    }
     
      
    
}
