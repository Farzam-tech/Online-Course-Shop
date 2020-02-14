import React, { Component } from 'react';
import AddTutorialForm from './AddTutorialForm';
import EditTutorialForm from './EditTutorialForm'
// the inventory managemnent 
class Inventory extends Component {
  
    render() {
        return (
            <div className="inventory">
                <h1 className="header">Inventory</h1>

                 {/* loading existing turorials from the sample server component  */}
                <button className="load-sample" onClick={this.props.load}>Load Tutorial samples</button>
                {/* creating a tutorial and adding to the tutorial list */}
                <AddTutorialForm addTutorial={this.props.addTutorial}/>
                {/* adding a tutorial edit form to  */}
                {Object.keys(this.props.editForms).map(key => 
                <EditTutorialForm updatedForm={this.props.updateForm} key={key} index={key} deleteTutorial={this.props.deleteTutorial} tutorial={this.props.editForms[key]}/>)}
               
               
            </div>
        )
    }
}
export default Inventory;
