const {
  $Message
} = require('../../dist/base/index');
// pages/information/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    hobby: [],
    sex: 0, //0女，1男
    valueAge: 1,
    visibleSex: false,
    valueSex: '男',
    valueNickname: '',
    valuehobby: '吃瓜',
    actionsSex: [{
        name: '男',
      },
      {
        name: '女'
      },
      {
        name: '不公开'
      }
    ],
  },

  // globalData: {
  //   openId: null,
  // },

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
    var that = this
    console.log(that.app.globalData.userInfo)
    that.setData({
      valueNickname: that.app.globalData.userInfo.nickName
    })
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

  },

  changeSexFunction: function() {
    this.setData({
      visibleSex: true
    })
  },

  handleCancelSex: function() {
    this.setData({
      visibleSex: false
    })
  },

  handleClickItemSex: function({
    detail
  }) {
    switch (detail.index) {
      case 0:
        this.setData({
          valueSex: '男'
        })
        break;
      case 1:
        this.setData({
          valueSex: '女'
        })
        break;
      case 2:
        this.setData({
          valueSex: '保密'
        })
        break;
      default:
        break;
    }
    this.setData({
      visibleSex: false
    })
  },

  submitRegistered: function() {
    var that = this;
    var dataSubmit = {};
    dataSubmit.naickName = that.data.valueNickname;
    dataSubmit.hobby = that.data.valuehobby;
    dataSubmit.age = that.data.valueAge;
    dataSubmit.sex = that.data.valueSex;
    dataSubmit.id = that.app.globalData.openId;
    console.log(dataSubmit);
    wx.request({
      url: 'http://localhost:3000/users/newUser',
      data: dataSubmit,
      method: 'post',
      success:function(data){
        if (data.data.success){
          $Message({
            content: data.data.message
          });
          setTimeout(function(){
            wx.switchTab({
              url: '../find/index'
            })
            console.log(12313)
          },1000)
        }
      }
    })
  }
})