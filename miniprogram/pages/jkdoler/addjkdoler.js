// pages/jkdoler/addjkdoler.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null,
    subjectname: '',
    subjectanserA: '',
    subjectanserB: '',
    subjectanserC: '',
    subjectanserD: '',
    subjectanser: ''
  },

  getsubjectanserA: function(e) {
    this.setData({
      subjectanserA: e.detail.value
    });
  },
  getsubjectanserB: function(e) {
    this.setData({
      subjectanserB: e.detail.value
    });
  },
  getsubjectanserC: function(e) {
    this.setData({
      subjectanserC: e.detail.value
    });
  },
  getsubjectanserD: function(e) {
    this.setData({
      subjectanserD: e.detail.value
    });
  },
  getsubjectname: function(e) {
    this.setData({
      subjectname: e.detail.value
    });
  },
  getsubjectanser: function(e) {
    this.setData({
      subjectanser: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log("options:", options);
    this.setData({
      type: options.type
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 保存答题
   */
  savejkdoler: function() {
    // console.log('data', this.data);
    var data = {};
    if (this.data.type == 'no') {
      data = {
        subjectname: this.data.subjectname,
        subjectanser: this.data.subjectanser,
        type: this.data.type
      }
    } else {
      data = {
        subjectname: this.data.subjectname,
        subjectanserA: this.data.subjectanserA,
        subjectanserB: this.data.subjectanserB,
        subjectanserC: this.data.subjectanserC,
        subjectanserD: this.data.subjectanserD,
        type: this.data.type
      }
    }
    const db = wx.cloud.database()
    db.collection('jkdoler').add({
      data: data,
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        // this.setData({
        //   counterId: res._id,
        //   count: 1
        // })
        wx.showToast({
          title: '新增记录成功',
          duration: 2000, //持续的时间
          success: function() {
            wx.redirectTo({
              url: '../jkindex/jkindex',
            })
          }
        })
        // console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  }
})