export interface IThemes {
    [key: string]: {
        [key: string]: string;
    };
}
export interface IState {
    theme: string;
    themes: IThemes;
}
