import React from "react";

class Register extends React.Component{

constructor(props)
{

    super(props);
    this.state={
      customer_name:"",
     customer_email:"",
      customer_contact:"",
     area:"",
      city:"",
      pincode:"",
       gstin_number:"",
       
    }
    this.customer_name = this.customer_name.bind(this);
    this.customer_email= this.customer_email.bind(this);
    this.customer_contact= this.customer_contact.bind(this);
    this.area=this.area.bind(this);
    this.gstin_number=this.gstin_number.bind(this);
        this.submitInfo=this.submitInfo.bind(this);
}
customer_name=(event)=>{

    this.setState({customer_name:event.target.value})
}

customer_email=(event)=>{

    this.setState({customer_email:event.target.value})
}
customer_contact=(event)=>{

    this.setState({customer_contact:event.target.value})
}

area=(event)=>{

    this.setState({area:event.target.value})
}

city=(event)=>{

    this.setState({city:event.target.value})
}

pincode=(event)=>{

    this.setState({pincode:event.target.value})
}
gstin_number=(event)=>{

    this.setState({gstin_number:event.target.value})
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
       customer_name:this.state.customer_name,
     customer_email:this.state.customer_email,
       customer_contact:this.state.customer_contact,
      area:this.state.area,
      city:this.state.city,
      pincode:this.state.pincode,
       gstin_number:this.state.gstin_number,
      
})


};

fetch("http://localhost:8080/save",requestOptions)
.then(res=> {
    if(res.status===200)
    {

        alert("success");
        this.props.history.push("/login");
    }

    else
    {
        alert("reg failed");
    }

});
}
render(){
return(

<div>
<h1>Registration Page</h1>
<form onSubmit={this.submitInfo}>

<label>Enter Customer name:</label>
<input type="text" value={this.state.customer_name} onChange={(event)=>{this.customer_name(event)}}/><br/>
<label>Enter Customer email:</label>
<input type="text" value={this.state.customer_email} onChange={(event)=>{this.customer_email(event)}}/><br/>
<label>Enter Customer Primary contact:</label>
<input type="text" value={this.state.customer_contact} onChange={(event)=>{this.customer_contact(event)}}/><br/>
<label>Enter area:</label>
<input type="text" value={this.state.area} onChange={(event)=>{this.area(event)}}/><br/>
<label>Enter City:</label>
<input type="text" value={this.state.city} onChange={(event)=>{this.city(event)}}/><br/>
<label>Enter Pincode:</label>
<input type="text" value={this.state.pincode} onChange={(event)=>{this.pincode(event)}}/><br/>
<label>Enter Customer GSTIN Number:</label>
<input type="text" value={this.state.gstin_number} onChange={(event)=>{this.gstin_number(event)}}/><br/>


<button>Register</button>

</form>

</div>


);


}
}

export default Register;