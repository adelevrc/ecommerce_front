import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import '../../styles/AnimalsList.scss'



const AnimalsList = () => {

    let API_URL = process.env.REACT_APP_API_URL; 
    const [animals, setAnimals] = useState([]);
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const userRole = userToken.userRole;

    useEffect(() =>{
        axios.get(`${API_URL}/animals`)
        .then(data => {
            setAnimals(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [API_URL]);

    console.log(animals); 

    const deleteAnimal = (animal) => {
        axios.delete(`${API_URL}/animals/${animal._id}`,
        {
            headers:{'Authorization': 'Bearer ' + userToken.token}
        })
        refreshProductsPage(); 
    }

    const refreshProductsPage = () => {
        setAnimals(animals => [...animals]);
    }

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
                        <div className="div-btn"> 
                            <Link to={`/animals/${animal._id}`}>
                                <button> Voir </button>
                            </Link>
                            <Link to={`/modification/admin/animals/${animal._id}`}>
                                <button className={`btn-update ${userRole==="admin" ? '' : 'not-auth-component'}`}> Modifier </button>
                            </Link>
                            <button className={`btn-delete ${userRole==="admin" ? '' : 'not-auth-component'}`}onClick={() =>deleteAnimal(animal)}> Supprimer </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AnimalsList; 