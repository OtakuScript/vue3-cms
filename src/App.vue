<template>
  <div></div>
</template>

<script lang="ts" setup>
import VueLogo from "@/assets/logo.png"
import { onBeforeMount } from "vue"

const mountedVueLogo = () => {
  let img = new Image()
  img.src = VueLogo
  img.id = "VueLogo"
  img.width = 320
  img.height = 320
  let app = document.getElementById("app")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  app!.append(img)
}

onBeforeMount(() => {
  if (document.getElementById("VueLogo")) return
  mountedVueLogo()
})
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
</style>
