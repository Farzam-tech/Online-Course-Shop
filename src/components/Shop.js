import React, { Component } from 'react'

// first page to direct the customer to the shop

class Shop extends Component {
    myInput = React.createRef();
    goToShop = (e) => {
        console.log(this.props);
        e.preventDefault();
        const urlPath = this.myInput.current.value;
        this.props.history.push(`/shop/${urlPath}`)
        
        
    }
    render() {
        return (
            <form className="shop-form" onSubmit={this.goToShop}>
                <h2>Enter shop name</h2>
                <input required ref={this.myInput} type="text" placeholder="shop name"/>
                <button type="submit">Visit shop</button>
            </form>
        )
    }
}
export default Shop;