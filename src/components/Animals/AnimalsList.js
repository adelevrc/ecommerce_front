import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import '../../styles/AnimalsList.scss'



const AnimalsList = () => {

    let API_URL = process.env.REACT_APP_API_URL; 
    const [animals, setAnimals] = useState([]);
    const [isAdmin, setisAdmin] = useState(false); 
  
    console.log(animals);

    useEffect(() =>{
        axios.get(`${API_URL}/animals`)
        .then(data => {
            setAnimals(data.data); 
        })
        .catch (err => console.log(err)); 
    }, [API_URL]);

    useEffect(() =>{
        if(localStorage.getItem('token') != null)
        checkIsAdmin(); 
    }, []);


    const checkIsAdmin = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        if(userToken === null){setisAdmin(false)}
        if(userToken.userRole === null){setisAdmin(false)}
        if(userToken.userRole === 'admin'){setisAdmin(true)}
    }

    const deleteAnimal = (animal) => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        axios.delete(`${API_URL}/animals/${animal._id}`,
        {
            headers:{'Authorization': 'Bearer ' + userToken.token}
        })
        refreshPage(); 
    }

    const refreshPage = () => {
        window.location.reload();
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
                                <button className={`btn-update ${isAdmin ? '' : 'not-auth-component'}`}> Modifier </button>
                            </Link>
                            <button className={`btn-delete ${isAdmin ? '' : 'not-auth-component'}`}onClick={() =>deleteAnimal(animal)}> Supprimer </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AnimalsList; 