// pages/addyw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    useryw:''
  },

  bindUserYw: function(e){
    this.setData({
      useryw: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      usersex: options.usersex
    });
    // console.log(this.data);
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

  nextFunction: function(){
    if (this.data.useryw.length == 0) {
      wx.showToast({
        title: '腰围不能为空',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.useryw.length >= 4) {
      wx.showToast({
        title: '腰围不能过大',
        icon: 'loading',
        duration: 1000
      })
      return;
    }

    const db = wx.cloud.database()
    db.collection('customer').doc(this.data.openid).update({
      data: {
        useryw: this.data.useryw
      },
      success: res => {
        // console.log('【数据库】【更新记录】成功：', res);
        wx.navigateTo({
          url: '../ywzb/index?usersex=' + this.data.usersex + "&useryw=" + this.data.useryw
        });
      },
      fail: err => {
        wx.showToast({
          title: '网络异常，请稍后重试！',
          icon: 'loading',
          duration: 1000
        });
          // console.error('[数据库] [更新记录] 失败：', err)
      }
    });

  }

})