import React, {useState, useEffect} from 'react'; 
import s from '../../styles/animal.module.css'; 

const Animal = ({ match }) => {
    
    useEffect(() => {
        fetchAnimal();
    }, [])

    const [animal, setAnimal] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;
    console.log(API_URL); 

    const fetchAnimal = async () => {
        const fetchAnimal = await fetch(`${API_URL}/animals/${match.params._id}`);
        const animal = await fetchAnimal.json();
        setAnimal(animal);
        console.log(animal);
        
    }
    return (
        <div className={s.animaContainer}>
        <div className={s.animalDetails}>
            <img className="img-large"src={animal.image} alt={animal.name}/>
            <h2> {animal.name} </h2>
                <p> {animal.description}</p>                    
            
        </div>
    </div>

    )
}

export default Animal; 