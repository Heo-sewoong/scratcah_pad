// for(let i = 2; i <= 9; i++) {
//   document.write(i + '단');
//   document.write('<br>');
//   for(let j = 1; j <= 9; j++) {
//     document.write(i + ' * ' + j + ' = ' + (i*j));
//     document.write('<br>');
//   }
// }



const multi = function table(){for (let i=2; i<10; i++){
  for(let j=1; j<10; j++){
    console.log(`${i} * ${j} = ${i * j}`)
  }
  
}}

