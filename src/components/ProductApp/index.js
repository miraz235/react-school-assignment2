import React, {Component} from 'react'
import './ProductApp.css'
import ProductList from './ProductList'

const productsData = require('./products.json')

export default class ProductApp extends Component{
    products = [];
    state = {
        products: [],
        filterKey: ''
    }
    componentDidMount = () => {
        this.getSortedProductsWithVote(productsData);
        this.setFilteredProduct(this.props.searchKey || '');
    }
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.searchKey !== this.state.filterKey)
            this.setFilteredProduct(nextProps.searchKey)
    }
    getSortedProductsWithVote(products) {
        this.products = products.sort(function(a, b){
            return b.vote - a.vote
        })
    }
    setFilteredProduct(filterKey) {
        filterKey = filterKey.toLowerCase();
        this.setState({ products: filterKey ? this.products.filter( product => product.title.toLowerCase().indexOf(filterKey) > -1 ) : this.products, filterKey });
    }

    onChangeVote(product, isUp) {
        if(isUp)
            product.vote++;
        else if(product.vote > 0)
            product.vote--;
            //this.products = this.products.filter(p => p.id !== product.id)
        this.getSortedProductsWithVote(this.products.map(p => p.id === product.id ? product : p));
        this.setFilteredProduct(this.props.searchKey || '');
    }
    render() {
        return (
          <div className="page-container">
            <div className="container">
                <ProductList products={this.state.products} onChangeVote={this.onChangeVote.bind(this)}  />
            </div>
          </div>
        )
      }
}