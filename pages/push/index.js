// pages/cart/index.js
const {
  $Message
} = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText: false,
    dataIndex: 0,
    dataLIst: [],
    titleState: false,
    currentDeleteIndex: "",
    concent: "",
    deleteState: false,
    titleValue: "",
    actionsDelete: [{
      'name': "删除",
      'color': "#2d8cf0"
    }, {
      'name': "取消",
      'color': "#19be6b"
    }],
    actionsTitle: [{
      'name': "确定",
      'color': "#2d8cf0"
    }, {
      'name': "取消",
      'color': "#19be6b"
    }]
    // tempFilePathArray: [],
    // tempFileImg: ""
  },

  //上传图片
  upLoadImg() {
    var that = this;
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
        imgData.indexView = that.data.dataIndex;
        that.data.dataIndex++
          that.setData({
            dataLIst: that.data.dataLIst,
            dataIndex: that.data.dataIndex
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
        videoData.indexView = that.data.dataIndex;
        that.data.dataIndex++
          that.setData({
            dataLIst: that.data.dataLIst,
            dataIndex: that.data.dataIndex
          })
      }
    })
  },

  //得到当前title
  getTitleValue({
    detail
  }) {
    this.setData({
      titleValue: detail.detail.value
    })
    console.log(this.data.titleValue)
  },

  //删除事件
  deleteView(e) {
    this.setData({
      currentDeleteIndex: e.currentTarget.id,
      deleteState: true
    })
  },

  deleteActive({
    detail
  }) {
    var that = this
    var index = detail.index;
    if (index === 0) {
      that.data.dataLIst.forEach(function(item, index) {
        if (item.indexView == that.data.currentDeleteIndex) {
          that.data.dataLIst.splice(index, 1)
        }
      })
      this.setData({
        dataLIst: that.data.dataLIst,
        deleteState: false
      })
      $Message({
        content: '删除成功'
      });
    }
  },

  //上传文章
  upLoadText() {
    var that = this
    this.setData({
      showText: true
    })
  },

  cancelBoxFunc() {
    this.setData({
      showText: false
    })
  },

  sureBoxFunc() {
    var that = this
    var textData = {};
    textData.value = that.concent;
    textData.type = 0;
    that.data.dataLIst.push(textData)
    textData.indexView = that.data.dataIndex
    that.data.dataIndex++
      that.setData({
        dataLIst: that.data.dataLIst,
        dataIndex: that.data.dataIndex
      })
    that.cancelBoxFunc()
  },

  getTextValue(e) {
    this.concent = e.detail.value;
  },

  submitValue() {
    if (!this.data.dataLIst.length) {
      $Message({
        content: '请上传内容',
        type: 'warning'
      });
      return
    }
    this.setData({
      titleState: true
    })
  },


//提交上传
  submitTitle({
    detail
  }) {
    var that = this
    var index = detail.index;
    if (index == 0) {
      var currentData = {}
      currentData.titleValue = that.data.titleValue;
      currentData.datalist = that.data.dataLIst;
      currentData.openId = that.app.globalData.openId;
      currentData.avatarUrl = that.app.globalData.userInfo.avatarUrl;
      currentData.nickName = that.app.globalData.userInfo.nickName;
      console.log(currentData)
      //提交数据
      wx.request({
        url: 'http://localhost:3000/postFile/saveFabu',
        data: currentData,
        method:'post',
        success: function (data) {
          if (data.data.success) {
            $Message({
              content: data.data.message
            });
            setTimeout(function () {
              wx.switchTab({
                url: '../find/index'
              })
              console.log(12313)
            }, 1000)
          }
        }
      })
      console.log(that.app.globalData.openId, that.app.globalData.userInfo.avatarUrl, that.app.globalData.userInfo.nickName)
    }
   
    that.setData({
      titleState: false
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.app = getApp()
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