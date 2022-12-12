import useGlobalStore from "./modules/global.store";
import useUserStore from "./modules/user.store";

// const files = import.meta.globEager("./modules/*.store.ts");
// const stores: any = Object.entries(files).reduce((prev, [key, value]) => {
//   console.log(key, value);
//   const store = value.default;
//   prev[store.$id] = store;
//   return prev;
// }, {});
// console.log("store: ", stores);
export { useGlobalStore, useUserStore };
