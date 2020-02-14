import React, { Component } from 'react'

// creating torurial view when its added to the toturial list 

class Tutorial extends Component {
    handeClick = () => {
        this.props.addToOrder(this.props.index);
    }
    changeName =(e) =>{
        e.currentTarget.innerHTML = this.props.details.status;
    }
    Leave = (e) => {
        e.currentTarget.innerHTML = this.props.details.name;
       
        
    }
    Edit = () => {
     this.props.editForm(this.props.index);
        

    }
    render() {
        const {name , price , status , desc , image} = this.props.details;
        const isAvailable = status === 'available';
        return (
            <div className="single-tutorial"  >
                <img src={image} alt={name}/>
                <div className="details">
                    <h2 className="tutorial-name"><span onMouseEnter={this.changeName} onMouseLeave={this.Leave}>{name}</span><span className="price">{price}$</span></h2>
                    <p>{desc}</p>
                    <button onClick={this.handeClick} disabled={!isAvailable} className="add-to-order">{isAvailable ? 'Add to cart' : 'Sold Out'}</button>
                    <button className="add-to-edit" onClick={this.Edit} disabled={!isAvailable} >Edit</button>
                </div>
            </div>
        )
    }
}
export default Tutorial;