const user=require('../../models/User');

let userList=document.querySelector('.user-list');

window.addEventListener('DOMContentLoaded',()=>{
    user.findAll().then((result) => {
        console.log(result)
        userList.appendChild(result)
        
    }).catch((err) => {
        console.log(err)
    });

})