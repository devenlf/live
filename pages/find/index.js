// pages/classify/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listClassDate: [
      { classTitle:"案说法大苏打大苏打"}
    ],
    isLoadData: true
  },

  //事件处理函数
  bindViewTap: function(event) {
    wx.navigateTo({
      url: '../findPage/index?id=' + event.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/25572/wxchengxu/progame', //仅为示例，并非真实的接口地址
      data: {
        id: 0
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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

  }
})