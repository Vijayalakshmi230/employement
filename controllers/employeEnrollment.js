const employeeModel=require('../models/employeEnrollment')
const getALLEmployees=async(request,response)=>{
    try{
        const employee=await employeeModel.find()
        response.status(201).json(employee)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}
const postEmployee=async(request,response)=>{
    const newEmployee=new employeeModel({
        name:request.body.name,
        department:request.body.department,
        age:request.body.age,
        salary:request.body.salary
    })
    try{
        const employee=await newEmployee.save();
        response.status(201).json(employee)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const getAEmployee=(request,response)=>{
    response.status(200).json(response.employee)
}

const updateEmployee=async(request,response)=>{
    if(request.body.name!=null){
        response.employee.name=request.body.name
    }
    if(request.body.department!=null){
        response.employee.department=request.body.department
    }
    if(request.body.age!=null){
        response.body.age=request.body.age
    }
    if(request.body.salary!=null){
        response.body.salary=request.body.salary
    }
    try{
        const updateEmployee=await response.employee.save();
        response.status(201).json(updateEmployee);
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

const deleteEmployee = async(request,response)=>{
    try{
        await response.employee.deleteOne();
        response.json({message:`Deleted Movies ${res.employee.name}`})
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

async function getEmployee(request,response,next){
    let employee;
    try{
        employee=await employeeModel.findyById(req.params.id)
        if(employee==null){
            return response.status(404).json({message:`Cannot find employee with id ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).json({message:error.message})
    }
    response.employee=employee;
    next()
}

module.exports={getALLEmployees,postEmployee,getAEmployee,updateEmployee,deleteEmployee,getEmployee}
