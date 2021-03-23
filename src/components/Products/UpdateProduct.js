import React from 'react'; 
import axios from 'axios';
import '../../styles/Updateform.scss'; 



export default class UpdateProduct extends React.Component {


    state = {
      item: {
        title: '',
        description: '',
        image: '', 
        price: '',
        inStock: true, 
      }
    }

    componentDidMount = () => {
        let API_URL = process.env.REACT_APP_API_URL;
        axios.get(`${API_URL}/products/${this.props.match.params.id}`)
          .then(res => {
            this.setState({item: res.data}); 
          })
          .catch(err => console.log(err))
      }

      handleChange = e => {
        e.persist();
        this.setState(product => ({
          item: { ...product.item,  
            [e.target.name]: e.target.value,  }, 
        })
        )
      }

      handleSubmit = async () => {
        const tokenString = localStorage.getItem('token');
        const userToken = await JSON.parse(tokenString);
        const API_URL = process.env.REACT_APP_API_URL;
        let data = this.state.item

        axios.patch(`${API_URL}/products/${this.props.match.params.id}`, data, 
        {
            headers:{'Authorization': 'Bearer ' + userToken.token}
        })

        .then(res => {
          console.log(res); 
          console.log("DONE");
          this.props.history.push('/produits');
        })
        .then(this.props.history.push('/produits'))
        .then(alert("Produit modifié avec succés "))
        .catch(err => console.log(err));
      }


      render() {
          return(
          
            <form className="form" onSubmit={this.handleSubmit}>
              <h1> Page Administrateur : modifier un produit</h1>
                <fieldset>
                <label>
                    <p>Nom du produit</p>
                    <input id="title" type="text" name="title" value={this.state.item.title} onChange={this.handleChange}/>
                </label>
                </fieldset>


                <fieldset>
                <label>
                <p>Description</p>
                <input id="description" name="description" value={this.state.item.description} onChange={this.handleChange} step="1"/>
                </label>
                </fieldset>

                <fieldset> 
                <label>
                <p>Photo</p>
                <textarea id="image" name="image" value={this.state.item.image} onChange={this.handleChange} step="1"/>
                </label>
                </fieldset>

                <fieldset> 
                <label>
                <p>Prix</p>
                <input id="price" name="price" value={this.state.item.price} onChange={this.handleChange} step="1"/>
                </label>
                </fieldset>

                <div>
                <button onClick={this.handleSubmit} type="submit">Modifier</button>
                </div>      
        </form>

          )
      }
      }