import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import s from '../../styles/animal.module.css'



const AnimalsList = () => {

    let API_URL = process.env.REACT_APP_API_URL; 
    const [animals, setAnimals] = useState([]);

    useEffect(() =>{
        axios.get(`${API_URL}/animals`)
        .then(data => {
            setAnimals(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [])

    return(
        <div className={s.container}>
            <h1 className={s.h1BlueCenteredUppercase}> Nos rescapés </h1>
            <div className={s.containerAllAnimal}>
                {animals.map((animal) =>
                    <div className={s.containerOneAnimal} key={uuidv4()}>
                        <figure>
                            <Link to={`/animals/${animal._id}`}>
                                <img className="img-small"src={animal.image} alt={animal.name} />
                            </Link>
                        </figure>
                        <h2 className={s.h2NameAnimalBlue}>{animal.name} </h2>
                        <Link to={`/animals/${animal._id}`}>
                            <button className={s.greenSmallBtn}> Voir </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )
}

export default AnimalsList; 