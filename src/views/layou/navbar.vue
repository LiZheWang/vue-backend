<template>

    <div>
        <el-scrollbar class="scrollbarLeftmenuWrap" wrapClass="scrollbarLeftmenu">
            <a href="/" class="systemLogo"><img src="../../assets/logo.png" alt="">多动屏</a>
            <el-menu
                    :isCollapse="isCollapse"
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    text-color="#fff"
                    background-color="#001529"
                    active-text-color="#ffffff">

                <el-submenu index="1">
                    <template slot="title">
                        <i class="fa fa-user"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-scrollbar>
        <div class="page-container">
            <div class="pageHeader">
                <a href="javascript:;" @click="changeCollapse" class="onoffButton"><i class="fa fa-outdent"></i></a>
                <div class="rightTools">
                    <el-dropdown class="user" trigger="click">
                    <span class="el-dropdown-link">
                        用户名<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "navbar" ,
        data(){
            return {
                isCollapse : true
            }
        },
        methods : {
            changeCollapse(){
                this.isCollapse = !this.isCollapse ;
                console.log( this.isCollapse );
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>