import React, { Component } from 'react'

// creating a list of ordered tutorials and calculate the total price 
class Order extends Component {
    renderOrders = (key) => {
        const tutorial = this.props.tutorials[key];
        const count = this.props.order[key];
        const isAvailable = tutorial && tutorial.status === 'available';
        if(!isAvailable){
            return <li key={key}>Toturial {tutorial ? tutorial.name : "deleted"} is no longer available</li>
        }
        return (
            <li key={key}>
                {count} tutorial {tutorial.name} price : {tutorial.price}
                <span style={{marginLeft : 'auto'}} onClick={() => this.props.removeFromOrder(key)}>&times;</span>
            </li>
        )
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal , key) => {
            const tutorial = this.props.tutorials[key];
            const count = this.props.order[key];
            const isAvailable = tutorial && tutorial.status === 'available';
            if(isAvailable){
                return prevTotal + (count * tutorial.price);
            }
            return prevTotal

        } , 0);
       
        return (
            <div className="order">
                <h1 className="header">Orders</h1>
                <ul className="orders">
                    {orderIds.map(this.renderOrders)}
                </ul>
                <div className="total">
                    TotalPrice : {total}
                </div>
            </div>
        )
    }
}
export default Order;