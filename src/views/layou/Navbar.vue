<template>

    <div class="navbarWrap">
        <!--左侧菜单-->
        <el-scrollbar class="scrollbarLeftmenuWrap">
            <el-menu :default-active="$route.name" class="el-menu-vertical-demo" :collapse="isCollapse">
                <router-link class="systemLogo" to="/">
                    <img src="../../assets/logo.png" alt="">
                    <span class="name" v-show="isShowName">多动屏</span>
                </router-link>
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
                            <router-link :to="{name:child.name}" :key="child.path" v-for="child in item.children">
                                <el-menu-item :showindex="child.path" :index="child.name">{{child.meta.title}}
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </el-scrollbar>

        <!--右侧内容-->
        <div class="page-container">
            <!--头部header-->
            <div class="pageHeader">

                <div class="left">
                    <el-tooltip v-if="isScreen" class="item" effect="dark" :content="isCollapse ? '展开菜单' : '折叠菜单'"
                                placement="bottom">
                        <a href="javascript:;" @click="changeCollapse" class="onoffButton"><i class="fa fa-outdent"></i></a>
                    </el-tooltip>
                </div>


                <div class="rightTools">
                    <el-dropdown class="navbarBtn" trigger="click" @command="changeLanguage">
                        <span class="el-dropdown-link">
                            <i class="fa fa-font-awesome"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="cn">中文</el-dropdown-item>
                            <el-dropdown-item command="en">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-tooltip v-if="isScreen" class="item" effect="dark" content="全屏显示" placement="bottom">
                        <a href="javascript:;" class="navbarBtn" @click="toggleScreen"><i class="fa fa-arrows-alt"></i></a>
                    </el-tooltip>
                    <el-popover
                            ref="popover"
                            placement="bottom"
                            title=""
                            width="280"
                            @show="tabPopoverShow"
                            trigger="click">
                        <el-tabs v-model="tabState">
                            <el-tab-pane label="商户通知" name="first">
                                <Itemlist>
                                    <i class="fa fa-envelope-o" slot="label"></i>
                                    <p class="title">系统提示</p>
                                    <div class="info">服务已经到期,请尽快续费，以免耽误使用</div>
                                    <el-button type="text" slot="tools">续费</el-button>
                                </Itemlist>
                            </el-tab-pane>
                            <el-tab-pane label="系统消息" name="second">
                                <Itemlist>
                                    <i class="fa fa-envelope-o" slot="label"></i>
                                    <p class="title">版本更新</p>
                                    <div class="info">多动屏安卓APP新版本发布啦！</div>
                                    <el-button type="text" slot="tools">立即更新</el-button>
                                </Itemlist>
                            </el-tab-pane>
                        </el-tabs>

                    </el-popover>

                    <a href="javascript:;" v-popover:popover class="navbarBtn"><i class="fa fa-bell"></i></a>

                    <el-dropdown class="user" trigger="click" @command="userDropdown">
                        <span class="el-dropdown-link">
                          {{sessionUser ? sessionUser.name : '出错了'}}
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="edit_password">修改密码</el-dropdown-item>
                            <el-dropdown-item divided command="signout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>


            <!--页面内容-->
            <div class="pageBody">
                <slot></slot>
            </div>


        </div>
    </div>


</template>

<script>
    import {setI18nLocale} from '@tools/common'
    import screenfull from 'screenfull'
    import Itemlist from '@com/Itemlist'
    import {signout} from '@tools/common'

    export default {
        name: "navbar",
        components: {Itemlist},
        data() {
            return {
                isCollapse: false,
                tabState: 'first',
                isShowName: true
            }
        },
        methods: {
            toggleScreen() {
                screenfull.toggle();
            },
            tabPopoverShow() {

            },
            changeCollapse() {
                this.isCollapse = !this.isCollapse;
                this.isShowName = !this.isCollapse;
            },
            changeLanguage(val) {
                setI18nLocale.call(this, val);
            },
            userDropdown(type) {
                if (type == "signout") {
                    signout();
                    this.alertBox("退出登录成功");
                }

            }
        },

        computed: {
            isScreen() {
                return screenfull.enabled;
            },
        }

    }
</script>

<style scoped lang="less">
    @import "../../style/fns.less";

    //外层布局
    .navbarWrap {
        display: flex;
        height: 100vh;
        .scrollbarLeftmenuWrap {
            height: 100%;
        }
        .page-container {
            height: 100%;
            flex: 1;
            position: relative;
            .pageHeader {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            .pageBody {
                height: 100%;
                padding-top: @headerHeight;
            }
        }
    }

    //左侧菜单
    .scrollbarLeftmenuWrap {
        z-index: 10;
        .borderRight ;

        overflow: hidden;
        left: 0;
        top: 0;
        background: #fff;

        .systemLogo {
            .logotop ;
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-size: 18px;
            color: @textColor;
            text-align: center;
            font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-weight: 600;
            img {
                width: 30px;
                height: 30px;
                display: block;
                overflow: hidden;
                border-radius: 50%;
            }
            .name {
                margin-left: 10px;
            }
        }
        .fa {
            margin-right: 4px;
            font-size: 18px;
        }
        .el-menu {
            border-right: 0;
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: @leftmentWidth;
        }

        .el-submenu > .el-menu .is-active {
            background: #ecf5ff;
        }
    }

    //顶部header
    .pageHeader {
        .logotop ;
        padding: 0 12px 0 0;
        z-index: 10;
        background: #fff;
        .borderBottom ;
        position: relative;
        .onoffButton, .navbarBtn {
            width: 60px;
            height: @headerHeight;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(0, 0, 0, .65);
            cursor: pointer;
            .el-dropdown-link {
                width: 100%;
                text-align: center;
            }
        }
        .left {
            display: flex;
            align-items: center;
        }
        .rightTools {
            position: absolute;
            top: 0;
            right: 0px;

            display: flex;
            align-items: center;

            .user .el-dropdown-link {
                cursor: pointer;
                padding: 0 20px;
                line-height: @headerHeight;
                display: block;
            }

            .navbarBtn {
                font-size: 16px;
                width: 40px;
            }

        }
        .rightTools .user:hover, .onoffButton:hover, .navbarBtn:hover {
            background: #e6f7ff;
        }

    }

</style>
