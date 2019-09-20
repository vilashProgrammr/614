import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>Things To Do12321</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
