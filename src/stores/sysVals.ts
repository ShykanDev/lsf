import { defineStore } from 'pinia'

export const sysValues = defineStore('sysVals', {
  state: () => ({
    userLogged: false,
    cookiesAccepted: false,
    userName: '',
  }),
  getters: {
    getUserLogged: (state) => state.userLogged,
    getCookiesAccepted: (state) => state.cookiesAccepted,
    getUserName: (state) => state.userName,
  },
  actions: {
    setUserLogged(value: boolean) {
      this.userLogged = value
    },
    setCookiesAccepted(value: boolean) {
      this.cookiesAccepted = value
    },
    setUserName(value: string) {
      this.userName = value
    },
  },
  persist:true
})
