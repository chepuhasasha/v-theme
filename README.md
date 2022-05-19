# v-theme (in developing)

![header](./assets/HEADER.svg)

[![stars](https://badgen.net/github/stars/chepuhasasha/v-theme)](https://github.com/chepuhasasha/v-theme)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-theme)](https://github.com/chepuhasasha/v-theme)
[![license](https://badgen.net/github/license/chepuhasasha/v-theme?color=cyan)](https://github.com/chepuhasasha/v-theme/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-theme?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-theme)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-theme?label=issues)](https://github.com/chepuhasasha/v-lang/issues)

## Contents

- [Quick start](#quick-start)

---

## Quick start

### Install

```
npm install @chepuhasasha/v-theme
```

### Сreate a theme

Создайте файл для темы

`light.json`

```json
{
  "my_css_variable": "red"
}
```
или `light.js/ts`

```js
export default {
  "my_css_variable": "red"
}
```


### Register the plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VTheme from "@chepuhasasha/v-theme";
import light from "./themes/light.json";
import dark from "./themes/light.json";

createApp(App)
  .use(VTheme, {
    defaultTheme: "light",
    themes: {
      light,
    },
  })
  .mount("#app");
```
