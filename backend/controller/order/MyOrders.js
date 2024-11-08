const orderModel = require('../../models/orderModel')

const myOrder = async (req, res) => {
  try{
    const currentUser = req.userId

    const myOrderList = await orderModel.find({userId : currentUser}).sort({createdAt : -1})

    res.status(200).json({
      data: myOrderList,
      success: true,
      error: false,
      message : " myOrder fetch success"
    })

  }catch(err){
    res.status(400).json({
      message : err.message || err,
      error : true,
      success : false
    })
  }

}

module.exports = myOrder