const orderModel = require('../../models/orderModel')
const userModel = require('../../models/userModel')

const AdminAllOrders = async (req, res) => {
  try{
    const currentUser = req.userId
    const user = await userModel.findById(currentUser)
    // check if Admin Or Not
    if(user.role !== 'ADMIN'){
      return res.status(400).json({
        success: false,
        error : true,
        message : 'Not Authorized'
      })
    }

    const AdminAllOrderList = await orderModel.find().sort({createdAt : -1})

    res.status(200).json({
      data: AdminAllOrderList,
      success: true,
      error: false,
      message : " AdminAllOrdersList fetch success"
    })

  }catch(err){
    res.status(400).json({
      message : err.message || err,
      error : true,
      success : false
    })
  }

}

module.exports = AdminAllOrders