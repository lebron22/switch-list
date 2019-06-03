import React from 'react';
import classNames from 'classnames'

const PanelBody = ({ body, isOpened }) => {
    const articleClass = classNames({
        'panel__article': true,
        'opened': isOpened
    });

    return (
        <article className={articleClass}>
            <p className='panel__body'>{body}</p>
        </article>
    );
}

export default PanelBody;
