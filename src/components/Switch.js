import React from 'react';
import '../styles/switch.scss'

const Switch = ({ checked, handleCheckboxChange }) => <input className='switch-input' type="checkbox" checked={checked} onChange={() => handleCheckboxChange()} />

export default Switch;
