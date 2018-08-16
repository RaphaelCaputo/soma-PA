
// Ordena a função array.sort()
function compararNumeros(a, b) {
  return a - b;
}


function sumCheck (arr, s) {
  let last = arr.length-1;
  let firts = arr[0];
  let sum = 0;

  
  if(s < arr[last] * 2){
    console.log(" Soma = " + s);
    
    
    // Numeros pares
    if(s % 2 == 0) {
      // console.log(s + " é par ");
      let middle = s/2;
      let index = arr.lastIndexOf(middle);
      // console.log(middle + " existe no index " + arr.indexOf(middle));
      
      let j = index;
      for(index; index<arr.length; index++) {
        sum = arr[index] + arr[j];
        console.log(" " + arr[index] + " + " + arr[j] + " = " + sum);
        j--;
        if(arr[j] == undefined)
          return;
      }
    } 

    
    // Numeros impares
    else {
      // console.log(s + " é impar ");
      let middle = Math.ceil(s/2);
      let index = arr.lastIndexOf(middle);
      // console.log(middle + " existe no index " + arr.indexOf(middle));

      let j = index-1;
      for(index; index<arr.length; index++) {
        sum = arr[index] + arr[j];
        console.log(" " + arr[index] + " + " + arr[j] + " = " + sum);
        j--;
        if(arr[j] == undefined)
          return;
      }
    }
    return;
  }
  console.log("Não existe nenhuma combinação de dois elementos que some " + s);
}


// So funciona com PA
let array = [1,2,3,4,5,6,7,8,9,10];
let sortedArr = array.sort(compararNumeros);
console.log(sortedArr);
sumCheck(sortedArr, 8);