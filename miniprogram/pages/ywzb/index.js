// pages/ywzb/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fuhao: '<',
    usersex:'女',
    useryw:'',
    texttz:'',
    usersg:'',
    shijiyw:'',
    ywjy:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      usersex: options.usersex,
      useryw: options.useryw
    });
    const db = wx.cloud.database()
    db.collection('customer').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        console.log('[数据库] [查询记录] 成功: ', res);
        let usg = res.data[0].usersg;
        let ywbz = 0;
        
        
        if (this.data.usersex == '男') {
          ywbz = ((usg * 100) / 2) - 11;
          let startyw = ywbz - 5;
          let endyw = ywbz + 5;
          this.setData({
            texttz: '根据您提供的身高，您的健康腰围是：' + startyw + 'cm到' + endyw + 'cm',
            usersg: res.data.usersg * 100,
            shijiyw: '您的实际腰围：' + this.data.useryw + 'cm'
          });
          if (this.data.useryw > startyw && this.data.useryw < endyw)
            this.setData({
              ywjy: '您有个一个健康的人鱼腰，加油继续保持哦！'
            });
          if (this.data.useryw <= startyw)
            this.setData({
              ywjy: '您有一个纤细的小蛮腰，要加强锻炼哦！'
            });
          if (this.data.useryw >= endyw)
            this.setData({
              ywjy: '您有一个水桶腰，要加强锻炼哦！'
            });
        } else if (this.data.usersex == '女') {
          ywbz = ((usg * 100) / 2) - 14;
          let startyw = ywbz - 5;
          let endyw = ywbz + 5;
          this.setData({
            texttz: '根据您提供的身高，您的健康腰围是：' + startyw + 'cm到' + endyw + 'cm',
            usersg: res.data.usersg * 100,
            shijiyw: '您的实际腰围：' + this.data.useryw + 'cm'
          });
          if (this.data.useryw > startyw && this.data.useryw < endyw)
            this.setData({
              ywjy: '您有个一个健康的人鱼腰，加油继续保持哦！'
            });
          if (this.data.useryw <= startyw)
            this.setData({
              ywjy: '您有一个纤细的小蛮腰，要加强锻炼哦！'
            });
          if (this.data.useryw >= endyw)
            this.setData({
              ywjy: '您有一个水桶腰，要加强锻炼哦！'
            });
        }
      },
      fail: err => {
        console.error('[数据库] [查询记录] 失败：', err)
      }
    });

    
    console.log(this.data);
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

  nextFunction:function (){
    if (this.data.usersex=='女'){
      wx.navigateTo({
        url: '../sextx/index'
      });
    } else if (this.data.usersex == '男'){
      wx.navigateTo({
        url: '../mantx/index'
      });
    }
    
  }
})