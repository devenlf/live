// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameUser:"",
    hobby:"",
    phone:"",
    sex:"",
    level:"",
    age:"",
    namePhoto:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取应用实例
    this.app = getApp()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getUserData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log(12313123)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  //拉去用户信息
  getUserData: function() {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/users/userInfo',
      method: 'post',
      data: {
        id: that.app.globalData.openId
      },
      success: function(data) {
        var dataValue = data.data.data
        console.log(that.app.globalData.userInfo)
        if (Object.keys(dataValue).length!==0){
          that.setData({
            hobby: dataValue.hobby,
            phone: dataValue.phone,
            sex: dataValue.sex,
            level: dataValue.grade,
            age: dataValue.age,
            namePhoto: that.app.globalData.userInfo.avatarUrl,
            nameUser: that.app.globalData.userInfo.nickName
          })
        }
      }
    })
  }
})