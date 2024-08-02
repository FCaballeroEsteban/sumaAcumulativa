//ciclo de suma acumulativa usando while , do while y for 

let inicio = 1;
let fin = 5;
let acumulador = 0 

// while(inicio <= fin){
    
//     acumulador += inicio;
//     console.log(acumulador)
//     inicio++
// }
// console.log(acumulador)


// do{
//     acumulador += inicio;
//     console.log(acumulador)
//     inicio++;
// }while(inicio <= fin);
// console.log(acumulador);
    

for (inicio = 1; inicio <= fin; inicio++){
    acumulador += inicio;
    console.log(acumulador)
}


console.log(acumulador)
