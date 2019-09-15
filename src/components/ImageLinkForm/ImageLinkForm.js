import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className='imagelinkform'>
            <p className='fw6 f2' style={{color:'white',opacity: 0.87,'fontFamily': 'Saira'}}> Ingredient Detection using Machine Learning </p>
            <div className='input'>
                <input className='f7 pa3 ba bw0 br4' style={{opacity: 0.87,width:'50vh','borderRadius':'3px' ,
                'borderTopRightRadius':'0px','borderBottomRightRadius':'0px',height:'1.7vh','fontFamily': 'Saira'
                }} 
                onChange={onInputChange} 
                placeholder='Enter image url...' 
                />
                <button className='ba f5 pa2' onClick={onButtonSubmit} style={{'backgroundColor':'rgb(142,71,234)',
                opacity: 0.87,color:'white',
                height:'7vh',border:'none',
                'paddingTop': '6px','borderTopRightRadius':'3px','borderBottomRightRadius':'3px',
                
            }}
                > Click here! 
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;