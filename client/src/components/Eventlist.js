import React, {Component} from 'react'
import axios from 'axios'

class Eventlist extends Component {
    state = { 
        events:[]
     }

     componentDidMount(){
        axios.get(`/api/events`)
        .then(res=>{
          console.log(res)
          this.setState({events: res.data})
        });
      }

    render() { 
        return ( 
            <div className="container-fluid m-5">
                <div className="row">
                {this.state.events.map((event,id)=>
                    <div className="col-md-4">
                    <div className="card mb-3" key={id}>
                        <img className="card-img-top" src={event.event_img} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{event.event_title}</h5>
                        <p className="card-text">{event.event_date}</p>
                        <p className="card-text">{event.event_time}</p>
                        <p className="card-text">{event.location}</p>
                        <p>desc</p>
                        <div className="card-text">{event.description}</div>
                        <button type="button" className="btn btn-primary">register</button>
                        </div>
                    </div>
                </div>
                 )}
                </div>
            </div>
         );
    }
} 
export default Eventlist;
