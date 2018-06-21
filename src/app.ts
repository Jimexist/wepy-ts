import wepy from "wepy";
import "wepy-async-function";
import { setStore } from "wepy-redux";

setStore({});

export default class App extends wepy.app {
  config = {
    pages: [""],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  globalData = {
    userInfo: null
  };

  constructor() {
    super();
    this.use("requestfix");
  }

  onLaunch() {
    this.testAsync();
  }

  sleep(s) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise resolved");
      }, s * 1000);
    });
  }

  async testAsync() {
    const data = await this.sleep(3);
    console.log(data);
  }

  getUserInfo(cb) {
    const that = this;
    if (this.globalData.userInfo) {
      return this.globalData.userInfo;
    }
    wepy.getUserInfo({
      success(res) {
        that.globalData.userInfo = res.userInfo;
        cb && cb(res.userInfo);
      }
    });
  }
}
