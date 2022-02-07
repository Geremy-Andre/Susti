import React, {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
//import { useEffect } from 'react/cjs/react.development';

export const Message = () => {

    const [coords, setCoords ] = useState({x:0, y:0});
    const { x, y } = coords;

    const mouseMove = (e)=>{
        const coords = { x: e.x, y:e.y };
        setCoords(coords);;
        //console.log('XD');
    }

    useEffect (() =>{
        window.addEventListener('mousemove', mouseMove);      
            //const coors = {x: e.x, y: e.y}
            //console.log(coors);
            //console.log('XD')
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    },[]);

    return (
        <div>
            <h3>Eres cvr!!!</h3>
            <p>x: { x }, y: { y }</p>

        </div>
    )
}