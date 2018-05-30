<template>
    <div>
        this is home
        <router-link :to="{name:'Store'}">
            <el-button type="primary">跳转</el-button>
        </router-link>

        <p>i18n测试</p>
        <p>
            <el-button type="primary" ><i class="fa fa-bell"></i>测试</el-button>
        </p>


    </div>
</template>

<script>

    import cookie from '@tools/cookie'
    import Ajax from '@tools/ajax'
    import {getI18n} from '@tools/common'

    export default {
        name: "Home",

        created() {

        },

        methods: {

        }


    }
</script>

<style scoped>

</style>