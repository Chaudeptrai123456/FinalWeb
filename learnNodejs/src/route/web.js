import express from"express"
 import usercontroller from "../controller/usercontroller"
import homepage from "../controller/hometroller"
let router = express.Router();

let initwebroute = (app) =>{
    router.get("/", homepage.gethomepage)

    router.get("/personalpage",homepage.getpersonalpage)
    
    router.get("/crud",homepage.crud)

    router.post("/crud/post",homepage.crudprocesssingin)

    router.get("/crud/get",homepage.displayalluser)

    router.get("/crud/checkuser",homepage.checkuserbyid)

    router.post("/crud/updateuser",homepage.updateinformationofuser)
    ///crud/delete?id=<%= datatable[i].id%>
    router.get("/crud/delete",homepage.deleteuserbyid)

    router.post("/api/login",usercontroller.handlelogin)



    return app.use("/",router);
}

module.exports = initwebroute