import React, { Component } from 'react';

// creating a form for editing a tturial from the toturials list 
class EditTutorialForm extends Component {
    handleChange = (e) => {
       
        const updatedForm = {...this.props.tutorial};
        updatedForm[e.currentTarget.name] = e.currentTarget.value;
        this.props.updatedForm(this.props.index , updatedForm);
      
    }
    changePic = (e) => {
        
        const updatedForm = {...this.props.tutorial};
        updatedForm[e.currentTarget.name] = `/images/${e.currentTarget.files[0].name}`
        this.props.updatedForm(this.props.index , updatedForm);
        e.currentTarget.previousSibling.value = `/images/${e.currentTarget.files[0].name}`;
    } 
    render() {
        return (
        <form className="add-tutorial-form" onSubmit={this.createTutorial}>
            <input onChange={this.handleChange} name="name" type="text" placeholder="name" defaultValue={this.props.tutorial.name}/>
            <input onChange={this.handleChange} name="price" type="text" placeholder="price" defaultValue={this.props.tutorial.price}/>
            <select onChange={this.handleChange} name="status" defaultValue={this.props.tutorial.status}>
                <option value="available">available</option>
                <option value="unavailable">unAvailable</option>
            </select>
            <textarea onChange={this.handleChange} name="desc" placeholder="desc" defaultValue={this.props.tutorial.desc}></textarea>
            <input className="img-change" onChange={this.handleChange} name="image" type="text" placeholder="image" defaultValue={this.props.tutorial.image}/>
           <input  type="file" name="image" onChange={this.changePic} />
            <button className="remove-tutorial" onClick={() => this.props.deleteTutorial(this.props.index)}>Remove Tutorial</button>

        </form>
        )
    }
}
export default EditTutorialForm;
