import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';

const initialState = {
  input: '',
  imageUrl: '',
  items: {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
    item10: '',
  }
}

const app = new Clarifai.App({
  apiKey: '8498e1d8c2864f44a4865a5c8658c7b2'
});

const Particleoptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true, 
        value_area: 1000
      }
    }
  }
}



class App extends Component {
  constructor() {
    super();
    this.state=initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState=({imageUrl:this.state.input});
    // app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    // .then(generalModel => {
    //   return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
    // })
    // .then(response => {
    // var concepts = response['outputs'][0]['data']['concepts']
    // })
    app.models.predict( )
  }

  render() {
    return (
    <div className="App">
      <Particles className='particles' params={Particleoptions} />
      <h1> Object detection app </h1>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
    </div>
  );
  }
  
}

export default App;
