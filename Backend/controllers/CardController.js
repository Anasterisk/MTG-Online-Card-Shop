const {User, Card, List} = require ('../models')

const GetAllCard = async (req, res) =>{
    try{
        const card = await Card.findAll()
        res.send(reviews)
    } catch (error){
        throw error
    }
}
const GetCardsByList = async(req, res)=>{
    try {
        let list = parseInt(req.params.listId)
        const cards= await Card.findAll({
            where: {listId: list},
            include:[{model: User, as:'cards_owned', attributes:['username']}]
        })
    } catch (error){
        throw error
    }
}

const AddCard = async (req, res) => {
    try {
      
    let userId = req.params.userId
    let listId = req.params.listId
    let body = req.body

    const card = await Card.create(
    { userId, listId, ...body }
  
    )
    res.send(card)

    } catch (error) {
      throw error
    }
  }

  const DeleteCard = async (req, res) => {
    try {
      let cardId = (req.params.card_id)
      await Card.destroy({where:{id:cardId}})
      res.send({message:`Deleted card with an card id of ${cardId}`})
    } catch (error) {
      throw error
    }
  }

  const UpdateCard = async (req, res) => {
    try {
      let cardId = parseInt(req.params.card_id)
      let updatedCard = await Card.update(req.body, {where:{id: cardId}, returning: true})
      res.send(updatedCard)
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    GetAllCard,
    GetCardsByList,
    AddCard,
    DeleteCard,
    UpdateCard,
  }