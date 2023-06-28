require('dotenv').config()
const express=require('express')
const app=express()
const employeeEnroll=require('./router/employeEnrollment')

const mongoose=require('mongoose')

mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(errormessage)=>console.log(errormessage))
db.once('open',()=>console.log('Connection Established'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
    response.send("Working");
})

app.use('/api/v1/employee',employeeEnroll)
app.listen(8081);