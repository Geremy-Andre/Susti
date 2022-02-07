import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const { loading, data } = useFetch(`https://cataas.com/#/cat/says/:text?size=:size&color=:color/c/s/:text?s=:size&c=:color`);
    const { text, size, color } = !!data && data;
    console.log(data);
    return (
        <div>
            <h1>Gatos Random</h1>
            <hr/>
            {
                (
                    <blockquote>
                        <input className='form-control' name='name' type='text'/>
                    </blockquote>
                )
            }

            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                Mostrar!!
            </button>

        </div>
    ) 
};
