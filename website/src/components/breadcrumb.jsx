import React from 'react';
import Button from 'react-bootstrap/Button';

const Breadcrumb = ( props ) => {
    return (
        <div className={`d-flex flex-column mx-5 justify-content-center align-items-center bc breadcrumb-${props.link.replace(/#/g, '')}`}>
            <Button href={props.link} className='m-0'></Button>
            <p className='m-0 mt-1'>{props.text}</p>
        </div>
    );
}

export default Breadcrumb;