import { App } from "vue";
import { InjectionKey } from "vue";
import { Store } from "vuex";
export interface IThemes {
    [key: string]: {
        [key: string]: string;
    };
}
export interface IState {
    theme: string;
    themes: IThemes;
}
export declare const key: InjectionKey<Store<IState>>;
export declare const store: Store<IState>;
declare const _default: {
    install(Vue: App, options?: {
        defaultTheme: string;
        themes: IThemes;
    }): void;
};
export default _default;
