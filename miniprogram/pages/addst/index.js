// pages/addst/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usertiz:'',
    usersg:'',
    usersex:'',
    biaozhuntz:''
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


  /**
   * 
   */
  nextFunction: function() {
    if(this.data.usertiz.length==0){
      wx.showToast({
        title: '体重不能为空',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.usertiz > 1000) {
      wx.showToast({
        title: '体重不超过1000',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.usersg.length == 0) {
      wx.showToast({
        title: '身高不能为空',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.usersg > 400) {
      wx.showToast({
        title: '身高不超过400',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.usersg < 30) {
      wx.showToast({
        title: '身高不小于30',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    let usertiz = this.data.usertiz;//体重
    let usersg = this.data.usersg;//身高
    //身高换算为为米
    let resourcesg = (usersg / 100).toFixed(2);
    let biaozhuntz = (usertiz / (resourcesg * resourcesg)).toFixed(2);

    this.setData({
      biaozhuntz: biaozhuntz
    });
    // console.log("addst data:",this.data)
    const db = wx.cloud.database()
    db.collection('customer').doc(this.data.openid).update({
      data: {
        usertiz: usertiz,
        usersg: usersg,
        biaozhuntz: biaozhuntz,
      },
      success: res => {
        // console.log('【数据库】【更新记录】成功：', res);
        wx.navigateTo({
          url: '../tzbz/index?biaozhuntz=' + this.data.biaozhuntz + '&usersex=' + this.data.usersex
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
    })
  }

})