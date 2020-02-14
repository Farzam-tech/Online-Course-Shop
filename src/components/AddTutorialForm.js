import React, { Component } from 'react';

// creating a form to add a toturial to the list

class AddTutorialForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createTutorial = (e) => {
        e.preventDefault();
        const tutorial = {
            name : this.nameRef.current.value ,
            price : this.priceRef.current.value ,
            status : this.statusRef.current.value ,
            desc : this.descRef.current.value ,
            image : this.imageRef.current.value ,
        }
        this.props.addTutorial(tutorial);
        e.currentTarget.reset();
    }
   

    render() {
        return (
            <form className="add-tutorial-form" onSubmit={this.createTutorial}>
                <input ref={this.nameRef} name="name" type="text" placeholder="name"/>
                <input ref={this.priceRef} name="price" type="text" placeholder="price"/>
                <select ref={this.statusRef} name="status">
                    <option value="available">Available</option>
                    <option value="unavailable">unAvailable</option>
                </select>
                <textarea ref={this.descRef} name="desc" placeholder="desc"></textarea>
                <input ref={this.imageRef} name="image" type="text" placeholder="image"/>
                <button className="add-tutorial">Add Tutorial</button>
               
            </form>
        )
    }
}

export default AddTutorialForm;