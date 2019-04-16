const funcs = require('./vacancyFn');

/* 
// Depends on the create vacancy
// Any changes you do in create vacancy represent them here
// add these immediately after the create vacancy test
test('Search for a vacancy', async()=>{

    const body={
       "attribute" : "tags" ,
       "value" : "tag1" // if you change the create vacancy tags, reflect the change here
    }
    const response = await funcs.searchVacancy(body)
    expect(response.data.data[0].jobDescription).toEqual("teset")
  
  }) */

// Will get vacancies that are already in the database, so I can not make test for other attributes as these aren't guaranteed
test('Search for a vacancy', async()=>{

    const body={
       "attribute" : "jobDescription" ,
       "value" : "teset" // if you change the create vacancy tags, reflect the change here
    }
    const response = await funcs.searchVacancy(body)
    expect(response.data.data[0].jobDescription).toEqual("teset")
  
})