// pages/tzbz/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tzzs:'18.3',
    bfb:'0%',
    texttz:'',
    imgwidth:'',
    usersex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let length = 28;
    let shortl = 10;
    // console.log("options:",options);
    this.setData({
      tzzs: options.biaozhuntz,
      usersex: options.usersex
    });
    // console.log(this.data);
    if (this.data.tzzs < 18.5) {
      this.setData({
        texttz: "您的体重指数为" + this.data.tzzs + "体重偏轻，平时注意补充营养并适量运动！"
      });
    } else if (18.5 <= this.data.tzzs && this.data.tzzs < 24.0) {
      this.setData({
        texttz: "您的体重指数为" + this.data.tzzs + "体重正常，请保持哦！平时注意补充营养并适量运动！"
      });
    } else if (24.0 <= this.data.tzzs && this.data.tzzs < 28.0) {
      this.setData({
        texttz: "您的体重指数为" + this.data.tzzs + "体重超重啦，要加强运动并注意补充营养！"
      });
    } else if (this.data.tzzs >= 28.0) {
      
      this.setData({
        texttz: "您的体重指数为" + this.data.tzzs + "体型很肥胖啦，要加强运动并注意补充营养！"
      });
    }
    let bfbs = (((this.data.tzzs - shortl) / length) * 100).toFixed(2);
    let imgwidth = 2;
    bfbs = bfbs - imgwidth / 2;
    // console.log(bfbs);
    if (bfbs<0){
      bfbs = 0;
    } else if (bfbs>100) {
      bfbs = 97;
    }
    
    this.setData({
      bfb: bfbs + "vw",
      imgwidth: imgwidth + 'vw'
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

  nextFunction: function () {
    wx.navigateTo({
      url: '../addyw/index?usersex=' + this.data.usersex
    });
  }

})