<template>
    <div class="signinBox">
        <canvas-bg></canvas-bg>

        <el-form ref="signinForm" :model="signinForm" class="signinForm" label-width="0px">
            <h3 class="tc mt0">欢迎登录系统</h3>
            <el-form-item prop="username">
                <el-input v-model="signinForm.username" prefix-icon="fa fa-user" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item class="mb10" prop="password">
                <el-input v-model="signinForm.password" type="password" prefix-icon="fa fa-lock"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="mb10 clearfix" prop="remember">
                <el-checkbox class="fl" v-model="signinForm.remember ">记住密码</el-checkbox>
                <el-button type="text" class="fr">找回密码</el-button>
            </el-form-item>
            <el-form-item class="">
                <el-button type="primary" class="block" @click="signinFn">登录</el-button>
            </el-form-item>
        </el-form>


    </div>
</template>

<script>

    import CanvasBg from '@com/CanvasBg' ;
    import md5 from "md5" ;
    import {signin} from '@tools/common'

    export default {
        name: "signin",
        components: {CanvasBg},
        data() {
            return {
                signinForm: {
                    username: '',
                    password: '',
                    remember: true
                },
                rules: {
                    username: [
                        {required: true, message: '请输入账号'},
                    ],
                    password: [
                        {required: true, message: '请输入密码'},
                    ]
                }
            }
        },
        created(){

        },
        methods: {
            signinFn() {
                var form = this.signinForm;

                if (form.username == "") {
                    this.alertBox("请输入账号", "error");
                    return false;
                }
                if (form.password == "") {
                    this.alertBox("请输入密码", "error");
                    return false;
                }
                var params = {
                    username: form.username,
                    password: md5(form.password),
                }

                this.loading("show", '登录中...');

                setTimeout(() => {
                    this.loading("hide");
                    var user = {name: form.username, uid: new Date().getTime()}
                    signin(user) ;
                }, 2000);


            },

        }


    }
</script>

<style scoped lang="less">
    .signinBox {
        position: relative;
    }

    .signinForm {
        position: absolute;
        border-radius: 5px;
        padding: 30px;
        z-index: 100;
        top: 50%;
        left: 50%;
        width: 260px;
        transform: translate(-50%, -50%);
        background: #fff;
    }


</style>
