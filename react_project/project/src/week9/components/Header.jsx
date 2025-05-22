import React, { useEffect } from 'react';

import './Header.css';

export const Header = (props) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <header className="panel">
            {props.text}
        </header>
    )
}
