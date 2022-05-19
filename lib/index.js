"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const plagin = {
    install(Vue, options = {
        defaultTheme: "default",
        themes: { default: {} },
    }) {
        Vue.use(store_1.store, store_1.key);
        const style = document.createElement("style");
        style.id = "v-theme";
        document.head.appendChild(style);
        store_1.store.dispatch("setThemes", options.themes);
        store_1.store.dispatch("setTheme", options.defaultTheme);
    },
};
exports.default = {
    plagin,
    store: store_1.store,
    key: store_1.key,
};
//# sourceMappingURL=index.js.map