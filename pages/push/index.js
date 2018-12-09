// pages/cart/index.js
const {
  $Message
} = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText:false,
    dataLIst: [],
    concent:""
    // tempFilePathArray: [],
    // tempFileImg: ""
  },


  //上传图片
  upLoadImg() {
    var that = this;
    // if (that.data.tempFilePathArray.length > 8) {
    //   $Message({
    //     content: '最多只能上传九张图片',
    //     type: 'warning'
    //   });
    //   return
    // }
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePathArray = that.data.tempFilePathArray
        res.tempFilePaths[0]
        var imgData = {}
        imgData.src = res.tempFilePaths[0];
        imgData.type = 1;
        that.data.dataLIst.push(imgData)
        that.setData({
          dataLIst: that.data.dataLIst
        })
      }
    })
  },

  // 上传视频
  upLoadVideo() {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        var videoData = {};
        videoData.src = res.tempFilePath;
        videoData.type = 2;
        that.data.dataLIst.push(videoData)
        that.setData({
          dataLIst: that.data.dataLIst
        })
      }
    })
  },

  //上传文章
  upLoadText(){
    var that = this
    this.setData({
      showText:true
    })
  },

  cancelBoxFunc(){
    this.setData({
      showText: false
    })
  },

  sureBoxFunc(){
    var that =this
    var textData = {};
    textData.value = that.data.concent;
    textData.type = 0;
    console.log(textData)
    that.setData({
      dataLIst: that.data.dataLIst
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
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
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})