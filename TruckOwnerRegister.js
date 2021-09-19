import React from "react";
import mystore from "./store";
class TruckOwnerRegister extends React.Component {

    constructor(props)
    {
   super(props);
    this.state={
          uid:"",
          pwd:"",
          reg_date:"",
          reg_amt:"",
          truck_no:"",
         name:"",
         address:"",
         source:"",
         destination:"",
         contact:"",
         availability_status:"",
         truckowner:{}
    }  
     
  }

  handleChange=(e)=>{
const nm=e.target.name;
const val=e.target.value;
this.setState({[nm] :val});

  }

  
submitInfo=(event)=>{
  event.preventDefault();
  alert("called");
const requestOptions={
method:'POST',
headers : {

  'Content-Type' :'application/JSON'
},
body : JSON.stringify({
    uid:this.state.uid,
    pwd:this.state.pwd,
    reg_date:this.state.reg_date,
    reg_amt:this.state.reg_amt,
    truck_no:this.state.truck_no,
    name:this.state.name,
    address:this.state.address,
    source:this.state.source,
    destination:this.state.destination,
    contact:this.state.contact,
    availability_status:this.state.availability_status
    
})
};
fetch("http://localhost:8080/registert",requestOptions)
.then(res=> res.json())
.then(data=>this.setState({truckowner:data}))
}

 
render()
{
return(
   <div>
<h1> TruckOwner Registration Page</h1>
  <form>
   Enter Username : <input type="text" name="uid" onChange={this.handleChange}/><br/>
    Enter Password : <input type="pwd" name="pwd" onChange={this.handleChange}/><br/>
    Enter Registration date : <input type="date" name="reg_date" onChange={this.handleChange}/><br/>
    Enter Registration amount : <input type="text" name="reg_amt" onChange={this.handleChange}/><br/>
    Enter Truck Number : <input type="text" name="truck_no" onChange={this.handleChange}/><br/>
    Enter Name : <input type="text" name="name" onChange={this.handleChange}/><br/>
    Enter Address : <input type="address" onChange={this.handleChange}/><br/>
    Enter Source : <input type="text" name="source"onChange={this.handleChange}/><br/>
    Enter Destination : <input type="text" name="destination" onChange={this.handleChange}/><br/>
    Enter Contact : <input type="text" name="contact" onChange={this.handleChange}/><br/>
    Enter Availability_status : <input type="text" name="availability_status" onChange={this.handleChange}/><br/>
    <input type="submit" onClick={this.submitInfo} value="Register"/>
   </form>
   <br/>
   <p>{this.state.truckowner.name } is inserted</p>
   <p>{this.state.truckowner.truck_no } is inserted</p>



   </div>





);

}

}
export default TruckOwnerRegister;