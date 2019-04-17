var Vacancy= require('../models/Vacancy')
const validator = require('../validations/vacancyValidations')
const User = require('../models/Users')
 
//var notification = require("../models/Notification")

exports.getAllVacancies = async function(req,res){
    const vacancy= await Vacancy.find()
    res.json({data: vacancy})
}

exports.getAllFinalVacancies = async function(req,res){
    const vacancy= await Vacancy.find({
        status : true
    })
    res.json({data: vacancy})
}

exports.createVacancy = async function(req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVacancy = await Vacancy.create(req.body)
        res.json({msg:'Vacancy was created successfully', data: newVacancy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}

exports.updateVacancy = async function(req,res){
    try {
        const id = req.params.id
        const updateVacancy = await Vacancy.findById(id)
        if(!updateVacancy) return res.status(404).send({error: 'Vacancy does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const upVacancy = await Vacancy.updateOne(req.body)

        var acceptedMember = SeeIfMemberIsAcceptedInBody(req.body)
        if(!acceptedMember)
        {
             // If the update is to the vacancy itself, send a notification to everyone who applied
             NotifyAllApplicantsThatVacancyUpdated(updateVacancy)
        }
        else{
            // If the update is to accept a member, send a notification to that member only
            SendNotificationToAcceptedMember(acceptedMember,updateVacancy.empID)
        }

        //if(Object.keys(req.body.applicants).includes({"accepted" : "true"}))
        res.json({msg: 'Vacancy updated successfully', data:updateVacancy.applicants})
        
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

function SeeIfMemberIsAcceptedInBody(reqbody)
{
    var applicants = reqbody.applicants
    if(applicants == null) return;
    for (var i = 0; i < applicants.length; i++) {
        // if a member is updated in the body of the request to be accepted 
        if(applicants[i].accepted === "true")
        {
            return applicants[i]
        }   
    } 
}
/*
// Takes an accepted member and employer ID
async function SendNotificationToAcceptedMember(acceptedMember, employerID)
{
    //console.log(acceptedMember.memberID +"      " + employerID )

    var memberIDD = acceptedMember.memberID
    var notification =  {
        "From": employerID + "", // empID?
        "To": memberIDD + "",
        "Time": "1/2/2019",
        "Type": "Vacancy",
        "Title": "You have been accepted to our vacancy!"
    }

    try
    {
        // Send a notification to the accepted member (sends 1 notif)
        await axios.post('http://localhost:3000/api/notifications/',notification)
    }
    catch(error)
    { 
        console.log(error)
    }
}

async function NotifyAllApplicantsThatVacancyUpdated(vacancyy)
{
    var applicants = vacancyy.applicants
    var employerIDD = vacancyy.empID
    for (var i = 0; i < applicants.length; i++) {

        var memberIDD = applicants[i].memberID
        //create the notification
        var notification =  {
            "From": employerIDD + "", // empID?
            "To": memberIDD + "",
            "Time": "1/2/2019",
            "Type": "Vacancy",
            "Title": "A vacancy you've applied to has been updated"
        }
        try
        {
            // Post a notification for every applicant
            await axios.post('http://localhost:3000/api/notifications/',notification)
        }
catch(error)
        { 
            console.log(error)
        }
    } // end loop
    // applicants.filter(member => member.accepted === "false") // finds all not accepted members
    // applicants.find(member => member.accepted === "false") // finds only one
}
*/
exports.deleteVacancy = async function(req,res){
    try {
        const id = req.params.id
        const deletedVacancy = await Vacancy.findByIdAndDelete(id)
        res.json({msg:'Vacancy was deleted successfully', data: deletedVacancy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}
exports.findVacancy = async function(req,res){
    try {
        const id = req.params.id
        const Vacancyy = await Vacancy.findById(id)
        if(!Vacancyy) return res.status(404).send({error: 'Vacancy does not exist'})
        res.json({msg: 'Vacancy found successfully', data: Vacancyy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

//handling applications
//finds the required vacancy and selects the applicants attribute which is an array of ids of people who applied to this job
exports.viewAllApplicants = async(req,res)=>{
    try {
        const id = req.params.id
        const vacancy = await Vacancy.findById(id)
        if(!vacancy) return res.status(400).send({ error: 'vacancy does not exist' })
        var query = await Vacancy.find({
            _id:id
        }).select('applicants')
        res.json({msg: 'found the vacancy successfully, here is the applicants', data: query})
       }
       catch(error) {
           console.log(error)
       } 
}


//returns the length of the attribute applicants of a vacancy
exports.viewNumberOfApplicants = async function(req,res){
    try {
        const id = req.params.id
        const vacancy = await Vacancy.findById(id)
        if(!vacancy) return res.status(404).send({ error: 'vacancy does not exist' })
        res.json({msg: 'number of applicants is', data: Vacancyy.applicants.length})
       }
       catch(error) {
           console.log(error)
       } 
}
//applies to a vacancy by getting the applicants attributes and putting an object body with the id in it
// then updating the given vacancy with the new applicants attribute
exports.apply= async (req,res)=>{
    try {
        const id = req.params.id
        const userId = req.body.userId
        const vacancy = await Vacancy.findById(id)
        const user = await User.findById(userId)
        
        const isValidated = validator.applyValidation(req.body)
        if(isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        if(!vacancy) return res.status(404).send({ error: 'vacancy does not exist' })
        if(!user) return res.status(404).send({ error: 'user does not exist' })
        for(i=0;i<vacancy.applicants.length;i++){
            if(vacancy.applicants[i]===userId){
              return res.json({msg:'error 400 you already applied to this vacancy',error:400})
            }
        }
        for(i=0;i<user.appliedVacancy.length;i++){
            if(user.appliedVacancy==id){
              return res.json({msg:'error 400 you already applied to this vacancy',error:400})
            }
        }
        user.appliedVacancy.push(id)
        vacancy.applicants.push(userId)
        const vacancyUpdateBody={
         "applicants":vacancy.applicants
           }
        const userUpdateBody={
            "appliedVacancy":user.appliedVacancy
           }
        await Vacancy.findByIdAndUpdate(id,vacancyUpdateBody)
        await User.findByIdAndUpdate(userId,userUpdateBody)
        updatedVacancy = await Vacancy.findById(id)
        updatedUser = await User.findById(userId)
        res.json({msg: 'we applied to you', data: updatedVacancy})
       }
       catch(error) {
           console.log(error)
       } 
}
//canceling an application by finding the vacancy by id looping through the list of applicants and deleting the id of the user
exports.cancelApplication= async (req,res)=>{
    try {
        // declaring inputs
        const isValidated = validator.applyValidation(req.body)
        if(isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        
        const vacancyId = req.params.id
        const userId = req.body.userId
        
        const vacancy = await Vacancy.findById(vacancyId)
        const user = await User.findById(userId)
        if(!vacancy) return res.status(404).send({ error: 'vacancy does not exist' })
        if(!user) return res.status(404).send({ error: 'user does not exist' })
        
        for(i=0;i<vacancy.applicants.length;i++){
            if(vacancy.applicants[i]===userId){
               vacancy.applicants.splice(i,1)
               const vacancyUpdateBody={
                applicants:vacancy.applicants
               }
               for(j=0;j<user.appliedVacancy.length;j++){
            console.log('current vacancy is '+user.appliedVacancy[j])
                if(user.appliedVacancy[j]===vacancyId){
                    user.appliedVacancy.splice(j,1)
                    const userUpdateBody={
                     appliedVacancy:user.appliedVacancy
                    }
                    await User.findByIdAndUpdate(userId,userUpdateBody)
                    await Vacancy.findByIdAndUpdate(vacancyId,vacancyUpdateBody)
                    updatedVacancy = await Vacancy.findById(vacancyId)
                    updatedUser = User.findById(userId)
                    return res.json({msg: 'you cancelled your application',data:updatedVacancy})
                }
            }
               
               
               
            }
       }
       res.json({msg:'you didnt apply for this vacancy',error:404})
}
catch(error) {
    console.log(error)
 } 
}



/*exports.closeVacancy = async (req,res)=>{
    res.json({msg:"we closed the vacancy",data:Vacancy.findByIdAndUpdate(req.params.id,Vacancy.findByIdAndUpdate(req.params.id,body={close:true}))})
}*/


// Search format in POST body: { "attribute" : "attributeyouwantHERE" , "value" : "valueyouwantHERE"}
exports.search = async function(req,res){
    const bodyAttribute = req.body.attribute
    const bodyValue = req.body.value


    if(bodyAttribute === "careerLevel")
    {
        var returnVacancy = await Vacancy.find({
        careerLevel : bodyValue
        })
    }
    else if(bodyAttribute === "jobDescription")
    {
        var returnVacancy = await Vacancy.find({
        jobDescription : bodyValue
        })
    }
    else if(bodyAttribute === "educationLevel")
    {
        var returnVacancy = await Vacancy.find({
        educationLevel : bodyValue
        })
    }
    else if(bodyAttribute === "partnerId")
    {
        var returnVacancy = await Vacancy.find({
        partnerId : bodyValue
        })
    }
    else if(bodyAttribute === "skillsRequired")
    {
        var returnVacancy = await Vacancy.find({
        skillsRequired : bodyValue
        })
    }
    else if(bodyAttribute === "applicants")  // Can search for vacancies with applicants by memberID
    {
        // Different because body attribute is a complex array
        var returnVacancy = await Vacancy.find({
        $or : [ {applicants : { memberID : bodyValue , accepted : "true"}} , {applicants : { memberID : bodyValue , accepted : "false"}} ]
        })
    }
    else if(bodyAttribute === "status")
    {
        var returnVacancy = await Vacancy.find({
        status : bodyValue
        })
    }
    else if(bodyAttribute === "closed")
    {
        var returnVacancy = await Vacancy.find({
        closed : bodyValue
        })
    }
    else if(bodyAttribute === "tags")
    {
        var returnVacancy = await Vacancy.find({
        tags : bodyValue
        })
    }

    res.json({data:returnVacancy})
}