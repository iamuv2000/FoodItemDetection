import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className='imagelinkform'>
            <p className='fw6 f2' style={{color:'white'}}> Ingredient Detection using Machine Learning </p>
            <div className='input'>
                <input className='f7 pa3 ba bw0 br4' onChange={onInputChange} placeholder='Enter image url...' />
                <button className='ba f5 pa2' onClick={onButtonSubmit}> Click here! </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;