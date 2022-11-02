let button = document.getElementById('button');
    button.onclick = sumInput;
    let numbs = document.getElementById('numbers');
    let all = document.getElementById('sort');
    let result  = document.getElementById('result');
    let numbers = [];
    
    for( let i = 0; i < numbs.length; i++ ){
      numbers.push( numbs[i].value );
      small[i].addEventListener('input', function(){
        numbers[i] = this.value; 
        console.log(numbers);
        
      });
    }  
    console.log(numbers);
function sumInput() {
  result.value=numbers.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  all.value = numbers.join(', ');
  document.getElementById('result').innerHTML=result.value;
  document.getElementById('result').innerHTML=all.value;
}
