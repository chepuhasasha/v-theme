import { InjectionKey } from "vue";
import { Store } from "vuex";
import { IState } from "./interfaces";
export declare const key: InjectionKey<Store<IState>>;
export declare const store: Store<IState>;
