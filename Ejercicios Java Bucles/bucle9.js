//el bucle for se repetirá mientras i sea menor que 13
//ya que i empieza con el valor 1, la condición es que i sea menor que 13 (osea, 12 máximo)
//y el ejercicio nos pide que saquemos 12 números con su cubo si es par y su cuadrado si es impar

for (let i= 1; i <13; i++){
    if ( i%2 === 0){
        console.log(`El cubo de ${i} es ${i*i*i}`);
    }else{
        console.log(`El cuadrado de ${i} es ${i*i}`);
    }
}