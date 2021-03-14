import React, {useState, useEffect} from 'react'; 

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
        <div>
            <h1> Hello </h1>
        <div className="div-cart">
            <img src={animal.image} alt={animal.name}/>
            <div className="div-cart-title-price">
                <h2> {animal.name} </h2>
                <p> {animal.description}</p>                    
            </div>
        </div>
    </div>

    )
}

export default Animal; 