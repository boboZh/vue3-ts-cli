import { App, Component } from "vue";
const files = import.meta.globEager("./**/index.vue");

const components = Object.entries(files).reduce((prev, [key, value]) => {
  const component = value.default;
  prev[component.name] = component;
  return prev;
}, {});
export default {
  install: function (app: App) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value as Component);
    });
  },
};
