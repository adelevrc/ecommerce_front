import React from 'react'; 
import axios from 'axios';
import '../../styles/Updateform.scss'; 



export default class UpdateAnimal extends React.Component {

    state = {
      item: {
        name: '',
        description: '',
        care: '', 
        image: '',
        isDead: true, 
      }
    }

    componentDidMount = () => {
        let API_URL = process.env.REACT_APP_API_URL;
        axios.get(`${API_URL}/animals/${this.props.match.params.id}`)
          .then(res => {
            this.setState({item: res.data}); 
          })
          .catch(err => console.log(err))
      }

      handleChange = e => {
        e.persist();
        this.setState(animal => ({
          item: { ...animal.item,  
          [e.target.name]: e.target.value}, 
        })
        )
      }

      handleSubmit =  () => {
        const API_URL = process.env.REACT_APP_API_URL;
        let data = this.state.item
        const tokenString = localStorage.getItem('token');
        const userToken =  JSON.parse(tokenString);

        axios.patch(`${API_URL}/animals/${this.props.match.params.id}`, data, {
            headers:{'Authorization': 'Bearer ' + userToken.token}
        })
        .then(res => {
          console.log(res); 
        })
        .catch(err => console.log(err));
        
        this.props.history.push('/animals');
        alert("Animal modifié avec succés ");
      }


      render() {
          return(
          
            <form className="form" onSubmit={this.handleSubmit}>
              <h1> Page Administrateur : modifier un animal</h1>
                <fieldset>
                    <label>
                        <p>Nom de l'animal</p>
                        <input id="title" type="text" name="name" value={this.state.item.name} onChange={this.handleChange}/>
                    </label>
                </fieldset>

                <fieldset>
                    <label>
                        <p>Description</p>
                        <textarea id="description" name="description" value={this.state.item.description} onChange={this.handleChange} step="1"/>
                    </label>
                </fieldset>

                <fieldset> 
                    <label>
                        <p>Soins à apporter / remarques </p>
                        <textarea id="image" name="care" value={this.state.item.care} onChange={this.handleChange} step="1"/>
                    </label>
                </fieldset>

                <fieldset> 
                    <label>
                        <p>Prix</p>
                        <input id="price" name="image" value={this.state.item.image} onChange={this.handleChange} step="1"/>
                    </label>
                </fieldset>

                <div>
                    <button onClick={this.handleSubmit} type="submit">Modifier</button>
                </div>      
        </form>

          )
      }
}