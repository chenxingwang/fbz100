// pages/jkhb/jkhb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    usersex:'',
    userphone:'',
  },

  bindUserName: function (e){
    this.setData({
      username: e.detail.value
    });
  },

  bindUserSex: function(e){
    this.setData({
      usersex: e.detail.value
    });
  },

bindUserPhone: function(e){
    this.setData({
      userphone: e.detail.value
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("onload jkhb")
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

  /*
  * 用户点击下一步
  */
  nextFunction: function(){
    if(this.data.username.length==0){
      wx.showToast({
        title: '姓名不能为空',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.username.length >= 40) {
      wx.showToast({
        title: '姓名不能不能过长',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (this.data.usersex.length == 0) {
      wx.showToast({
        title: '请选择性别',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (!(/^[1][3,4,5,7,8][0-9]{9}$/.exec(this.data.userphone))) {
      wx.showToast({
        title: '手机号有误',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    
    const db = wx.cloud.database()
    db.collection('customer').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length > 0) {
          db.collection('customer').doc(res.data._id).update({
            data: {
              username: this.data.username,//姓名
              usersex: this.data.usersex,//性别
              userphone: this.data.userphone//电话
            },
            success: res1 => {
              console.log('【数据库】【更新记录】成功：', res1);
              wx.navigateTo({
                url: '../addst/index?usersex=' + this.data.usersex,//跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
              });
            },
            fail: err => {
              wx.showToast({
                title: '网络异常，请稍后重试！',
                icon: 'loading',
                duration: 1000
              })
              // console.error('[数据库] [新增记录] 失败：', err)
            }
          });
        } else {
          db.collection('customer').add({
            data: {
              username: this.data.username,//姓名
              usersex: this.data.usersex,//性别
              userphone: this.data.userphone,//电话
              usertiz: '',//体重
              usersg: '',//身高
              useryw: '',//腰围
              biaozhuntz: '',//体质指数（BMI）=体重（kg）÷身高^2（m）
              qiwtx: '',//期望体型
            },
            success: res => {
              //在返回结果中会包含新创建的记录的 _id
              // wx.showToast({
              //   title: '操作成功',
              // })
              wx.navigateTo({
                url: '../addst/index?usersex=' + this.data.usersex,//跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径
              });
              // console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
            },
            fail: err => {
              wx.showToast({
                title: '网络异常，请稍后重试！',
                icon: 'loading',
                duration: 1000
              })
              // console.error('[数据库] [新增记录] 失败：', err)
            }
          })
        }
        // console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          title: '网络异常，请稍后重试！',
          icon: 'loading',
          duration: 1000
        })
        // console.error('[数据库] [查询记录] 失败：', err)
      }
    });

    
  }
  
})