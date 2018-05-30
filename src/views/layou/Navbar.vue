<template>

    <div>
        <el-scrollbar class="scrollbarLeftmenuWrap" wrapClass="scrollbarLeftmenu">
          <router-link class="systemLogo" to="/">
            <img src="../../assets/logo.png" alt="">多动屏
          </router-link>
            <el-menu
                    :isCollapse="isCollapse"
                    :default-active="$route.name"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    text-color="#fff"
                    background-color="#001529"
                    active-text-color="#ffffff">

                <template v-if="routers.length">
                  <el-submenu :index="item.name"
                              :key="item.path"
                              v-if="!item.hidden"
                              v-for="item in routers">
                    <template slot="title">
                      <i :class="item.icon" v-if="item.icon"></i>
                      <span>{{item.meta.title}}</span>
                    </template>
                    <el-menu-item-group v-if="item.children && item.children.length">
                      <router-link :to="child.path" :key="child.path" v-for="child in item.children">
                        <el-menu-item :showindex="child.path" :index="child.name" >{{child.meta.title}}</el-menu-item>
                      </router-link>
                    </el-menu-item-group>
                  </el-submenu>
                </template>

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

           <slot></slot>

        </div>
    </div>


</template>

<script>
    export default {
        name: "navbar" ,
        data(){
            return {
                isCollapse : false
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
        },
    }
</script>

<style scoped>
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
