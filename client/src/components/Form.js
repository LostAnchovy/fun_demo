import React, {Component} from 'react'

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() { 
        return (
            <div className="card">
            <div className="card-header bg-warning">
                Registraiton Here
            </div>    
             <div className="card-body">   
            <form method ="post" action="api/users">
                 <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" name ="firstname" type="text"/>
                 </div>   
                 <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" name ="lastname" type="text"/>
                 </div> 
                 <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name ="email" type="text"/>
                 </div>  
                 <button className="btn btn-primary" type="submit">Submit</button>
             </form>
             </div>   
            </div>   
          );
    }
}
 
export default Forms;