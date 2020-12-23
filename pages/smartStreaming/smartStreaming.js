// pages/smartStreaming/smartStreaming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img11.360buyimg.com/ddimg/jfs/t1/122465/21/18161/177718/5faa026bEcde9b6fa/710f1e1b6e226a6e.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/120744/18/17968/171327/5faa027dE90152b18/9e13f3d05bbebe04.png',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../pSixZeroZero/pSixZeroZero"
      })
    } else {
      wx.navigateTo({
        url: "../sEightZeroZeroA/sEightZeroZeroA"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})