# v-theme

![header](./assets/HEADER.svg)

Plugin for convenient organization of your style variables.

Peer Dependencies: [vue](https://vuejs.org/), [vuex](https://vuex.vuejs.org/)

[![stars](https://badgen.net/github/stars/chepuhasasha/v-theme)](https://github.com/chepuhasasha/v-theme)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-theme)](https://github.com/chepuhasasha/v-theme)
[![license](https://badgen.net/github/license/chepuhasasha/v-theme?color=cyan)](https://github.com/chepuhasasha/v-theme/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-theme?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-theme)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-theme?label=issues)](https://github.com/chepuhasasha/v-lang/issues)

---

## Install

```
npm install @chepuhasasha/v-theme
```

## Сreate a themes

Creating a theme object from a template.

```json
{
  "YOUR_VARIABLE": "VALUE",
  ...
}
```

> Choose variable names like in css, but without using `"--"`.

## Сreate the following structure

```
themes/
├---  red.ts/js
├---  blue.ts/js
└---  index.ts/js
```

_red.js_

```js
export default {
  primary: "red",
  ...
}
```

_blue.js_

```js
export default {
  primary: "blue",
  ...
}
```

_index.js_

```js
import red from "./red.js";
import blue from "./blue.js";

export default {
  red,
  blue,
};
```

Register the plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VTheme from "@chepuhasasha/v-theme";
import themes from "./themes";

createApp(App)
  .use(VTheme, {
    defaultTheme: "blue",
    themes,
  })
  .mount("#app");
```

> On initialization, the plugin will set the `defaultTheme`.

## Set a Theme

```html
<template>
  <h1>{{ theme }}</h1>
  <button @click="changeTheme">Change theme</button>
</template>

<script lang="ts" setup>
  import { computed } from "vue";
  import { useStore } from "vuex";
  import { key } from "@chepuhasasha/v-theme";

  const store = useStore(key);

  const theme = computed(() => store.getters.THEME);

  const changeTheme = () => {
    if (theme.value === "blue") {
      store.dispatch("setTheme", "red");
      return;
    }
    store.dispatch("setTheme", "blue");
  };
</script>

<style>
  h1 {
    color: var(--primary);
  }
</style>
```
