
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    
    const [formValues, handleInputChange] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: ''
    });

    const{ name, lastName, email, password } = formValues;

    useEffect(() =>{
        console.log('email cambio');
    }, [email])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return(
        <form onSubmit = { handleSubmit }> 
           <h1>FormWithCustomHook</h1>
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
                    name='lastName'
                    className='form-control'
                    placeholder='Ingrese su apellido'
                    autoComplete='off'
                    value={ lastName }
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

                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='************'
                    value={ password }
                    onChange={ handleInputChange}
                
                />
                
            </div> 
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>

        </form>
    )
}