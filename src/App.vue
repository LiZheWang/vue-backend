<template>
    <div id="app" class="appPage">
        <Transition-router></Transition-router>
    </div>
</template>

<script>
    import TransitionRouter from '@views/layou/TransitionRouter'
    export default {
        name: 'App',
        components: {TransitionRouter},
    }
</script>

<style>


</style>
