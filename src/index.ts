import { App } from "vue";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { ThemeModule, IThemeState } from "./themeModule";
export interface IState {
  theme: IThemeState;
}
export interface IOptions {
  vuex?: Store<Record<any, any>>;
  themes?: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const key: InjectionKey<Store<IState>> = Symbol();
export const themeStore = createStore<IState>({
  modules: {
    VTHEME: ThemeModule,
  },
});

export default {
  install(Vue: App, options: IOptions) {
    if (options?.vuex) {
      options.vuex.registerModule("VTHEME", ThemeModule);
    } else {
      Vue.use(themeStore, key);
    }
  },
};
