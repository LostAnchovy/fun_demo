import React, {Component} from 'react'
import axios from 'axios'


class Userinfo extends Component {
   
    state = {  
        users:{},
      };
      
    componentDidMount(){
        const {match: {params} } = this.props; 

        axios.get(`/api/user/${params.userId}`)
        .then(res=>{
          console.log(res)
          this.setState({users: res.data})
        });
      }
    
    render() { 
        return ( 
            <div className="container">
            <p>{this.state.users.first_name}</p>
            <p>{this.state.users.last_name}</p>
            <p>{this.state.users.email}</p>
            </div>
         );
    }
}
 
export default Userinfo;