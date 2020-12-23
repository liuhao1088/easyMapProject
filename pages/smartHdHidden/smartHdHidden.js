// pages/smartHdHidden/smartHdHidden.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/148385/28/19680/36569/5fe2efaaE816b1626/8194d863d1ca76a3.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/151502/15/11251/45114/5fe2efd2Eeed8e21f/7697201dce9a9180.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/145566/39/19754/61936/5fe2efe6E07911a1e/4ed72e76499f8028.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/123645/33/18614/170746/5faf326fE59b088cd/0fe1d85cc5fa203a.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/121514/12/18597/156103/5faf32bbEddfad750/3bf240ef2e336021.png',
      'https://img12.360buyimg.com/ddimg/jfs/t1/130545/2/15111/137665/5faa030fEe3765433/641cbb6cf77ba91b.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/125112/8/18254/161140/5faa0320E1e62b7ba/eba5559b252c7b4d.png'
    ]
  },
  toDetails(e){
    let index = e.currentTarget.dataset.index;
    if(index === 0){
      wx.navigateTo({
        url: "../eSevenSevenFive/eSevenSevenFive"
      })
    }else if(index === 1){
      wx.navigateTo({
        url: "../eSevenSevenFivem/eSevenSevenFivem"
      })
    }else if(index === 2){
      wx.navigateTo({
        url: "../eSevenSevenFiveAr/eSevenSevenFiveAr"
      })
    }else if(index === 3){
      wx.navigateTo({
        url: "../eSixThreeZero/eSixThreeZero"
      })
    }else if(index === 4){
      wx.navigateTo({
        url: "../eSixThreeZeroWiFi/eSixThreeZeroWiFi"
      })
    }else if(index === 5){
      wx.navigateTo({
        url: "../eSevenSevenTwo/eSevenSevenTwo"
      })
    }else{
      wx.navigateTo({
        url: "../eSevenSevenThree/eSevenSevenThree"
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