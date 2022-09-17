const { http } = require("@/utils")
const { makeAutoObservable, runInAction } = require("mobx")


class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }

  async getUserInfo() {
    const res = await http.get('/user/profile')
    runInAction(() => {
      this.userInfo = res.data
    })
    
  }
}

export default UserStore