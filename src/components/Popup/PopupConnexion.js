import React from "react";
import s from '../styles/popupconnexion.module.css'

const PopupConnexion = () => {
return( 
    <div id={s.popup1} class={s.overlay}>
        <div className={s.popup}>
            <h2>Here i am</h2>
            <a className={s.close} href="#">&times;</a>
            <div className={s.content}>
                Thank to pop me out of that button, but now i'm done so you can close this window.
            </div>
        </div>
    </div>
)
}

export default PopupConnexion; 