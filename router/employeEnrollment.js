const express=require('express')
const router=express.Router()

const {getALLEmployees,postEmployee,getAEmployee,updateEmployee,deleteEmployee,getEmployee} = require('../controllers/employeEnrollment')

router.route('/').get(getALLEmployees).post(postEmployee)
router.route('/:id').get(getEmployee,getAEmployee).patch(getEmployee,updateEmployee).delete(getEmployee,deleteEmployee)

module.exports=router