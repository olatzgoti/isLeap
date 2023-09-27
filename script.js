/* 



Ejercicio: Contar las veces que se repite cierta letra almacenada en un array de palabras. En cada posición del array hay una palabra almacenada

Ejemplo: ["hola","casa","adiós"]. Si buscas "a", te devuelve 4
contarCaracteres(["hola","casa","adiós"],"a") */


/* function contarCaracteres(arrayPalabras,caracter) {
    
    for(let i = 0; i < arrayPalabras.length; i++)
        {   
            //console.log(arrayPalabras[i]);
           
            const palabra = arrayPalabras[i];

            for(let j = 0; j < palabra.length; j++ )
            {
                console.log(palabra[j]);
                const letra = palabra[j];

                if(palabra[j] > 1)
                {
                    let contador = caracter += 1;
                }
            }
        }
     return contador;
     console.log(contador);
 }
 contarCaracteres(['hola', 'que', 'tal'], 'a');
 */



/*  Ejercicio bisiesto:
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí. */


function bisiesto(num) {
    
 
     if(num%4 == 0 && num%400 == 0)
 {
    if(num %100 == 0)
    {
        console.log('No es año bisiesto')
        return false;
    }
    else 
    {
        console.log('es año bisiesto')
        return true;
    }
 }
}

bisiesto();