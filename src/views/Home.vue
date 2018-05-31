<template>
    <Navbar>
        <Childpage>
            <router-link :to="{name:'Store1'}">store1</router-link>
            <router-link :to="{name:'Store2'}">store2</router-link>
        </Childpage>
    </Navbar>

</template>

<script>
    import Navbar from '@views/layou/Navbar'
    import Childpage from '@views/layou/Childpage'


    export default {
        name: "Home",
        components: {Navbar,Childpage},
        created() {
        },

        methods: {}


    }
</script>

<style scoped>

</style>
