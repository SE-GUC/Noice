import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Partners extends React.Component {
  constructor(props){
    super(props)
    this.state={
      partners:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/partners')
     .then(res => this.setState({partners:res.data.data})
     )
  }
  render() {
    const partners = this.state.partners;
    return this.state.partners.map( (partner) => {
      return (
        <ul>
          age: {partner.age} |
          name: {partner.name} |
          Company Name: {partner.companyName}

        </ul>
      )
    })
  }
}


export default Partners