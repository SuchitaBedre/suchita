import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Login from './component/Login'
import CustomerHome from './component/CustomerHome';
import TruckOwnerHome from './component/TRuckOwnerHome';
import {Route,Link,Router, BrowserRouter} from "react-router-dom";
import Home from './component/Home';
import TruckOwnerRegister from './component/TruckOwnerRegister';
import CustomerRegister from './component/CustomerRegister';
import Admin from './component/Admin';
function App() {
  return (
   
  <div>
  
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> <br/>
      <Link to="/login">Login</Link> <br/>
     
      <Link to="/cregister">CustomerRegister</Link>  <br/>
       <Link to="/tregister">Truck Owner Register</Link>  <br/>
      
    </nav>
    
   
     <Route path="/"component={Home} exact/>
     <Route path="/login" component={Login} />
     <Route path="/cregister" component={CustomerRegister} />  
     <Route path="/tregister" component={TruckOwnerRegister} />
     <Route path="/admin" component={Admin} />
     <Route path="/truckownerhome"component={TruckOwnerHome }/>
     <Route path="/customerhome"component={CustomerHome}/>

   
   </BrowserRouter>
   
   </div>
        
  );
}

export default App;
