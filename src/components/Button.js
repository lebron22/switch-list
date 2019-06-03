import React from 'react';

const Button = ({ text, handleAllPanelsButton }) => {
    return (
        <button className='panels__button' onClick={handleAllPanelsButton}>
            {text}
        </button>
    );
}

export default Button;