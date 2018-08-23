import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/"><a class="nav-link" >Home <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to="paragraphs"><a class="nav-link">Pargraphs</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to="forms"><a class="nav-link">Register</a></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}
 
export default Navbar;