<template>
    <Navbar>
        <Childpage>
            欢迎登录系统
            <el-button type="primary" @click="testRoute">测试currentRoute</el-button>
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

        methods: {
            testRoute(){
                this.comRemove({
                    success : () => {

                    }
                });
            }
        }


    }
</script>

<style scoped>

</style>
