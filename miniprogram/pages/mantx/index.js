// pages/mantx/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m01.jpg',
        code: 'm01'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m02.jpg',
        code: 'm02'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m03.jpg',
        code: 'm03'
      },
      {
        name: '',
        icon: '../../../../images/m04.jpg',
        code: 'm04'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m05.jpg',
        code: 'm05'
      },
      {
        name: '',
        icon: '../../../../images/m06.jpg',
        code: 'm06'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m07.jpg',
        code: 'm07'
      },
      {
        name: '',
        icon: '../../../../images/m08.jpg',
        code: 'm08'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/m09.jpg',
        code: 'm09'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad')
    var that = this
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

  checkedFu: function (event) {
    let code = event.currentTarget.dataset['index'];
    const db = wx.cloud.database()
    db.collection('customer').doc(this.data.openid).update({
      data: {
        qiwtx: code
      },
      success: res => {
        // console.log('【数据库】【更新记录】成功：', res);
        wx.navigateTo({
          url: '../lxjl/index'
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