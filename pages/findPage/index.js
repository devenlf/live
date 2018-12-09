// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ideaData: {
      textContent: '蛤科和点卡皇帝哈德看哈记得哈机顶盒即可黄金卡和尚大家还是贷记卡和点卡活动教案和打卡机圣诞卡上的卡号打卡',
      videoUrl: 'http://www.w3school.com.cn//i/movie.mp4',
      imgArray:[
        // 'http://img3.imgtn.bdimg.com/it/u=2167109969,264433612&fm=26&gp=0.jpg',
        // 'http://img1.imgtn.bdimg.com/it/u=121428672,544424983&fm=26&gp=0.jpg',
        // 'http://img3.imgtn.bdimg.com/it/u=3782062264,3703662915&fm=26&gp=0.jpg'
      ]
    }


  },

  videoErrorCallback: function(e) {
    console.log('视频错误信息:' + e.detail.errMsg);
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