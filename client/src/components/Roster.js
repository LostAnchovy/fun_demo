import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Roster extends Component {
    state = {  
      persons:[],
    };
    
    componentDidMount(){
      axios.get(`/api/users`)
      .then(res=>{
        console.log(res)
        this.setState({persons: res.data})
      });
    }

    render() { 
        return ( 
          <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-warning"> 
              <h2 className="text-white text-center">Registered Users</h2>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>admin privagles</th>
                </tr>
                <tbody>
                  {this.state.persons.map((person)=>
                <tr>
                  <td><Link to={`/user/${person.id}`}>{person.id}</Link></td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.email}</td>
                  <td><Link to={`/useredit/${person.id}`}><button className="btn btn-warning">Edit</button></Link></td>
                </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
          </div>

            // <ul>
            //   {this.state.persons.map(person=><li>{person.first_name}</li>)}
            //   </ul> 
            // <ul>
            //   {this.state.persons.map(person=>(
            //     <li key={person.id}>{person.email}</li>
            //   ))}
            //   </ul>
         );
    }
}
 
export default Roster;