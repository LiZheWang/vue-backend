<template>
    <div id="app" class="appPage">
        <Navbar>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </Navbar>

    </div>
</template>

<script>

    import Navbar from '@views/layou/Navbar'

    export default {
        name: 'App' ,
        components:{Navbar} ,
    }
</script>

<style>



</style>
