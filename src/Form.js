import React, { Component } from 'react';
import './App.css';



class Form extends Component {

    constructor(props){
        super(props);
        this.handleFname = this.handleFname.bind(this);
        this.handleLname = this.handleLname.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstName:'',
            lastName: '',
            message: ''
      
    };
    }
    handleFname(e){
        this.setState({
            firstName: e.target.value
        });
    }
    handleLname(e){
        this.setState({
            lastName: e.target.value
        });
    }
    handleSubmit(e){

       
            alert('Name: '+ this.state.firstName + '\nLast Name: '+ this.state.lastName); 
            e.preventDefault();
    }

    //TODO - Add clearForm()



    render() {
        return (
            <form className = "form">
                <div>
                    <label>First Name: </label>
                    <input type="text" value = {this.state.firstName} onChange={this.handleFname}></input>
                </div>
                <div >
                    <label type="text" value ={this.state.lastName} onChange={this.handleLname}>Last Name: </label>
                    <input></input>
                </div>
                <div>
                    <label>Message: </label>
                </div>
                <div>
                <textarea type="text" value={this.state.message}></textarea>
                </div>

                <button className="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }

}

export default Form;