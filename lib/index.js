import { store, key } from "./store";
export default {
    install(Vue, options = {
        defaultTheme: "default",
        themes: { default: {} },
    }) {
        Vue.use(store, key);
        const style = document.createElement("style");
        style.id = "v-theme";
        document.head.appendChild(style);
        store.dispatch("setThemes", options.themes);
        store.dispatch("setTheme", options.defaultTheme);
    },
};
export { store, key };
//# sourceMappingURL=index.js.map