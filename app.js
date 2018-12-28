//app.js
var serverInfo = require('./config.js')
App({
  onLaunch: function() {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    that.getInfoData();
    that.getSession()
      .then(function() {
        // 登录
        that.haveUsed()
      })
  },
  onShow: function() {

  },
  onHide: function() {

  },
  globalData: {
    userInfo: null,
    openId: null
  },

  // wx.checkSession({
  //   success: res => {
  //     console.log(res)
  //   }
  // })

  // 获取用户信息
  getInfoData: function() {
    var that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  //获取Session
  getSession: function() {
    var that = this
    return new Promise(function(resolve, reject) {
      wx.login({
        success: res => {
          var code = res.code
          if (code) {
            wx.request({
              url: 'http://localhost:3000/users/getLogin',
              data: {
                code: code
              },
              success(res) {
                that.globalData.openId = res.data.data.openid;
                console.log('发送登陆码完成')
                resolve()
              }
            })
          } else {
            console.log('获取用户登录状态失败' + res.errMsg)
          }
        }
      })
    })
  },

  //判断是否是新老用户
  haveUsed: function() {
    var that = this
    wx.request({
      url: 'http://localhost:3000/users/ishaveUse',
      method: 'post',
      data: {
        id: that.globalData.openId
      },
      success(data) {
        if (data.data.userState === 0) {

        } else {
          wx.redirectTo({
            url: "../informationpage/index",
          })
        }
      }
    })
  }


})