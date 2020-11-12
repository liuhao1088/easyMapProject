// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // top:''
  },
  companyProfiledj: function () {
    wx.navigateTo({
      url: "../companyProfile/companyProfile"
    })
  },
  hdRecorderdj: function () {
    wx.navigateTo({
      url: "../hdRecorder/hdRecorder"
    })
  },
  smartStreamingdj: function () {
    wx.navigateTo({
      url: "../smartStreaming/smartStreaming"
    })
  },
  smartHdHiddendj: function () {
    wx.navigateTo({
      url: "../smartHdHidden/smartHdHidden"
    })
  },
  smartBigScreenCarMachinedj: function () {
    wx.navigateTo({
      url: "../smartBigScreenCarMachine/smartBigScreenCarMachine"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var windowHeight = wx.getSystemInfoSync().windowHeight;
    // console.log(windowHeight);
    // if(windowHeight>800){
    //   this.setData({
    //     top: "30%"
    //   })
    // }else{
    //   this.setData({
    //     top: "38%"
    //   })
    // }
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
      return{
        title: "易图", //分享标题
        imageUrl: 'https://img13.360buyimg.com/ddimg/jfs/t1/121210/17/18389/166336/5faca14cE7949307a/1da2d6b96122e01d.jpg', //图片路径

      }
    
  }
})