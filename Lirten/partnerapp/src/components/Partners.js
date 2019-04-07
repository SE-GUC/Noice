import React from 'react';
class Partners extends React.Component {
  constructor(props){
    super(props)
    this.state={
      partners:[],
      loading:true
    };
  }

  componentDidMount(){
    fetch(`http://localhost:5000/api/partners/`).then(res =>{
      console.log(res);
      this.setState({partners:res.data.data});
    });
  }
  render() {
    return <ul>{this.state.partners.map(partner => <li>{partner.name}</li>)}
    </ul>;
  }
}


export default Partners