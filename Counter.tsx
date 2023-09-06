import { useState } from 'react';

 export const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const sumar = (numero: number = 1):void => {
        setCounter( counter + numero); 
    }
    
    return (
        <div className='p-4 '>
            <h3>My firts useState</h3>
            <span>Value: { counter } </span>

            <br/>
            <button className="btn btn-outline-primary p-3 m-2" onClick={ () => sumar(1) }>
                +1
            </button>
            
            <button className="btn btn-outline-primary p-3 m-2 " onClick={ () => sumar(100) }>
                +100
            </button>
            
            <br/>
            <button className="btn btn-outline-danger p-3 m-2 " onClick={ () => setCounter(0) }>
                Reset
            </button>
        </div>
    );
}

export default Counter;