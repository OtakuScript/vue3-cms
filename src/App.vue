<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HelloWorld from "components/HelloWorld.vue"
import faviconIco from "public/favicon.ico"

export default defineComponent({
  name: "App",
  data() {
    return {
      faviconIco
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.$nextTick(() => {
      let img = new Image()
      img.src = this.faviconIco
      let root = document.getElementById("app")
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      root!.append(img)
    })
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
