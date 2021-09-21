import React from "react";
import mystore from "./store";
class TruckOwnerHome extends React.Component{
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
<h1> Welcome, {JSON.parse(localStorage.getItem("loggedinuser")).name}</h1>
    <a href="/view">View Orders</a><br/>
    <a href="#" onClick={this.logout}>Logout</a>

</div>


   );


    }



}

export default TruckOwnerHome;