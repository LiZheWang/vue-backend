<template>
    <Childpage>
        <template slot="search">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >查询</el-button>
            </el-form-item>
        </template>

        <template slot="button">
            <el-button type="primary" icon="el-icon-plus" >新增会员</el-button>
        </template>

        <div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div>
        <div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div>
        <div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div>
        <div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div><div>store2</div>

        <div>123123123</div>


    </Childpage>
</template>

<script>
    export default {
        name: "store2",
        components: {},

        data() {
            return {
                collapse: true,
                switchValue: true ,
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        created() {

        },

        methods: {
            switchChange() {
                this.collapse = this.switchValue;
                console.log(this.collapse);
            }
        }

    }
</script>

<style scoped>

</style>
