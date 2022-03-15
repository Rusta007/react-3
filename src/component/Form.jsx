import React,{ Component } from 'react';
import {View} from './PrevStep';
import Style from './Style.css';

  
class Form extends Component{
    state = {Name:'', Department:'', Rate:'',user:[],viewform:true};
  
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    event.preventDefault()
    const obj= {
      Name : this.state.Name,
      Department: this.state.Department,
      Rate : this.state.Rate,
      Viewform: this.state.viewform,
    };

    const tArr = this.state.user;
    tArr.push(obj);
    this.setState({user:tArr, viewform: !this.state.viewform});

  }
  

  

  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange=(event)=>{
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })

    
  }
  goback = () =>
    {
        this.setState({
            viewform : !this.state.viewform,
        });
    
    }
  render(){
    return(
        <>
        {this.state.viewform ? (
            <div className='container'>
            <h1>EMPLOYEE FORM</h1>
            <br/>
      <form>
       
         <div>
          <label htmlFor='Name'>
          <input
            name='Name' 
            placeholder='Name'
            value={this.state.Name}
            onChange={this.handleChange}
            required
          />
          </label>
        </div>
        <div>
          <label htmlFor='Department'></label>
          <input
            name='Department' 
            placeholder='Department'
            value={this.state.Department}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Rate'></label>
          <input
            name='Rate' 
            placeholder='Rate'
            value={this.state.Rate}
            onChange={this.handleChange}
            required
          />
        </div>
       
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Click Me</button>
        </div>
       
      </form>
      </div>
      ):(
            <View viewdata={this.state.user} backbtn={this.goback}/>       
        )}
        </>
    )
  }
}
  
export default Form;