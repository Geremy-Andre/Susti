import React, { useRef } from 'react';

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

  const inputRef = useRef();
  //console.log(ref);

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr/>
        <input
          ref={ inputRef }
          className='from-control'
          placeholder='Escriba su nombre aqui'
        />

        <button
          className='btn btn-primary mt-5'
          onClick={ handleClick }
        >
            Focus
        </button>
    </div>
    );
};
