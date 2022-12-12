import { defineStore } from "pinia";

export default defineStore("useGlobalStore", {
  state: () => ({
    count: 2,
    dataDict: {},
    interval: null,
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2;
    },
  },

  actions: {
    getDataDict() {
      setTimeout(() => {
        this.dataDict = {
          typeList: [],
        };
      }, 1000);
    },
    startInterval() {
      if (this.interval) this.interval = null;
      // @ts-ignore
      this.interval = setInterval(() => {
        this.count *= 2;
      }, 2000);
    },
  },
});
