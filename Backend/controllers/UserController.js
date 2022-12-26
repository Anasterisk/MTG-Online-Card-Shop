const {User, List, Card} = require ('../models')
const middleware = require('...middleware')

const GetAllUserProfile = async (req,res) =>{
    try{
        const users = await User.findAll()
        res.send(users)
    } catch (error){
        throw error
    }
}

const GetIndividualUserProfile = async (req,res) =>{
    try{
        const users = await User.findByPk(req.params.userId,{
            include: [{model: List, as: 'user_list'}]
        })
        res.send(users)
    } catch (error){
        throw error
    }
}

const CreateNewUser = async (req,res)=>{
    try {
        const {username, email, password} = req.body
        const user = await User.create(
            {username:username, email:email, password:password}
        )
        res.send(user)
    } catch(error){
    throw error
    }
}



const DeleteAccount = async (req,res) => {
    try {
        let userId = (req.params.userId)
        await User.destroy({where:{id:userId}})
        
        res.send({message:`Deleted account with an id of ${userId}`})
    } catch(error){
    throw error
    }
}

const Login = async (req,res)=>{
    try{
        let user = await User.findOne({
                where: {username: req.body.username},
                raw: true
        })  
        if (user.username == req.body.name && user.password == req.body.password){  
            if(user.length){
            let token_payload = {name: user[0].name, password:user[0]};
            let token = jwt.sign(token_payload, "jwt_secret_password");
            let response = {message: 'Token working', token:token};
            return res.status(200).json(response);
        }   else{
            return res.status("401").send({
                status: 'error',
                msg: 'unauthorized'
        });}

        }
        
       console.log(user!== null)
        }
        catch(error){
            throw error
        }
}


const Login1 = async (req,res)=>{
    try{
        const user = await User.findOne({
            where: {username: req.body.username},
            raw: true
        })
        console.log(user!== null)
        if( user &&  (req.body.password == user.password)){
            return res.status(200).json(response);
        } else {
            return res.status("401").send({
                status: 'error',
                msg: 'unauthorized'
        });}
    } catch (error){   
    throw error
    }
}

module.exports={
    GetAllUserProfile,
    GetIndividualUserProfile,
    CreateNewUser,
    DeleteAccount,
    Login,
    Login1
}