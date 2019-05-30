import React from 'react';
import SearchInput from './SearchInput';

const AppHeader = (props) => {
    return (
        <header className="header container">
            <h2>Product App</h2>
            
                <SearchInput onSearchChange={props.onSearchChange}  />
                <button className="button">Login</button>
            
        </header>
    );
};

export default AppHeader;