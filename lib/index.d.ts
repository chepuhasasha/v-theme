import { App } from "vue";
import { IThemes } from "./interfaces";
import { store, key } from "./store";
declare const _default: {
    install(Vue: App, options?: {
        defaultTheme: string;
        themes: IThemes;
    }): void;
};
export default _default;
export { store, key };
