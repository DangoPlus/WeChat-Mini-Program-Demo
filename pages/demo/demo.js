//demo.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  handleContact(e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  bindJumpTap: function () {
    wx.navigateTo({
      url: '../webview/webview'
    })
  }
})