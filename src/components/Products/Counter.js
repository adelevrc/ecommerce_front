import React, {useState} from 'react'; 
import '../../styles/Counter.scss'


const Counter = ( {count, decrement, item, increment}) => {



console.log(item); 
    return(
        
            <div className="container-count">
                <button className="button-counter-minus" onClick={() => decrement()}>
                    -
                </button>

                <p className="count-input">{count}</p>

                <button className="button-counter-add" onClick={() => increment()}>
                    +
                </button>
            </div>
    )
}

export default Counter; 