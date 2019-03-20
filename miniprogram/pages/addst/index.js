// pages/addst/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertiz:'',
    usersg:'',
    userkey:''
  },

  /**
   * 获取输入的体重
   */
  bindUserTiz: function(e){
    this.setData({
      usertiz: e.detail.value
    });
  },

  /**
   * 获取输入的身高
   */
  bindUserSg: function(e) {
    this.setData({
      usersg: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userkey: options.userkey
    });
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

  },


  /**
   * 
   */
  nextFunction: function() {
    // if(this.data.usertiz.length==0){
    //   wx.showToast({
    //     title: '体重不能为空',
    //     icon: 'loading',
    //     duration: 1000
    //   })
    //   return;
    // }
    // if (this.data.usersg.length == 0) {
    //   wx.showToast({
    //     title: '身高不能为空',
    //     icon: 'loading',
    //     duration: 1000
    //   })
    //   return;
    // }
    // const usertiz = this.data.usertiz;//体重
    // const usersg = this.data.usersg;//身高
    // const biaozhuntz = (usertiz/(usersg*usersg)).toFixed(2);

    // const db = wx.cloud.database()
    // db.collection('counters').doc(this.data.userkey).update({
    //   data: {
    //     usertiz: usertiz,
    //     usersg: usersg,
    //     biaozhuntz: biaozhuntz,
    //   },
    //   success: res => {
    //     
    //   },
    //   fail: err => {
    //     icon: 'none',
    //     console.error('[数据库] [更新记录] 失败：', err)
    //   }
    // })

    wx.navigateTo({
      url: '../tzbz/index?userkey=' + 1
    });
  }

})