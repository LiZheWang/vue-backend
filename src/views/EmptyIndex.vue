<template>
  <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
    export default {
        name: "empty-index"
    }
</script>

<style scoped>

</style>
