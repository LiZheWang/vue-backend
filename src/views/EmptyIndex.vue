<template>
    <Navbar>
        <Transition-router></Transition-router>
    </Navbar>
</template>
<script>
    import Navbar from '@views/layou/Navbar'
    import TransitionRouter from '@views/layou/TransitionRouter'
    export default {
        name: "empty-index" ,
        components: {Navbar,TransitionRouter},
    }
</script>

<style scoped>

</style>
