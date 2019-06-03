import React from 'react';

const Switch = ({ checked, handleSwitchChange }) => <input className='switch-input' type="checkbox" checked={checked} onChange={() => handleSwitchChange()} />

export default Switch;
