import userservice from '../sevice/userservice'



let handlelogin = async (req,res)=>{
    let email  = req.body.email
    let password = req.body.password
     
    //check missing inputs
    if (!email || !password) {
        return res.status(500).json({
            errcode:1,
            message:"missing input"
        })
    }
    //check email exist

    let userdata  = await userservice.handleuserlogin(email,password)


    return res.status(200).json({
        user:userdata ? userdata:{}
    })
}

module.exports={
    handlelogin:handlelogin
}