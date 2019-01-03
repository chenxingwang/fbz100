// pages/jkdoler/jkdoler.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //js
  //通过判断改变状态时value值是否为空来来判断是否被选中  
  ischeckbox: function (e) {
    if (e.detail.value == '') {
      check = 0
    }
    else {
      check = 1
    }

    console.log(e.detail.value);
    console.log(check);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('加载')
    const db = wx.cloud.database()
    var isrecord = false;
    //查询是否答过题
    db.collection('jkdolerrecord').where({
      recordeid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length>0) {
          console.log('打过题')
          isrecord = true;
        }
        // console.log('[数据库] [查询答题记录] 成功: ', res)
      },
      fail: err => {
        isrecord = false;
        // console.error('[数据库] [查询答题记录] 失败：', err)
      }
    });

    if (isrecord == false) { // 如何该用户已经答过题则不进加载做题页面，如果未答过题就进做题页面
      db.collection('jkdoler').skip(50).limit(50).get({
        success: res => {
          this.setData({
            // queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data
          })
          console.log('[数据库] [查询题目] 成功: ', res)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          // console.error('[数据库] [查询题目] 失败：', err)
        }
      })
      // 调用云函数
      // wx.cloud.callFunction({
      //   name: 'jkdoler',
      //   data: {},
      //   success: res => {
      //     console.log('[云函数] [jkdoler] suject data: ', res.data)
      //     this.setData({
      //       //queryResult: JSON.stringify(res.data, null, 2)
      //       queryResult: res.data
      //     })
      //   },
      //   fail: err => {
      //     console.error('[云函数] [jkdoler] 调用失败', err)
      //     wx.navigateTo({
      //     url: '../deployFunctions/deployFunctions',
      //     })
      //   }
      // })
    }

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
    console.log('卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('下啦');
    //wx.showNavigationBarLoading() //在标题栏中显示加载
    const db = wx.cloud.database()
    var isrecord = false;
    //查询是否答过题
    db.collection('jkdolerrecord').where({
      recordeid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length > 0) {
          console.log('打过题')
          isrecord = true;
        }
        console.log('[数据库] [查询答题记录] 成功: ', res)
      },
      fail: err => {
        isrecord = false;
        // console.error('[数据库] [查询答题记录] 失败：', err)
      }
    });

    if (isrecord == false) { // 如何该用户已经答过题则不进加载做题页面，如果未答过题就进做题页面
      db.collection('jkdoler').where({
        _openid: this.data.openid
      }).get({
        success: res => {
          this.setData({
            // queryResult: JSON.stringify(res.data, null, 2)
            queryResult: res.data
          })
          // console.log('[数据库] [查询题目] 成功: ', res)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '查询记录失败'
          })
          // console.error('[数据库] [查询题目] 失败：', err)
        }
      })
    }
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

  }

})