// pages/sextx/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n01.jpg',
        code: 'n01'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n02.jpg',
        code: 'n02'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n03.jpg',
        code: 'n03'
      },
      {
        name: '',
        icon: '../../../../images/n04.jpg',
        code: 'n04'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n05.jpg',
        code: 'n05'
      },
      {
        name: '',
        icon: '../../../../images/n06.jpg',
        code: 'n06'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n07.jpg',
        code: 'n07'
      },
      {
        name: '',
        icon: '../../../../images/n08.jpg',
        code: 'n08'
      },
      {
        name: '',
        url: '/pages/Course/course',
        icon: '../../../../images/n09.jpg',
        code: 'n09'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad sex index')
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