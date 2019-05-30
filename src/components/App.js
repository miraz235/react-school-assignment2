import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ProductApp from './ProductApp'

class App extends Component {
  state = {
    header: {
      searchKey: ''
    }
  };
  onSearch(searchKey) {
    this.setState({ header: { searchKey } });
  }
  render() {
    return (
      <div className="wrapper">
          <AppHeader onSearchChange={key => this.onSearch(key)} />
          <ProductApp searchKey={this.state.header.searchKey} />
      </div>
    );
  }
}

export default App;
