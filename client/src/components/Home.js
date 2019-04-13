import React, { Component } from 'react'
const axios = require('axios');
 class Home extends Component {
  constructor(props){
  super(props)
  this.state={
    vacancies:[]
  }
}
  
  
  async componentWillMount(){
    await axios.get('http://localhost:3000/api/vacancy/')
    .then(data => this.setState({vacancies:data}))
  }

  render() {  
    const eventItem =  this.state.events.map(vacancy =>(
      <div Key={vacancy.id}>
      <h3>{vacancy.careerLevel}</h3>
      <p> {vacancy.description}</p>
      </div>
    ))
    return (
      <div>
        <h1>Welcome Home</h1>
        <h2>our latest Events</h2>
        {eventItem}
      </div>
    )
  }
}

export default Home
