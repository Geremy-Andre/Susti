import { useState } from "react";

export const useCounter = (initialState = 10) => {
  
    const [counter, setCounter] = useState(initialState)
    //Definimos las funciones
    //const esPrimo = (id) => {
    //    for (var x = 2; x <= id-1; x++) {
    //        if (id % x === 0) return false;
    //    }
    //    return true;
    //}

    //const increment = ()=>{
    //    let id=1;
    //    while(!esPrimo(counter+id)){
    //        id+=1;
    //    }
    //    if (esPrimo(counter+id)){
    //        setCounter(counter+id)
    //        id=1
    //    }
    //}

    const increment = ()=>{
        setCounter( counter + 1);
    }

    const decrement = ()=>{
        setCounter( counter - 1);
    }

    const reset = () =>{
        setCounter(initialState);
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
