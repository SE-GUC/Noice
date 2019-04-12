import React, {Component} from 'react';
import axios from 'axios';

export default class UpdateMember extends Component {

constructor(props) {
super(props);

this.onChangeID = this.onChangeID.bind(this);
this.onChangeCareerLvl = this.onChangeCareerLvl.bind(this);
this.onChangeJobDesc = this.onChangeJobDesc.bind(this);
this.onChangeJobTyp = this.onChangeJobTyp.bind(this);
this.onChangeEducLvl = this.onChangeEducLvl.bind(this);
this.onChangeEmpID = this.onChangeEmpID.bind(this);
this.onChangeTime = this.onChangeTime.bind(this);
this.onChangeSkillsReq = this.onChangeSkillsReq.bind(this);
this.onChangeJobReq = this.onChangeJobReq.bind(this);
this.onSubmit = this.onSubmit.bind(this);

this.state = {
ID: '',
CareerLvl: '',
JobDesc: '',
JobTyp: '',
EducLvl: '',
EmpID: '',
Time: '',
SkillsReq: '',
JobReq: '',
}
}

onChangeID(e) {
console.log("You typed in the ID textbox")
this.setState({
ID: e.target.value
});
}

onChangeCareerLvl(e) {
this.setState({
Name: e.target.value
});
}

onChangeJobDesc(e) {
this.setState({
Age: e.target.value
});
}

onChangeJobTyp(e) {
this.setState({
Gender: e.target.value
});
}

onChangeEducLvl(e) {
this.setState({
Address: e.target.value
});
}

onChangeEmpID(e) {
this.setState({
Email: e.target.value
});
}

onChangeTime(e) {
this.setState({
Phonenumber: e.target.value
});
}

onChangeSkillsReq(e) {
this.setState({
Skills: e.target.value
});
}

onChangeJobReq(e) {
this.setState({
Interests: e.target.value
});
}


onSubmit(e) {
e.preventDefault();
const id = this.state.ID
const obj = {
careerLvl: this.state.CareerLvl,
jobDesc: this.state.JobDesc,
jobTyp: this.state.JobTyp,
educLvl: this.state.EducLvl,
empID: this.state.EmpID,
time: this.state.Time,
skillsReq: this.state.SkillsReq,
jobReq: this.state.JobReq
};
axios.put(`http://localhost:5000/api/vacancy/${id}`, obj)
.then(res => console.log(res.data));

}

render() {
return (
<div>
<h3>Update Vacancy</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
<label>id: </label>
<input type="text"
className="form-control"
value={this.state.ID}
onChange={this.onChangeID}
/>
</div>
<div className="form-group">
<label>CareerLvl: </label>
<input type="text"
className="form-control"
value={this.state.CareerLvl}
onChange={this.onChangeCareerLvl}
/>
</div>
<div className="form-group">
<label>JobDesc: </label>
<input type="text"
className="form-control"
value={this.state.JobDesc}
onChange={this.onChangeJobDesc}
/>
</div>
<div className="form-group">
<label>JobTyp: </label>
<input type="text"
className="form-control"
value={this.state.JobTyp}
onChange={this.onChangeJobTyp}
/>
</div>
<div className="form-group">
<label>EducLvl: </label>
<input type="text"
className="form-control"
value={this.state.EducLvl}
onChange={this.onChangeEducLvl}
/>
</div>
<div className="form-group">
<label>EmpID: </label>
<input type="text"
className="form-control"
value={this.state.EmpID}
onChange={this.onChangeEmpID}
/>
</div>
<div className="form-group">
<label>Time: </label>
<input type="text"
className="form-control"
value={this.state.Time}
onChange={this.onChangeTime}
/>
</div>
<div className="form-group">
<label>SkillsReq: </label>
<input type="text"
className="form-control"
value={this.state.SkillsReq}
onChange={this.onChangeSkillsReq}
/>
</div>
<div className="form-group">
<label>JobReq: </label>
<input type="text"
className="form-control"
value={this.state.JobReq}
onChange={this.onChangeJobReq}
/>
</div>
<br/>
<div className="form-group">
<input type="submit" value="Update Vacancy" className="btn btn-primary" />
</div>
</form>
</div>
)
}
}

