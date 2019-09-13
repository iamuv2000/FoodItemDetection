import React from 'react';

const ImageDisplay = ({imageURL}) => {
    return(
        <div className='center'>
            <img src={imageURL} alt=''/>
        </div>
    );
}

export default ImageDisplay;