const express=require('express')

const User=require('../models/User')
const userDetails = require('../controllers/admin');

const router=express.Router();

router.get('/insert-user',userDetails.getAddUser)

router.post('/get-user',userDetails.postAddUser)
router.get('/user/get-user',userDetails.getAllUsers)

router.delete('/delete-user/:userId', userDetails.deleteUser)

// router.get('/',(req,res)=>{
//     res.send('<h1>Form Submited Succesfully</h1>')
// })
module.exports=router

