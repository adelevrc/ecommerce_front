import React, {Component} from 'react';
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../../App.css'


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
}
 getData (){
    let API_URL = process.env.REACT_APP_API_URL; 
    axios.get(`${API_URL}/animals`, {})
        .then(res => {
            const data = res.data
              const img = data.map(m => 
                <img src={m.image} alt=""/>
              )
              this.setState({
                galleryItems: img
              })
            }).catch((error) => {
                console.log(error)
            })
  }
  responsive = {
    0: { items: 2 },
    1024: { items: 3 },
  }
  componentDidMount() {
   this.getData()
}
  
  render() {
    return (
      <div>
        <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
      </div>
    )
  }
}