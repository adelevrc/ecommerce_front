import React from 'react'; 
import shark from '../img/shark.svg'; 
import promotion from '../img/promotion.svg'; 
import planetearth from '../img/planet-earth.svg'; 
import lifesaver from '../img/life-saver.svg'; 
import '../styles/LandingPage.scss'; 
import Contact from './Contact'; 
import AliceCarousel from './Animals/Slider'; 

// import SupportUs from './SupportUs'
// import AliceCarousel from './Carrousel'; 

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <div className="title">
                <h1>
                    BluePeace 
                </h1>
            </div>

                <h2>
                    Refuge pour animaux marins
                </h2>

                <p className="paragraph-description-white paragraph-landing-page">
                    Association loi 1901 pour la préservation et la réhabilitation des animaux marins. 
                    Nous accueillons les animaux en captivité dans notre refuge et faisons tout notre possible pour les remettre à la vie sauvage. 
                </p>
           
            <div className="grid-items-actions">
                <div className='div-action'>
                    <img src={planetearth} className="icone" alt="icone de planete"/>
                    <h3 className="h3-blue-bold" > Préservation </h3>
                    <p className="paragraph-description-white-centered">
                        Notre objectif est de préserver la faune et la flore marine et que l'impact de l'homme soit le plus minime possible.              
                    </p>
                </div>

                <div className='div-action'>
                    <img src={lifesaver} className="icone" alt="icone de bouée de sauvetage"/>
                    <h3 className="h3-blue-bold"> Réhabilitation </h3>
                    <p className="paragraph-description-white-centered">
                        Tous les jours, notre refuge aide les animaux marins en captivité à retourner à la vie sauvage.                     
                    </p>
                </div>

                <div className='div-action'>
                    <img src={promotion} className="icone" alt="icone d'un megaphone"/>
                    <h3 className="h3-blue-bold"> Militantisme </h3>
                    <p className="paragraph-description-white-centered">
                        Signataires de nombreuses chartes pour la préservation de l'environnement, nous faisons aussi entendre nos voix lors de manifestations.                    
                    </p>
                </div>

                <div className='div-action'>
                    <img src={shark} className="icone" alt="icone de requin"/>
                    <h3 className="h3-blue-bold"> Sensibilisation </h3>
                    <p className="paragraph-description-white-centered">
                        Nous organisons des actions de sensibilisation sur la captivité des animaux et la pollution marine.                  
                    </p>
                </div>

            </div>

            <div className="div-carousel-component">
                <AliceCarousel />
            </div>

        
                {/* <SupportUs /> */}
                <Contact />
        
        </div>
    )
}

export default LandingPage;