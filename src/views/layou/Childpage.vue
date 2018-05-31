<template>
    <div class="childPage">
        <div class="childPageTitle">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <template v-if="routes.length">
                    <el-breadcrumb-item
                            v-for="item in routes"
                            :key="item.path"
                            v-if="item.name != 'Home'"
                            :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
            <div class="searchBox clearfix" v-if="$slots.search || $slots.button">
                <div class="fr pageToolButtons"><slot name="button"></slot></div>
                <el-form :inline="true"  slot="search"  class="search-form-inline">
                    <slot name="search"></slot>
                </el-form>
            </div>
            <div class="info" v-if="$slots.info"><slot name="info"></slot></div>
        </div>


        <el-scrollbar class="childPageBody" >
            <div class="childPageContent">
                <slot></slot>
            </div>
        </el-scrollbar>



    </div>
</template>

<script>
    export default {
        name: "childpage",
        created(){
        }
    }
</script>

<style scoped lang="less">
    @import "../../style/fns.less";
    .childPage {
        height: 100%;
        display: flex;
        flex-direction: column;

        .childPageTitle {
            z-index: 9;
            flex: none;
            background: #fff;
            padding: 20px;
            .borderBottom ;
            .searchBox {
                margin-top: 20px;
                .pageToolButtons {
                    float: right;
                    padding-right: 20px;
                }
            }
        }
        .childPageBody {
            flex: 1;
            overflow: hidden;
            .childPageContent{
                background: #fff;
                margin: 20px;
                margin-bottom: 80px;
                padding: 20px;
                box-shadow: 1px 1px 6px rgba(0, 21, 41, 0.08);
                border-radius: 3px;
            }
        }
    }
</style>
