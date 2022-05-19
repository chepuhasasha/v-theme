import { App } from "vue";
import { IThemes } from "./interfaces";
import { store, key } from "./store";

const plagin = {
  install(
    Vue: App,
    options: { defaultTheme: string; themes: IThemes } = {
      defaultTheme: "default",
      themes: { default: {} },
    }
  ) {
    Vue.use(store, key);
    const style = document.createElement("style");
    style.id = "v-theme";
    document.head.appendChild(style);
    store.dispatch("setThemes", options.themes);
    store.dispatch("setTheme", options.defaultTheme);
  },
};

export default {
  plagin,
  store,
  key,
};
