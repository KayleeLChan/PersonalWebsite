import React from 'react';
import Breadcrumb from './breadcrumb';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <div className='breadpath' />
            <div className='breadcrumb-progress' />
            <Breadcrumb link="#introduction" text="Intro" />
            <Breadcrumb link="#education" text="Education" />
            <Breadcrumb link="#interests" text="Interests" />
            <Breadcrumb link="#games" text="Games" />
            <Breadcrumb link="#work" text="Work" />
            <Breadcrumb link="#thanks" text="Thanks" />
            <Breadcrumb link="#explore" text="Explore" />
        </div>
    );
}

export default Breadcrumbs;