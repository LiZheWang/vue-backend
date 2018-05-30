<template>
    <div id="app" class="appPage">
        <navbar></navbar>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    import navbar from '@views/layou/navbar'

    export default {
        name: 'App' ,
        components:{navbar} ,
    }
</script>

<style>



</style>
