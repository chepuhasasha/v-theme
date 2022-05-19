import { App } from "vue";
import { IThemes } from "./interfaces";
declare const _default: {
    plagin: {
        install(Vue: App<any>, options?: {
            defaultTheme: string;
            themes: IThemes;
        }): void;
    };
    store: import("vuex").Store<import("./interfaces").IState>;
    key: import("vue").InjectionKey<import("vuex").Store<import("./interfaces").IState>>;
};
export default _default;
