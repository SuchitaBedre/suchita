import React from "react";

class CustomerrHome extends React.Component{
constructor(props)
{
    super(props);
}

    render(){
   return(
<div>
    <h1> Welcome, {JSON.parse(localStorage.getItem("loggedinuser")).name}</h1>
    <ul>
   <li> <a href="#">Create Orders</a></li>
</ul>
</div>


   );


    }



}

export default CustomerrHome;