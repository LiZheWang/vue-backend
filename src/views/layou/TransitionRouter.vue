<template>
    <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
    //这个页面转场页面 ，配置好以后整个系统都会用这个转场规则跳转
    export default {
        name: "TransitionRouter"
    }
</script>

<style scoped lang="less">
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.4s ease-out;
        position: absolute;
        width: 100%;
    }
    .slide-fade-enter {
        opacity: 0;
        transform: translateX(50px);
    }
    .slide-fade-leave-active {
        opacity: 0;
        transform: translateX(-50px);
    }
</style>