import React from "react";
import mystore from "./store";
class CustomerRegister extends React.Component {

    constructor(props)
    {
   super(props);
    this.state={
          uid:"",
          pwd:"",
          reg_date:"",
          reg_amt:"",
         name:"",
         address:"",
         contact:"",
         gstin:"",
         customer:{}
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
    name:this.state.name,
    address:this.state.address,
    contact:this.state.contact,
    gstin:this.state.gstin
    
})
};
fetch("http://localhost:8080/registerc",requestOptions)
.then(res=> res.json())
.then(data=>this.setState({customer:data}))
}

 
render()
{
return(
   <div>
<h1> Customer Registration Page</h1>
  <form>
   Enter Username : <input type="text" name="uid" onChange={this.handleChange}/><br/>
    Enter Password : <input type="pwd" name="pwd" onChange={this.handleChange}/><br/>
    Enter Registration date : <input type="date" name="reg_date" onChange={this.handleChange}/><br/>
    Enter Registration amount : <input type="text" name="reg_amt" onChange={this.handleChange}/><br/>
    Enter Name : <input type="text" name="name" onChange={this.handleChange}/><br/>
    Enter Address : <input type="text"name="address" onChange={this.handleChange}/><br/>
    Enter Contact : <input type="text" name="contact" onChange={this.handleChange}/><br/>
    Enter GSTIN : <input type="text" name="gstin" onChange={this.handleChange}/><br/>
    <input type="submit" onClick={this.submitInfo} value="Register"/>
   </form>
   <br/>
   <p>{this.state.customer.cust_id } is inserted</p>



   </div>





);

}

}
export default CustomerRegister;