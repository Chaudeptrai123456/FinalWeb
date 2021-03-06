
 
 import crudservice from"../sevice/crud_user";
import newuser from'../sevice/crud_user'
import db from"../models/index"
import res from "express/lib/response";
let gethomepage =  async(req,res) => {
    try {
        let data1 = await db.User.findAll(); 
        let data2 = await db.Allcode.findAll(); 

        return res.render('homepage.ejs',{
            data1:JSON.stringify(data1) ,
            data2:JSON.stringify(data2)
        })
    }catch(e) {
        console.log(e)
    }
    //return res.render('homepage.ejs')

}
let getpersonalpage =(req,res) => {
    return res.render('person/personalpage.ejs')
}

let crud = (req,res)=>{
    return res.render('crud_creat.ejs')
}
let crudprocesssingin= async (req,res)=>{


    let user =  await crudservice.createuser(req.body)


    
    let list = await crudservice.getalluser();
    res.render("displayuserlist.ejs",{
        datatable:list
    })
    
}

let displayalluser = async (req,res)=>{
    let list = await crudservice.getalluser();
    res.render("displayuserlist.ejs",{
        datatable:list
    })
}

let checkuserbyid = async (req,res) =>{
     
    if (req.query.id != null) {
        let userdata =  await crudservice.checkuserbyid(req.query.id)
         
        res.render("crud_update.ejs",{
            id:req.query.id,
            userdata:userdata
        })
    } else {
        res.send("đéo có ID")
    }
    
}

let updateinformationofuser =async (req,res) =>{
    await crudservice.updateuserbyid(req.body)
    let list = await crudservice.getalluser();
    res.render("displayuserlist.ejs",{
        datatable:list
    })
}

let deleteuserbyid = async (req,res)=>{
    if (req.query.id == null) {
        res.send("cút mẹ đi")
    } else {
        await crudservice.deleteuserbyid(req.query.id)
        let list = await crudservice.getalluser();
    res.render("displayuserlist.ejs",{
        datatable:list
    })
    }
     
}


module.exports = {
    //key,value
    gethomepage : gethomepage,
    getpersonalpage:getpersonalpage,
    crud:crud,
    crudprocesssingin:crudprocesssingin,
    displayalluser:displayalluser,
    checkuserbyid:checkuserbyid,
    updateinformationofuser:updateinformationofuser,
    deleteuserbyid:deleteuserbyid
}