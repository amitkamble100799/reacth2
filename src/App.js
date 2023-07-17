import React,{Component} from "react";
import './App.css';
class name1 extends React.Component{
state={
    name:"",
    department:'',
    rating:'',
    data:[]
}
handle=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    this.setState({[e.target.department]:e.target.value})
    this.setState({[e.target.rating]:e.target.value})
}
clk=()=>{
    const obj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating

    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,
    name:"",dapartment:"",rating:""})
}

render(){
    return(
        <>
        <div className="box1">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div className="box2">
        <label className="n1">Name : </label>
        <input id="name" type="text" name="name" placeholder="Enter Your Name" onChange={this.handle} value={this.state.name}/>
        <br/>
        <label className="n1">Department : </label>
        <input id="dpt" type="text" name="department" placeholder="Enter Your department" onChange={this.handle} value={this.state.department}/>
        <br/>
        <label className="n1">Rating : </label>
        <input id="rt" type="number" name="rating" onChange={this.handle} value={this.state.rating}/>
        <br/>
        <button id="clk" onClick={this.clk}>submit</button>
        </div>
        </div>
        <div id="box">
        {
        this.state.data.map((item)=>{
            return(
              
              <h4>Name :{item.name} || Department :{item.department} || Rating : {item.rating}</h4>
             
            )
        })
        }
         </div>
        </>
    )
}

}
 export default name1
