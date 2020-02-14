import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import samples from './samples';
import Tutorial from './Tutorial';

// main component 

class App extends Component {
    state = {
        tutorials : {} ,
        order : {},
        edit: {}
    };

    
    addTutorial = (tutorial) => {
        const course = {...this.state.tutorials};
        course[`learn${Date.now()}`] = tutorial;
        this.setState(() => {
            return {tutorials : course};
        })
    };
    loadSample = () => {
        this.setState(() => {
            return {tutorials : samples}
        })
    };
    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    };
    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    };

    updateForm = (key , updatedForm) => {
        const tutorials = {...this.state.tutorials};
        tutorials[key] = updatedForm;
        this.setState({tutorials});
    };
    deleteTutorial = (key) => {
        const tutorials = {...this.state.tutorials};
        const edit = {...this.state.edit}
        delete tutorials[key];
        delete edit[key];
        this.setState({tutorials});
        this.setState({edit})
    };
    addToEditForm = (key)=>{
        const edit = {...this.state.edit};
        edit[key]= this.state.tutorials[key];
        this.setState({edit})
    }

    render() {
        return (
            <div className="tutorials-app">
                <div className="tutorials">
                    <Header />
                    <ul>
                        {Object.keys(this.state.tutorials).map(key => <Tutorial editForm={this.addToEditForm} updateForm={this.updateForm} addToOrder={this.addToOrder} key={key} index={key} details={this.state.tutorials[key]} tutorials={this.state.tutorials}/>)}
                    </ul>
                </div>
                <Order removeFromOrder={this.removeFromOrder} tutorials={this.state.tutorials} order={this.state.order}/>
                <Inventory editForms= {this.state.edit} deleteTutorial={this.deleteTutorial} updateForm={this.updateForm} tutorials={this.state.tutorials} addTutorial={this.addTutorial} load={this.loadSample} />
            </div>
        )
    }
}
export default App;