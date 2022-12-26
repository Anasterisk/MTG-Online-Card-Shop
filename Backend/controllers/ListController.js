const {User, List, Card} = require('../models')

const GetAllListAndAffiliation = async(req,res)=>{
    try{
        const lists = await List.findAll({
            include:[{model:User, as:'userlist'}]
        })
        res.send(lists)
    } catch(error){
        throw error
    }
}

const GetIndividualListAndAffiliation = async (req, res) => {
    try {
        const list = await List.findByPk(req.params.listId,{        
        include:[{model:User, as:'userlist'}]        
        })
        res.send(list)
    } catch (error) {
      throw error
    }
  }

  const CreateNewList = async (req, res) => {
    try {
      
    let userId = req.params.user_id
    let body = req.body

    const list = await List.create(
    { userId, ...body }
  
    )
    res.send(list)

    } catch (error) {
      throw error
    }
  }

  const DeleteList = async (req, res) => {
    try {
      let listId = (req.params.list_id)
      await List.destroy({where:{id:listId}})
      res.send({message:`Deleted list with an id of ${listId}`})
    } catch (error) {
      throw error
    }
  }

  const UpdateList = async (req, res) => {
    try {
      let listId = parseInt(req.params.list_id)
      let updatedList = await list.update(req.body, {where:{id: listId}, returning: true})
      res.send(updatedList)
    } catch (error) {
      throw error
    }
  }

  module.exports={
    GetAllListAndAffiliation,
    GetIndividualListAndAffiliation,
    CreateNewList,
    DeleteList,
    UpdateList,
  }

