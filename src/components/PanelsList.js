import React from 'react';
import Panel from '../components/Panel';

const PanelsList = ({ posts, handleCheckboxChange }) => {
    const panels = posts.map(post => {
        return (
            <Panel key={post.id} post={post} handleCheckboxChange={handleCheckboxChange} />
        );
    });
    return <div className="panels-list">{panels}</div>;
}

export default PanelsList;