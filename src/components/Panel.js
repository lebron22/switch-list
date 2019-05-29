import React from 'react';
import Switch from '../components/Switch';
import '../styles/panel.scss';

const Panel = ({ post, handleCheckboxChange }) => {
    const { title, body, id, isOpened } = post
    return (
        <section>
            <header className='panel__header'>
                <Switch checked={isOpened} handleCheckboxChange={() => handleCheckboxChange(id)} />
                <h3 className='panel__heading'>{title}</h3>
            </header >

            {isOpened ? (
                <article className='panel__article'>
                    <p>{body}</p>
                </article>
            ) : null}
        </section>
    );
}

export default Panel;