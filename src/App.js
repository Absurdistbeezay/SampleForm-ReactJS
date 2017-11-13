import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Form from './Form';


class App extends Component{

 

render(){
  return(

 <div>
  <h1 className="head">Sample Form</h1>
 <Form/>
</div>
  );
}

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
export default App;