import React from "react";

class TruckOwnerHome extends React.Component{
constructor(props)
{
    super(props);
}

    render(){
   return(
<div>
<h1> Welcome, {JSON.parse(localStorage.getItem("loggedinuser")).name}</h1>
    <a href="#">View Orders</a>

</div>


   );


    }



}

export default TruckOwnerHome;