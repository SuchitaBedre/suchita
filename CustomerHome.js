import React from "react";
import mystore from "./store";
class CustomerrHome extends React.Component{
constructor(props)
{
    super(props);
}

logout=()=>{

    mystore.dispatch({type:'LOGGEDOUT'});
    localStorage.removeItem("loggedinuser");
    this.props.history.push("/")
}

    render(){
   return(
<div>
    <h1>{JSON.parse(localStorage.getItem("loggedinuser")).name}</h1>
    <ul>
   <li> <a href="/order">Create Orders</a></li>
   <a href="#" onClick={this.logout}>Logout</a>
</ul>
</div>


   );


    }



}

export default CustomerrHome;