/* eslint-disable no-unused-vars */
import HelloWorld from "./components/HelloWorld.vue";

export default {
  install: (app, options) => {
    app.component("HelloWorld", HelloWorld);
  },
};