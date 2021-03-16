import React, {useState} from 'react'; 
import '../../styles/Counter.scss'


const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        
            <div className="container-count">
                <button className="button-counter-minus" onClick={() => setCount(count - 1)}>
                    -
                </button>

                <p className="count-input">{count}</p>

                <button className="button-counter-add" onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
       
    )
}

export default Counter; 