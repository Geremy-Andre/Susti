import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    
    const [formState, setFomState] = useState({
        name: '',
        email: ''
    });

    const{ name, email } = formState;

    useEffect (() => {
        //console.log('Holaaa!!!');
    },[]);

    useEffect (() => {
        //console.log('formStat cambio');
    },[formState]);

    useEffect (() => {
        //console.log('email cambio!!');
    },[email]);

    const handleInputChange = ( { target }) => {
        setFomState({
            ...formState,
            [ target.name ] : target.value
        });
        //console.log(e.target.name);
        //console.log(e.target.value);
    }
    return(
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Ingrese su nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange}
                
                />

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@mail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange}
                
                />
                
            </div>

            { (name === '123') && <Message/> }

        </>
    )
}