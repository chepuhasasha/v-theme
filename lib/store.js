import { createStore } from "vuex";
export const key = Symbol();
export const store = createStore({
    state: {
        theme: "default",
        themes: {},
    },
    getters: {
        THEME: (state) => state.theme,
    },
    mutations: {
        SET_THEME(state, name) {
            state.theme = name;
            const style = document.getElementById("v-theme");
            let result = "";
            if (state.themes[name]) {
                result = ":root { ";
                Object.keys(state.themes[name]).forEach((key) => {
                    result += `--${key}: ${state.themes[name][key]};`;
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
        setTheme({ commit }, name) {
            commit("SET_THEME", name);
        },
        setThemes({ commit }, themes) {
            commit("SET_THEMES", themes);
        },
    },
});
//# sourceMappingURL=store.js.map