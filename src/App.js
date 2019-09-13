import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';

const initialState = {
  input: '',
  imageUrl: '',
  items: {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    // item6: '',
    // item7: '',
    // item8: '',
    // item9: '',
    // item10: '',
  }
}

const app = new Clarifai.App({
  apiKey: '4329822d12914ec9b67e15243084cbd0'
});

const Particleoptions = {
  particles: {
    number: {
      value: 75,
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
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FOOD_MODEL, this.state.imageUrl).then(
    function(response) {
      console.log(response)
    },
    function(err) {
      console.log(err);
    }
  );
    // this.setState=({imageUrl:this.state.input});
    // app.models.initModel({id: Clarifai.FOOD_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    //   .then(generalModel => {
    //     return generalModel.predict("@@sampleTrain");
    //   })
    //   .then(response => {
    //     var concepts = response['outputs'][0]['data']['concepts']
    //   })
    // app.models.predict( )
  }

  render() {
    return (
    <div className="App">
      {/* <Particles className='particles' params={Particleoptions} /> */}
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <ImageDisplay imageUrl={this.state.imageUrl} />
    </div>
  );
  }
}

export default App;
