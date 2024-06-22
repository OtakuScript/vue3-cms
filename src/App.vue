<template>
  <main><RouterView /></main>
  <div id="footerVueLogo"></div>
</template>

<script lang="ts" setup>
import VueLogo from "@/assets/logo.png"
import { onMounted } from "vue"

const mountedVueLogo = () => {
  let img = new Image()
  img.src = VueLogo
  img.id = "VueLogo"
  img.width = 32
  img.height = 32
  let div = document.getElementById("footerVueLogo")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  div!.append(img)
}

onMounted(() => {
  if (document.getElementById("VueLogo")) return
  mountedVueLogo()
})
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#footerVueLogo {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
}
</style>
