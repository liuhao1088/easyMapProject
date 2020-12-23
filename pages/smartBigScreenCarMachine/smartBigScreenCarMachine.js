// pages/smartBigScreenCarMachine/smartBigScreenCarMachine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img12.360buyimg.com/ddimg/jfs/t1/135672/10/15657/225425/5faa03b3E011a8c1e/9ad454a61e8ae41c.png',
      'https://img12.360buyimg.com/ddimg/jfs/t1/131939/10/15441/166747/5faa03c1Eaf37dd60/2c4f0faad00c967e.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/124353/32/17850/165471/5faa03ceEa68b602d/93873c3d8b6858e4.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/153850/19/5495/236153/5fabb020Ed181f6d6/912b95947bb893ef.png',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../ar/ar"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../dThreePro/dThreePro"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../dSixPro/dSixPro"
      })
    } else {
      wx.navigateTo({
        url: "../threeSixZeroWiFi/threeSixZeroWiFi"
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