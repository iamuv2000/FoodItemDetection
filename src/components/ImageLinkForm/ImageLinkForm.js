import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className='imagelinkform'>
            <p> Enter the url of an image to get the items present in the image </p>
            <div className='input'>
                <input className='' onChange={onInputChange} />
                <button className='' onClick={onButtonSubmit}> Click here! </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;