import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';



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
        <div className='animals-container'>
            {animals.map((animal) =>
                <div className="animal-container" key={uuidv4()}>
                    <figure>
                        <Link to={`/animals/${animal._id}`}>
                            <img className="img-small"src={animal.image} alt={animal.name} />
                        </Link>
                    </figure>
                    <h1> {animal.name} </h1>
                </div>
                
                
            )};
        </div>

    )
}

export default AnimalsList; 