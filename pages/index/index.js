// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [
      'https://img11.360buyimg.com/ddimg/jfs/t1/127014/38/18295/231100/5fabaa8fE5194b55c/7e3431e9ba0a69e7.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/140834/9/14171/176644/5fabaaa6E8fdbb263/19db97005d6251d8.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/138200/24/14328/196538/5faf32ccE1d7fa010/2736a6c123edaa96.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/134353/19/15417/248835/5fa9f8ccE22dbbe7d/f535902598e5dd4e.png',
    ]
  },
  toDetails(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.navigateTo({
        url: "../hdRecorder/hdRecorder"
      })
    } else if (index === 1) {
      wx.navigateTo({
        url: "../smartStreaming/smartStreaming"
      })
    } else if (index === 2) {
      wx.navigateTo({
        url: "../smartHdHidden/smartHdHidden"
      })
    } else {
      wx.navigateTo({
        url: "../smartBigScreenCarMachine/smartBigScreenCarMachine"
      })
    }
  },



  companyProfiledj: function () {
    wx.navigateTo({
      url: "../companyProfile/companyProfile"
    })
  },
  hdRecorderdj: function () {

  },
  smartStreamingdj: function () {

  },
  smartHdHiddendj: function () {

  },
  smartBigScreenCarMachinedj: function () {

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
    wx.showShareMenu({

      withShareTicket: true,

      menus: ['shareAppMessage', 'shareTimeline']

    })
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
  onShareAppMessage: function (options) {
    return {
      title: "易图", //分享标题
      imageUrl: 'https://img13.360buyimg.com/ddimg/jfs/t1/121210/17/18389/166336/5faca14cE7949307a/1da2d6b96122e01d.jpg', //图片路径

    }

  }
})