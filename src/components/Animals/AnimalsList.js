import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import '../../styles/AnimalsList.scss'



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
        <div className="container-animals">
            <h1> Nos rescapés </h1>
            <div className="grids-animals">
                {animals.map((animal) =>
                    <div className="container-one-animal" key={uuidv4()}>
                        <figure>
                            <Link to={`/animals/${animal._id}`}>
                                <img className="img-small"src={animal.image} alt={animal.name} />
                            </Link>
                        </figure>
                        <h2>{animal.name} </h2>
                        <Link to={`/animals/${animal._id}`}>
                            <button> Voir </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )
}

export default AnimalsList; 