import React, {Component} from 'react'

class Eventform extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
            <div className="card">
            <div className="card-header bg-warning">
                Event Registration
            </div>    
             <div className="card-body">   
            <form method ="post" action="api/events">
                 <div className="form-group">
                    <label>Event Title</label>
                    <input className="form-control" name ="eventtitle" type="text"/>
                 </div>  
                 <div className="form-group">
                    <label>Event img</label>
                    <input className="form-control" name ="eventimg" type="text"/>
                 </div>  
                 <div className="form-group">
                    <label>Event Description</label>
                    <textarea className="form-control" name ="description" type="text"/>
                 </div> 
                 <div className="form-group">
                    <label>Event Date</label>
                    <input className="form-control" name ="date" type="date"/>
                 </div>  
                 <div className="form-group">
                    <label>Event Location</label>
                    <input className="form-control" name ="location" type="text"/>
                 </div>  
                 <button className="btn btn-primary" type="submit">Submit</button>
             </form>
             </div>   
            </div>   
        </div>
         );
    }
}
 
export default Eventform;