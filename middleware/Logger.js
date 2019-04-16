const moment = require('moment')
const logger = (req,res,next) =>  {
    console.log(`${req.protocol} to the route ${req.originalUrl} at ${moment().format()}`)
    next()
}
beforeAll(async()=>{
    console.log("dropping the db")
    await db.dropDatabase()
   console.log("db dropped?")
  })

module.exports = logger,beforeAll