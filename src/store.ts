import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";
import { IState, IThemes } from "./interfaces";

export const key: InjectionKey<Store<IState>> = Symbol();
export const store = createStore<IState>({
  state: {
    theme: "default",
    themes: {},
  },
  getters: {
    THEME: (state) => state.theme,
  },
  mutations: {
    SET_THEME(state, name: string) {
      state.theme = name;
      const style = document.getElementById("v-theme");
      let result = "";
      if (state.themes[name]) {
        result = ":root { ";
        Object.keys(state.themes[name]).forEach((key) => {
          result += `--${key}: ${state.themes[name][key as keyof IThemes]};`;
        });
        result += " }";
      }
      if (style) {
        style.innerText = result;
      }
    },
    SET_THEMES(state, themes) {
      state.themes = themes;
    },
  },
  actions: {
    setTheme({ commit }, name: string) {
      commit("SET_THEME", name);
    },
    setThemes({ commit }, themes: IThemes) {
      commit("SET_THEMES", themes);
    },
  },
});
