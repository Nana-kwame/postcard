import React from 'react';
import './Input.css';

const Input = ({ image, placeholder, type, ...props }) => {
    return (
        <div className='Input__textarea--inputArea'>

            {image ? <img src={image} className='Input__textarea--inputArea__img' alt='Property' /> : <span> &nbsp; &nbsp; &nbsp; </span>}
            <input placeholder={placeholder} className='Input__textarea--inputArea__inputBox' type={type} {...props} />
        </div>
    );
}

export default Input;