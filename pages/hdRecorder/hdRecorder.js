// pages/hdRecorder/hdRecorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img13.360buyimg.com/ddimg/jfs/t1/128306/31/18152/215565/5fa9ffe8E6e23d4a3/bdc4ddd6ebb69b02.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/139241/38/13868/207858/5fa9fffaE3525bcd8/53ef46aba37ee71e.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/150772/7/6336/205097/5fabaff5E45a8e0db/5e64154e521a10e4.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/148275/5/13870/212174/5faa0022E6cb047da/8e89993222aeeb9e.png',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../sSixZeroZero/sSixZeroZero"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../sSevenZeroZero/sSevenZeroZero"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../sSevenZeroOne/sSevenZeroOne"
      })
    } else {
      wx.navigateTo({
        url: "../sEightZeroOne/sEightZeroOne"
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