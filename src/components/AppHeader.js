import React from 'react';
import SearchInput from './SearchInput';
import Login from './Login'

const AppHeader = (props) => {
    return (
        <header className="header container">
            <h2>Product App</h2>
            
            <SearchInput onSearchChange={props.onSearchChange}  />
            <Login />
            
        </header>
    );
};

export default AppHeader;