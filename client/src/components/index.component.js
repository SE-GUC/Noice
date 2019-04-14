import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Index extends Component {constructor(props){
    
    super(props)
    this.state={
      partners:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/events')
     .then(res => this.setState({partners:res.data.data})
     )
  }
  render() {
    const partners = this.state.partners;
    return this.state.partners.map( (partner) => {
      return (
        <ul>
          id: {partner._id} |
          age: {partner.Name} |
          name: {partner.Owner} |
          Company Name: {partner.Type}

        </ul>
      )
    })
  }
}
