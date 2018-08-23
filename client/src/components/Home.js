import React, {component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
    return ( 
        <div className="text-center">
        <Navbar/>
             <h1>Welcome to the Home Page</h1>
             <p> Please take some time to register for the website</p>  
             <Link to="/forms"><button className="btn btn-primary">Register Here</button></Link> 
        </div>
     );
}
 
export default Home;
