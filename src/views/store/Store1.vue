<template>
    <Childpage>
        <div class="names">store1</div>

        <el-button type="primary" @click="click">i18n测试</el-button>

    </Childpage>
</template>

<script>
    export default {
        name: "store1",
        methods : {
            click(){
                this.comRemove({
                    success : () => {

                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>
