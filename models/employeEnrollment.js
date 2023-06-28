const mongoose=require('mongoose')
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:'25',
        max:'60',
        required:true
    },
    salary:{
        type:Number,
        min:'10000',
        max:'100000',
        requied:'true'
    }
})
module.exports=mongoose.model('employee',employeeSchema)