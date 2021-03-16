import React, {useState} from 'react'; 


const Popup = () => {

    const[modalState, setModalState] = useState(false);
  
    const toggleModalState = () => {
      setModalState(!modalState); 
    }


    return(
        <div className="popup">
            <div className={`modal-background modal-showing-${modalState}`}>
                <div className="modal-inner">
                    <div className='modal-image'>
                    <img src="https://cdn.pixabay.com/photo/2018/09/15/13/13/foka-3679390_1280.jpg" alt="modalpic"/>
                    </div>
                    <div className="modal-text">
                        <h2> This is a modal header </h2>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <form action="">
                        <button className='btn-checkout'> Join me !</button>
                        </form>
                        <button onClick={()=>toggleModalState()} className="exit-btn"> Exit </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}