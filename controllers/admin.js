const User = require('../models/User');
const path=require('path')

exports.getAddUser=async(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registration.html'))
}

exports.postAddUser=async(req,res)=>{
     console.log(req.body)
    const name=req.body.username;
    const email=req.body.email;
    const phone=req.body.phone_no;

    User.create({
        name:name,
        email:email,
        phone_no:phone
    })
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
   
    res.redirect('/insert-user')
}
exports.getAllUsers=async(req,res)=>{
    User.findAll().then(
        result=> res.send(result)
    )
        .catch(err=>console.log(err))
}
exports.deleteUser = async(req,res,next)=>{
    try {
        let userId = req.params.userId ;
        console.log(userId)
        if(!userId){
           return res.status(400).json({error:'id is missing'})
        }
        await User.destroy({where:{id:userId}})
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json('error occured')
    }
} 
