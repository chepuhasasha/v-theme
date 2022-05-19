import { Module } from "vuex";
import { IState } from ".";

export interface IThemeState {
  name?: string;
  themes?: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const ThemeModule: Module<any, any> = {
  state: {
    name: "default",
  },
  getters: {
    THEME: (state: IThemeState) => state.name,
  },
  mutations: {
    SET_THEME(state, name: string) {
      state.name = name;
    },
  },
  actions: {
    setTheme({ commit }, name: string) {
      commit("SET_THEME", name);
    },
  },
};
