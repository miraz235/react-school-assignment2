import React from 'react';
import SearchInput from './SearchInput';
import LoginButton from './Login/LoginButton'

const AppHeader = (props) => {
    return (
        <header className="header container">
            <h2>Product App</h2>
            
            <SearchInput onSearchChange={props.onSearchChange}  />
            <LoginButton />
            
        </header>
    );
};

export default AppHeader;