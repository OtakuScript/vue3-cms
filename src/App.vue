<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VueLogo from "@/assets/logo.png"

export default defineComponent({
  name: "App",
  data() {
    return {
      VueLogo
    }
  },
  components: {},
  mounted() {
    if (document.getElementById("VueLogo")) return
    this.mountedLogoByJs()
  },
  methods: {
    mountedLogoByJs() {
      let img = new Image()
      img.src = this.VueLogo
      img.id = "VueLogo"
      img.style.position = "absolute"
      img.style.left = "10px"
      img.style.top = "10px"
      img.width = 320
      img.height = 320
      let root = document.getElementById("app")
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      root!.append(img)
    }
  }
})
</script>

<style lang="less"></style>
